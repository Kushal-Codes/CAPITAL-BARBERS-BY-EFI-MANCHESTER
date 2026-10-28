import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Instagram,
  LayoutGrid,
  Columns2,
} from 'lucide-react';
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryFilterCategory,
  filterGalleryItems,
} from '../../data/gallery';
import { BUSINESS_INFO } from '../../data/business';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryFilterCategory>('all');
  const [layoutMode, setLayoutMode] = useState<'asymmetric' | 'two-column'>('asymmetric');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filterGalleryItems(GALLERY_ITEMS, activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [lightboxIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="border-b border-[#24242A] bg-[#0E0E12] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#26262C]"
        >
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#C8A24A]">
              02 · Authentic Portfolio &amp; Studio Archive
            </p>
            <h1
              id="gallery-heading"
              className="mt-2 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F5F0]"
            >
              THE WORK SPEAKS.
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#B8B4AA]">
              Every photograph below is an authentic image of Efi, his finished fades and lineups, and his studio at 46 George Street, Manchester—replacing the generic stock photography from the previous website.
            </p>
          </div>

          {/* Interactive Portfolio Category Filter & View Toggle */}
          <div className="flex flex-col sm:items-end gap-3">
            <div
              role="group"
              aria-label="Filter portfolio photographs"
              className="flex flex-wrap items-center gap-2"
            >
              {GALLERY_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setLightboxIndex(null);
                    }}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'border-[#C8A24A] bg-[#C8A24A] text-[#0B0B0D] font-semibold'
                        : 'border-[#282830] bg-[#141419] text-[#C8C4BA] hover:border-[#C8A24A] hover:text-[#F7F5F0]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Layout Density Switcher */}
            <div
              role="group"
              aria-label="Gallery layout view"
              className="inline-flex items-center gap-1 border border-[#26262E] bg-[#131318] p-1 text-xs"
            >
              <button
                type="button"
                onClick={() => setLayoutMode('asymmetric')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
                  layoutMode === 'asymmetric'
                    ? 'bg-[#C8A24A]/20 text-[#C8A24A] font-semibold'
                    : 'text-[#8E8A80] hover:text-[#F7F5F0]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Editorial Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('two-column')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
                  layoutMode === 'two-column'
                    ? 'bg-[#C8A24A]/20 text-[#C8A24A] font-semibold'
                    : 'text-[#8E8A80] hover:text-[#F7F5F0]'
                }`}
              >
                <Columns2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Large Plates</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Animated Editorial Portfolio Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const spanClass =
                layoutMode === 'two-column' ? 'lg:col-span-6' : item.gridSpanClass;
              const aspectClass =
                layoutMode === 'two-column' ? 'aspect-[4/3]' : item.aspectClass;

              return (
                <motion.figure
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04, ease: EASE_OUT_EXPO }}
                  key={item.id}
                  className={`${spanClass} group relative border border-[#26262C] bg-[#141419] overflow-hidden flex flex-col justify-between`}
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    aria-label={`Open full-screen view: ${item.title}`}
                    className="relative w-full text-left overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C8A24A]"
                  >
                    <div className={`${aspectClass} w-full overflow-hidden bg-[#18181F]`}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Subtle Expand Affordance */}
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-[#0B0B0D]/85 border border-[#32323C] px-2.5 py-1.5 text-[11px] font-mono-tabular text-[#F7F5F0] group-hover:border-[#C8A24A] group-hover:text-[#C8A24A] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Inspect</span>
                    </span>
                  </button>

                  <figcaption className="p-4 sm:p-5 border-t border-[#22222A] flex flex-col gap-1.5 bg-[#121217]">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#8E8A80]">
                      <span className="font-mono-tabular text-[#C8A24A]">
                        {item.indexLabel} <span aria-hidden="true">·</span> {item.authenticityBadge}
                      </span>
                      <span className="font-mono-tabular">
                        {item.width}×{item.height}
                      </span>
                    </div>
                    <h2 className="font-display text-base sm:text-lg font-bold text-[#F7F5F0]">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A6A298]">
                      {item.subtitle}
                    </p>
                    <p className="mt-1 pt-2 border-t border-[#1E1E26] text-xs text-[#8E8A80]">
                      {item.technicalNote}
                    </p>
                  </figcaption>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Official Instagram Reels Callout Banner */}
        <div className="mt-12 border border-[#2A2A34] bg-[#141419] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-[#C8A24A]/40 bg-[#C8A24A]/10 text-[#C8A24A] shrink-0">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#C8A24A]">
                Official Video Reels &amp; Transformations
              </p>
              <h3 className="mt-1 font-display text-lg sm:text-2xl font-bold text-[#F7F5F0] break-words">
                Watch Efi’s Latest Fades on Instagram ({BUSINESS_INFO.contact.instagramHandle})
              </h3>
              <p className="mt-1 max-w-2xl text-xs sm:text-sm text-[#B8B4AA]">
                View real-time skin fade transitions, beard lineups, and before-and-after reels directly on the official Capital Barbers by Efi Instagram profile.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C8A24A] bg-[#C8A24A] px-5 py-3.5 text-xs sm:text-sm font-bold text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F7F5F0]"
          >
            <span>Open Official Instagram Reels</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Accessible Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Portfolio image viewer: ${activeLightboxItem.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#070709]/95 p-4 sm:p-8 backdrop-blur-md"
          >
            <div className="relative flex w-full max-w-5xl flex-col border border-[#2E2E38] bg-[#111116] shadow-2xl max-h-[92vh] overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between gap-4 border-b border-[#26262E] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D5D1C8]">
                  <span className="font-mono-tabular text-[#C8A24A]">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#F7F5F0]">
                    {activeLightboxItem.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close image viewer"
                  className="inline-flex items-center gap-1.5 border border-[#32323C] bg-[#181820] px-3 py-1.5 text-xs font-medium text-[#F7F5F0] hover:border-[#C8A24A] hover:text-[#C8A24A] transition-colors"
                >
                  <span>Close</span>
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative flex-1 bg-[#0B0B0E] flex items-center justify-center overflow-hidden min-h-[280px] max-h-[64vh]">
                <img
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.alt}
                  className="max-h-[62vh] w-auto max-w-full object-contain"
                />

                {/* Previous / Next Controls */}
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous portfolio image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center border border-[#34343E] bg-[#0B0B0D]/85 text-[#F7F5F0] hover:border-[#C8A24A] hover:text-[#C8A24A] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next portfolio image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center border border-[#34343E] bg-[#0B0B0D]/85 text-[#F7F5F0] hover:border-[#C8A24A] hover:text-[#C8A24A] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Provenance & Booking Bar */}
              <div className="border-t border-[#26262E] bg-[#131319] p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs sm:text-sm text-[#D5D1C8]">
                    {activeLightboxItem.technicalNote}
                  </p>
                  <p className="mt-1 text-xs text-[#8E8A80]">
                    Source: {activeLightboxItem.sourceLabel} <span aria-hidden="true">·</span>{' '}
                    {activeLightboxItem.authenticityBadge}
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.links.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#C8A24A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B0B0D] hover:bg-[#D9B55B] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Book Your Cut</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
