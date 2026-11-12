import { sitePath } from './sitePath.js';
import { SectionHeading } from './SectionHeading.jsx';
import React, { useRef, useState } from 'react';
import ads from './ads.json';
const squareAds = ads.filter(ad => ad.format === 'Square').map(ad => ({ ...ad, src: sitePath(ad.src) }));
const wrap = index => (index + squareAds.length) % squareAds.length;

export function AdCarousel() {
  const [active, setActive] = useState(0);
  const gesture = useRef({ start: 0, dragged: false });
  const move = direction => setActive(index => wrap(index + direction));
  const onKeyDown = event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
    }
  };
  const onPointerDown = event => { gesture.current = { start: event.clientX, dragged: false }; };
  const onPointerUp = event => {
    const distance = event.clientX - gesture.current.start;
    if (Math.abs(distance) > 45) { gesture.current.dragged = true; move(distance < 0 ? 1 : -1); }
  };
  return <section className="ad-section" id="ad-automation" aria-labelledby="ad-heading">
    <div className="ad-heading wrap"><SectionHeading id="ad-heading" icon="star">AI Ad Automation.</SectionHeading><p>I use AI to take paid-ad ideas through visual exploration, Figma layouts, and format variations.</p></div>
    <div className="ad-stage" onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerUp={onPointerUp} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Paid ad designs">
      {[-2,-1,0,1,2].map(offset => {
        const index = wrap(active + offset);
        const ad = squareAds[index];
        return <article className={`ad-slide ${offset === 0 ? 'is-centered' : ''}`} key={ad.id} style={{'--offset':offset}} role="group" aria-roledescription="slide" aria-label={ad.title}>
          <a className="ad-art" href={ad.src} target="_blank" rel="noreferrer" draggable="false" tabIndex={offset === 0 ? 0 : -1} aria-label={offset === 0 ? `Open full-size ad: ${ad.title}` : `Center ad: ${ad.title}`} onClick={event => {
            if (gesture.current.dragged) { event.preventDefault(); return; }
            if (offset !== 0) { event.preventDefault(); setActive(index); }
          }}><img src={ad.src} alt={ad.title} draggable="false" decoding="async" /></a>
        </article>;
      })}
    </div>
    <div className="ad-arrow-controls">
      <button onClick={() => move(-1)} aria-label="Previous ad">
        <svg viewBox="0 0 79 53" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M47.3099 4.00061C13.1648 25.1273 4.44823 29.7767 4.00067 31.076C7.28135 32.662 12.2349 34.4088 19.0092 37.2897C23.4892 39.3102 30.0853 42.4649 36.8813 45.7152" />
          <path d="M9.07159 30.0721C24.8449 29.2118 40.6182 28.3514 51.6117 27.9082C62.6053 27.465 68.341 27.465 74.2506 27.465" />
        </svg>
      </button>
      <button onClick={() => move(1)} aria-label="Next ad">
        <svg viewBox="109 0 83 53" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M148.266 6.1084C157.748 9.18279 165.995 11.7634 169.594 12.7259C174.929 14.1525 177.313 14.3325 180.465 15.3624C181.725 15.7744 182.848 16.2651 183.622 16.8399C184.614 17.5769 181.583 20.111 177.425 23.5673C174.72 25.8158 170.593 28.8057 167.986 30.6341C165.378 32.4626 164.36 32.9717 161.353 35.1435C153.381 41.1341 147.757 45.5779 146.731 46.5404C146.214 46.9936 145.705 47.3755 144.409 48.5405" />
          <path d="M113.163 28.0959L113.163 28.0959C124.238 26.5683 135.313 25.0408 147.765 23.681C160.217 22.3213 173.71 21.1756 187.612 19.9952" />
        </svg>
      </button>
    </div>
    <span className="sr-only" aria-live="polite" aria-atomic="true">{squareAds[active].title}</span>
  </section>;
}
