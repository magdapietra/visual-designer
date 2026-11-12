import { sitePath } from './sitePath.js';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import './AIWork.css';

const approaches = [
  {
    title: 'Explore directions.',
    text: 'I turn a brief into visual options, then refine what fits the brand and the goal.',
    style: 'directions',
    caption: 'I brought together user feedback and insights from customer support, then used AI to prototype a new direction for the Sleeknote dashboard.',
    images: [
      ['ai-sleeknote-dashboard.png', 'Sleeknote dashboard prototype showing campaign management and performance metrics'],
    ],
  },
  {
    title: 'Build real experiences.',
    text: 'I use AI to design, prototype, and develop websites and interactions people can try.',
    style: 'experiences',
    caption: 'Building on that exploration, I vibe-coded a Sleeknote builder prototype, turning the design into an interactive experience I could test and refine.',
    images: [
      ['ai-sleeknote-builder.png', 'Sleeknote builder prototype with a popup canvas and editing controls'],
    ],
  },
  {
    title: 'Make it repeatable.',
    text: 'I turn useful workflows into skills and automations that other people can use.',
    style: 'repeatable',
    caption: 'I’m building an ad automation system to speed up creative production and send automated performance notifications. I still review the work and the results myself, and make the final decisions.',
    textOnly: true,
  },
];

function ApproachVisual({ approach, mobile = false }) {
  if (approach.textOnly) return <div className={`ai-text-only${mobile ? ' ai-visual-mobile' : ''}`}><p>{approach.caption}</p></div>;
  return <figure className={`ai-approach-visual ai-visual-${approach.style}${mobile ? ' ai-visual-mobile' : ''}`}>
    <div className="ai-visual-frame">
      {approach.images.map(([src, alt]) => <img key={src} src={sitePath(`/assets/${src}`)} alt={alt} loading="lazy" />)}
    </div>
    <figcaption>{approach.caption}</figcaption>
    <a className="ai-case-link" href={sitePath('/work/sleeknote-dashboard-builder')}>Read the dashboard &amp; builder case study</a>
  </figure>;
}

export function AIWork() {
  const [active, setActive] = useState(0);
  const rows = useRef([]);
  const stage = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = window.innerHeight * .5;
        let closest = 0, distance = Infinity;
        rows.current.forEach((row, index) => {
          const rect = row.getBoundingClientRect();
          const next = Math.abs(rect.top + rect.height / 2 - target);
          if (next < distance) { closest = index; distance = next; }
        });
        const finalRow = rows.current[2]?.getBoundingClientRect();
        const stageBox = stage.current?.getBoundingClientRect();
        if (finalRow && stageBox) {
          stage.current.style.setProperty('--text-row-offset', `${finalRow.top + finalRow.height / 2 - stageBox.top - stageBox.height / 2}px`);
        }
        setActive(closest);
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <section className="ai-section wrap" id="ai" aria-labelledby="ai-heading">
    <SectionHeading id="ai-heading" icon="robot">How I use AI.</SectionHeading>
    <div className="ai-method-layout">
      <div className="ai-method-copy">
        {approaches.map((approach, index) => <article className={`ai-method${active === index ? ' is-current' : ''}`} key={approach.title} ref={element => { rows.current[index] = element; }} onPointerEnter={event => { if (event.pointerType !== 'touch') setActive(index); }}>
          <h3><button className="ai-method-trigger" aria-pressed={active === index} aria-controls={`ai-example-${index}`} onFocus={() => setActive(index)} onClick={() => setActive(index)}>{approach.title}</button></h3><p>{approach.text}</p>
          <ApproachVisual approach={approach} mobile />
        </article>)}
      </div>
      <div className="ai-method-stage" ref={stage} aria-label="Examples matching my approach to AI">
        {approaches.map((approach, index) => <div className={`ai-method-panel${active === index ? ' is-active' : ''}`} id={`ai-example-${index}`} key={approach.title} aria-hidden={active !== index}>
          <ApproachVisual approach={approach} />
        </div>)}
      </div>
    </div>
  </section>;
}
