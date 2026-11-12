import { sitePath } from './sitePath.js';
import React, { useEffect, useRef, useState } from 'react';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import ads from './ads.json';
import importedCreatives from './creatives.json';
import creativeSelection from './creative-selection.json';
import './Creatives.css';

function alternateCollections(entries) {
  const groups = Object.values(entries.reduce((result, item) => {
    (result[item.collection || item.campaign] ??= []).push(item);
    return result;
  }, {}));
  return Array.from({ length: Math.max(...groups.map(group => group.length), 0) }, (_, index) => groups.map(group => group[index]).filter(Boolean)).flat();
}
// Curated by artwork, including renamed exports, form steps and reused ad imagery.
const selectedIds = new Set(creativeSelection);
const seenImages = new Set();
const galleryEntries = [...importedCreatives, ...ads.filter(ad => ad.format === 'Square').map(ad => ({ ...ad, category: 'Ads' }))].filter(item => {
  if (!selectedIds.has(item.id) || seenImages.has(item.src)) return false;
  seenImages.add(item.src);
  return true;
});
const templates = alternateCollections(galleryEntries.filter(item => item.category === 'Templates'));
const squareAds = alternateCollections(galleryEntries.filter(item => item.category === 'Ads'));
const orderedItems = Array.from({length: Math.max(templates.length, squareAds.length)}, (_, index) => [templates[index], squareAds[index]].filter(Boolean)).flat();

const items = orderedItems.map(item => ({ ...item, src: sitePath(item.src), thumb: item.thumb ? sitePath(item.thumb) : undefined }));

function CreativePreview({ item, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={dialog} className="creative-dialog" aria-label={item.title} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <button className="creative-close" onClick={onClose} aria-label="Close image" autoFocus><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg></button>
    <img src={item.src} alt={item.title} className="creative-enlarged" />
  </dialog>;
}

export function Creatives() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const trigger = useRef(null);
  const visible = filter === 'All' ? items : items.filter(item => item.category === filter);
  useEffect(() => { document.title = 'Creatives — Magda Pietras'; }, []);
  const close = () => { setSelected(null); requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true })); };
  return <div className="creatives-page">
    <a className="skip" href="#creative-grid">Skip to creatives</a>
    <SiteHeader creatives />
    <main className="creatives-main">
      <h1 className="sr-only">Creatives</h1>
      <div className="creative-grid" id="creative-grid" key={filter}>
        {visible.map((item, index) => <button className="creative-tile" key={item.id} aria-label={`Open ${item.category}: ${item.title}`} onClick={event => { trigger.current = event.currentTarget; setSelected(item); }}>
          <img src={item.thumb || item.src} alt={item.title} loading={index < 12 ? 'eager' : 'lazy'} decoding="async" width="1080" height="1080" />
          <span className="creative-category" aria-hidden="true">{item.category}</span>
        </button>)}
      </div>
      {visible.length === 0 && <p className="creative-empty">Templates are coming soon.</p>}
      <p className="sr-only" role="status">{visible.length} {filter === 'All' ? 'creatives' : filter.toLowerCase()}</p>
    </main>
    <SiteFooter />
    <nav className="creative-filters" aria-label="Creative categories">
      {['All', 'Templates', 'Ads'].map(category => <button key={category} aria-pressed={filter === category} onClick={() => { setFilter(category); window.scrollTo({ top: 0, behavior: 'instant' }); }}>{category}</button>)}
    </nav>
    {selected && <CreativePreview item={selected} onClose={close} />}
  </div>;
}
