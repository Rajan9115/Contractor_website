"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck } from "lucide-react";

interface MediaGalleryProps {
  images: string[];
  title: string;
}

export function MediaGallery({ images, title }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = images.length;

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Handle keyboard events when lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleNext, handlePrev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image Stage */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#E9E3D9] border border-[#E5E0D7] shadow-sm group">
        <Image
          src={images[selectedIndex]}
          alt={`${title} - Photo ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition-transform duration-500 group-hover:scale-102 motion-reduce:transform-none"
        />

        {/* Authenticity Pill */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-xs flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#21865B]" />
          <span>Authentic On-Site Photo</span>
        </div>

        {/* Lightbox trigger button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          aria-label="Open image in fullscreen viewer"
          className="absolute bottom-4 right-4 p-2.5 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Navigation Arrows for Main Stage (if > 1 image) */}
        {total > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="pointer-events-auto p-2 rounded-full bg-white/85 hover:bg-white text-[#172B40] shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="pointer-events-auto p-2 rounded-full bg-white/85 hover:bg-white text-[#172B40] shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail Bar */}
      {total > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View photo ${idx + 1}`}
              className={`relative aspect-[16/10] w-24 sm:w-28 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] ${
                selectedIndex === idx
                  ? "border-[#B58A58] ring-2 ring-[#B58A58]/30 scale-102"
                  : "border-[#E5E0D7] opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Accessible Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fullscreen preview: ${title}`}
          className="fixed inset-0 z-50 bg-[#172B40]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
        >
          {/* Top Bar with Counter and Close */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-10">
            <div className="text-xs sm:text-sm font-medium">
              Photo {selectedIndex + 1} of {total}
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close fullscreen view"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image */}
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
            <Image
              src={images[selectedIndex]}
              alt={`${title} - Lightbox photo ${selectedIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Lightbox Navigation Controls */}
          {total > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous photo in fullscreen"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next photo in fullscreen"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Bottom Title Label */}
          <div className="absolute bottom-4 inset-x-4 text-center text-xs text-[#E9E3D9]/80">
            {title} • Real Contractor Project Media
          </div>
        </div>
      )}
    </div>
  );
}

