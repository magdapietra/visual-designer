import { sitePath } from './sitePath.js';
import React from 'react';
export function SiteHeader({ creatives = false }) {
  return <><span id="top" className="site-top-anchor" aria-hidden="true" /><header className="site-header wrap">
    <a className="wordmark" href={sitePath('/#top')} aria-label="Magda, home"><img src={sitePath('/assets/magda-logo.svg')} width="347" height="115" alt="" /></a>
    <nav aria-label="Main navigation">
      <div className="nav-links"><a href={sitePath('/#work')}>Work</a><a href={sitePath('/creatives')} aria-current={creatives ? 'page' : undefined}>Creatives</a><a href={sitePath('/#about')}>About</a></div>
      <a className="primary nav-contact" href={sitePath('/#contact')}>Say hello</a>
    </nav>
  </header></>;
}
