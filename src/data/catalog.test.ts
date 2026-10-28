import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BUSINESS_INFO, BOOKSY_URL, getManchesterStudioStatus } from './business';
import {
  SERVICES_DATA,
  SIGNATURE_TIERS,
  formatPriceGBP,
  formatDuration,
  filterServicesByMenuAndCategory,
  getServiceSummaryStats,
  calculateSessionEstimate,
} from './services';
import { GALLERY_ITEMS, filterGalleryItems } from './gallery';

test('verified business details match official sources', () => {
  assert.equal(BUSINESS_INFO.name, 'Capital Barber by Efi');
  assert.equal(BUSINESS_INFO.address.street, '46 George Street');
  assert.equal(BUSINESS_INFO.address.postcode, 'M1 4HF');
  assert.equal(BUSINESS_INFO.contact.phoneDisplay, '07539 635060');
  assert.equal(BUSINESS_INFO.contact.phoneHref, 'tel:+447539635060');
  assert.equal(BUSINESS_INFO.contact.email, 'capital@eficapitalbarber.com');
  assert.equal(
    BUSINESS_INFO.links.booksy,
    'https://booksy.com/en-gb/193537_capital-barbers-by-efi_barber_628476_manchester'
  );
  assert.equal(BUSINESS_INFO.openingHoursSchedules.length, 2);
});

test('Booksy service catalogue has all 12 verified services with exact prices and durations', () => {
  const booksyServices = filterServicesByMenuAndCategory(SERVICES_DATA, 'booksy', 'all');
  assert.equal(booksyServices.length, 12);

  const skinFade = booksyServices.find((s) => s.id === 'skin-fade');
  assert.ok(skinFade);
  assert.equal(skinFade.priceGBP, 20);
  assert.equal(skinFade.durationMinutes, 30);

  const steamerPackage = booksyServices.find((s) => s.id === 'haircut-beard-steamer');
  assert.ok(steamerPackage);
  assert.equal(steamerPackage.priceGBP, 28);
  assert.equal(steamerPackage.durationMinutes, 45);

  const shapeUp = booksyServices.find((s) => s.id === 'shape-up-beard-trim');
  assert.ok(shapeUp);
  assert.equal(shapeUp.priceGBP, 13);
  assert.equal(shapeUp.durationMinutes, 20);

  for (const service of booksyServices) {
    assert.equal(service.bookingUrl, BOOKSY_URL);
  }
});

test('price and duration formatters handle verified and unverified values accurately', () => {
  assert.equal(formatPriceGBP({ priceGBP: 20 }), '£20');
  assert.equal(formatPriceGBP({ priceGBP: 5, priceLabel: '£5 each' }), '£5 each');
  assert.equal(formatPriceGBP({ priceGBP: null }), 'Confirm price when booking');

  assert.equal(formatDuration(30), '30 min');
  assert.equal(formatDuration(null), 'In-shop timing');
});

test('service summary stats, signature tiers, and category filters return accurate counts', () => {
  const stats = getServiceSummaryStats(SERVICES_DATA);
  assert.equal(stats.totalServicesCount, 19);
  assert.equal(stats.booksyBookableCount, 12);
  assert.equal(stats.inShopAdditionalCount, 7);
  assert.equal(stats.minPriceGBP, 5);
  assert.equal(stats.maxPriceGBP, 28);

  assert.equal(SIGNATURE_TIERS.length, 3);
  assert.equal(SIGNATURE_TIERS[0].priceGBP, 20);
  assert.equal(SIGNATURE_TIERS[1].priceGBP, 20);
  assert.equal(SIGNATURE_TIERS[2].priceGBP, 28);

  const youthServices = filterServicesByMenuAndCategory(
    SERVICES_DATA,
    'all-sources',
    'youth-kids'
  );
  assert.equal(youthServices.length, 2);

  const searchFade = filterServicesByMenuAndCategory(
    SERVICES_DATA,
    'all-sources',
    'all',
    'steamer'
  );
  assert.equal(searchFade.length, 1);
  assert.equal(searchFade[0].id, 'haircut-beard-steamer');
});

test('calculateSessionEstimate computes totals and smart combo savings accurately', () => {
  // Selecting Skin Fade (£20, 30m) + Beard Trim (£10, untimed) = £30
  // Should trigger smart suggestion to book Haircut & Beard (£20, 35m) and save £10
  const comboEst = calculateSessionEstimate(SERVICES_DATA, [
    'skin-fade',
    'inshop-beard-trim-only',
  ]);
  assert.equal(comboEst.knownTotalGBP, 30);
  assert.equal(comboEst.totalDurationMinutes, 30);
  assert.equal(comboEst.hasUntimedService, true);
  assert.ok(comboEst.smartSuggestion);
  assert.equal(comboEst.smartSuggestion.type, 'save');
  assert.equal(comboEst.smartSuggestion.recommendedServiceId, 'haircut-and-beard');
  assert.equal(comboEst.smartSuggestion.savingsGBP, 10);

  // Selecting Haircut & Beard (£20, 35m) -> suggests +£8 Steamer upgrade
  const upgradeEst = calculateSessionEstimate(SERVICES_DATA, ['haircut-and-beard']);
  assert.equal(upgradeEst.knownTotalGBP, 20);
  assert.equal(upgradeEst.totalDurationMinutes, 35);
  assert.ok(upgradeEst.smartSuggestion);
  assert.equal(upgradeEst.smartSuggestion.type, 'upgrade');
  assert.equal(upgradeEst.smartSuggestion.recommendedServiceId, 'haircut-beard-steamer');
});

test('getManchesterStudioStatus evaluates open, late-window, and closed hours accurately', () => {
  // Wednesday 14:00 UTC (2:00 PM in Manchester) -> Open
  const openStatus = getManchesterStudioStatus(new Date('2026-01-14T14:00:00Z'));
  assert.equal(openStatus.isOpenGoogleMaps, true);
  assert.equal(openStatus.tone, 'open');

  // Sunday 20:30 UTC (8:30 PM in Manchester) -> After Google Maps 8pm close, before Website 11pm close
  const lateStatus = getManchesterStudioStatus(new Date('2026-01-18T20:30:00Z'));
  assert.equal(lateStatus.isOpenGoogleMaps, false);
  assert.equal(lateStatus.isOpenWebsiteHours, true);
  assert.equal(lateStatus.tone, 'late-window');

  // Tuesday 06:00 UTC (6:00 AM in Manchester) -> Closed
  const closedStatus = getManchesterStudioStatus(new Date('2026-01-13T06:00:00Z'));
  assert.equal(closedStatus.isOpenGoogleMaps, false);
  assert.equal(closedStatus.isOpenWebsiteHours, false);
  assert.equal(closedStatus.tone, 'closed');
});

test('gallery items contain only authentic business photos with local paths', () => {
  assert.equal(GALLERY_ITEMS.length, 8);
  for (const item of GALLERY_ITEMS) {
    assert.ok(item.src.startsWith('/images/gallery/'));
    assert.ok(item.width > 0 && item.height > 0);
    assert.ok(!item.src.includes('pexels'));
    assert.ok(!item.src.includes('unsplash'));
  }

  const studioPhotos = filterGalleryItems(GALLERY_ITEMS, 'studio');
  assert.equal(studioPhotos.length, 3);
});
