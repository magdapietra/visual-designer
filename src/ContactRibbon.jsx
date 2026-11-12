import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './ContactRibbon.css';

const email = 'magdalena.pietras@sleeknote.com';
const phone = '+45 XX XX XX XX';
const contact = `${email}   ·   ${phone}   ·   `;

export function ContactRibbon() {
  const ribbon = useRef(null);
  const measure = useRef(null);
  const [repeatWidth, setRepeatWidth] = useState(900);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useLayoutEffect(() => {
    let active = true;
    const update = () => { if (active && measure.current) setRepeatWidth(measure.current.getComputedTextLength()); };
    update();
    document.fonts.load('26px "DM Sans"').then(update);
    return () => { active = false; };
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || hovered || reduced) ribbon.current.pauseAnimations();
    else ribbon.current.unpauseAnimations();
  }, [paused, hovered, reduced]);

  return <div className="contact-ribbon" role="region" aria-label="Contact details" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <p className="sr-only">Email: <a href={`mailto:${email}`}>{email}</a>. Phone number placeholder: {phone}.</p>
    <svg ref={ribbon} viewBox="0 0 1600 180" aria-hidden="true" className="contact-ribbon-art">
      <path id="contact-ribbon-path" d="M -1600 80 C -900 80 -500 -60 0 80 C 500 220 1000 -35 1600 65 C 2200 165 2700 80 3200 80" fill="none" stroke="#171717" strokeWidth="46" />
      <text ref={measure} visibility="hidden" xmlSpace="preserve">{contact}</text>
      <text fill="white" dy="8" xmlSpace="preserve">
        <textPath href="#contact-ribbon-path" startOffset={-repeatWidth}>
          {contact.repeat(12)}
          <animate key={repeatWidth} attributeName="startOffset" from={-repeatWidth} to="0" dur="30s" repeatCount="indefinite" />
        </textPath>
      </text>
    </svg>
    {!reduced && <button className="contact-ribbon-pause" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play contact ribbon' : 'Pause contact ribbon'} aria-pressed={paused}>
      {paused ? <span className="play-symbol" aria-hidden="true" /> : <span className="pause-symbol" aria-hidden="true"><i /><i /></span>}
    </button>}
  </div>;
}
