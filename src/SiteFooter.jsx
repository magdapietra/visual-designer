import React, { useEffect, useRef, useState } from 'react';
import './SiteFooter.css';
import { ThanksDrawing } from './ThanksDrawing.jsx';

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef();
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('magda.pietras.con@gmail.com');
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2600);
    } catch { window.location.href = 'mailto:magda.pietras.con@gmail.com'; }
  };

  return <footer className="portfolio-footer wrap">
    <div className="footer-profile">
      <div><p className="footer-name">Magdalena Pietras</p><p className="footer-role">Visual Designer</p><p className="footer-tagline">Making products easier to get. And harder to scroll past.</p></div>
    </div>
    <address className="footer-details">
      <p className="footer-availability">Open for roles in Aarhus and remote</p>
      <div className="footer-email-row"><a href="mailto:magda.pietras.con@gmail.com">magda.pietras.con@gmail.com</a><button className="copy-email" onClick={copyEmail} aria-live="polite">{copied ? 'Email copied' : 'Copy email address'}</button></div>
      <a href="tel:+4571817619">+45 71 81 76 19</a>
      <a href="https://www.linkedin.com/in/magdalena-pietra%C5%9B-7a6389237/" target="_blank" rel="noreferrer">LinkedIn profile</a>
    </address>
    <a className="footer-top" href="#top">Back to top</a>
    <ThanksDrawing />
  </footer>;
}


