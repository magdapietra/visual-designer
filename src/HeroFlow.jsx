import React, { useEffect, useRef, useState } from 'react';
import './HeroFlow.css';
const rough = 'okay, so… a website, but make it feel like us… there’s a lot to explain… maybe bigger? no, simpler… a little personality… how do we make it all click?… start with what matters… ';
const clear = 'Clear ideas. Thoughtful design. Websites that make complex things click. Product stories with a purpose. Campaigns with a little personality. ';
export function HeroFlow() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const left = useRef(null), right = useRef(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    [left.current, right.current].forEach(svg => {
      if (paused || reduced) svg.pauseAnimations();
      else svg.unpauseAnimations();
    });
  }, [paused, reduced]);
  return <div className={`hero-flow${paused || reduced ? ' is-paused' : ''}`}>
    <div className="flow-track" role="img" aria-label="A continuous stream of handwritten design thoughts loops through a drawing drizzle and emerges as clear typography on a smooth black ribbon.">
      <svg ref={left} className="flow-input" viewBox="0 0 1048 594" aria-hidden="true">
        <defs><path id="flow-rough-path" d="M 0 51 C 17 143 62 300 399 360 C 594 395 773 286 669 149 C 565 13 341 271 667 470 C 720 507 818 561 1048 565" /></defs>
        <text className="flow-handwriting" dy="7"><textPath href="#flow-rough-path" startOffset="-2250" textLength="6750" lengthAdjust="spacingAndGlyphs">
          {rough.repeat(3)}
          <animate attributeName="startOffset" from="-2250" to="0" dur="62s" repeatCount="indefinite" />
        </textPath></text>
      </svg>
      <svg ref={right} className="flow-output" viewBox="0 0 1048 594" aria-hidden="true">
        <path id="flow-clear-path" d="M 0 565 C 112 559 323 555 530 490 C 719 431 898 445 1050 453" className="flow-ribbon" />
        <text className="flow-typeset" dy="8"><textPath href="#flow-clear-path" startOffset="-3200" textLength="9600" lengthAdjust="spacingAndGlyphs">
          {clear.repeat(6)}
          <animate attributeName="startOffset" from="-3200" to="0" dur="88s" repeatCount="indefinite" />
        </textPath></text>
      </svg>
    </div>
    <div className="flow-center" aria-hidden="true">

      <div className="flow-processor">
        <svg className="flow-drizzle" width="215" height="38" viewBox="0 0 215 38" fill="none" aria-hidden="true">
          <path pathLength="1" d="M4.5007 22.3194C5.04566 25.5891 5.86105 29.1293 7.02266 31.26C7.92162 32.9088 11.8515 32.563 16.0288 31.68C18.6142 31.1335 20.874 27.6624 26.7374 20.914C30.0565 17.0939 33.8505 14.817 37.2534 13.1125C41.1963 11.1375 44.2416 11.2564 45.1266 11.5944C46.4705 12.1077 48.0563 16.415 50.5106 21.8031C52.2118 25.5377 54.2065 27.7731 56.4519 29.6128C61.5388 33.7807 67.0355 32.9727 72.7658 31.4116C76.8432 30.3007 80.6922 26.843 85.3879 22.8295C91.5268 17.5825 95.5905 12.9076 97.2274 10.9286C98.1871 9.76822 99.2822 9.48218 100.643 9.27731C105.108 8.60483 109.518 10.9777 113.273 13.2272C116.275 15.0254 117.581 19.0169 120.783 24.4152C122.798 27.8109 126.723 29.1457 130.13 29.5554C133.247 29.9303 136.286 29.2891 139.486 28.066C148.417 24.6525 152.549 17.4107 153.915 15.0895C155.069 13.1291 157.867 11.2646 168.828 6.49516C173.765 4.34692 178.211 4.29075 181.419 4.69639C185.328 5.1906 183.419 12.8789 183.693 18.6092C183.76 19.993 184.099 20.9345 184.576 21.4897C185.054 22.0449 185.73 22.1801 187.16 21.5061C195.01 16.4601 200.616 13.0387 203.883 11.3383C205.664 10.314 207.692 8.96181 210.191 7.15894" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" stroke="black" />
        </svg>
      </div>
    </div>
    <button className="flow-pause" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play hero animation' : 'Pause hero animation'} aria-pressed={paused}>
      {paused ? <span className="play-symbol" aria-hidden="true" /> : <span className="pause-symbol" aria-hidden="true"><i /><i /></span>}
    </button>
  </div>;
}




