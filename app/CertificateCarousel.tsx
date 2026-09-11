"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function CertificateCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateControls = () => {
      setCanScrollBack(track.scrollLeft > 1);
      setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);

    return () => {
      track.removeEventListener("scroll", updateControls);
      observer.disconnect();
    };
  }, []);

  function scrollCertificates(direction: number) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div className="certificate-carousel">
      <div className="certificate-controls">
        <span id="certificate-scroll-hint">Scroll to explore</span>
        <div className="certificate-navigation">
          <button type="button" aria-label="Previous certificate" aria-controls="certificate-track" disabled={!canScrollBack} onClick={() => scrollCertificates(-1)}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" aria-label="Next certificate" aria-controls="certificate-track" disabled={!canScrollForward} onClick={() => scrollCertificates(1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="certificate-grid" id="certificate-track" ref={trackRef} role="region" aria-label="Certificates" aria-describedby="certificate-scroll-hint" tabIndex={0}>
        {children}
      </div>
    </div>
  );
}
