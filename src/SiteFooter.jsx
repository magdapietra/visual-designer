import React, { useEffect, useRef, useState } from 'react';
import './SiteFooter.css';
import { ThanksDrawing } from './ThanksDrawing.jsx';

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef();
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('magdalena.pietras@sleeknote.com');
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2600);
    } catch { window.location.href = 'mailto:magdalena.pietras@sleeknote.com'; }
  };

  return <footer className="portfolio-footer wrap">
    <div className="footer-profile">
      <div className="footer-photo" role="img" aria-label="Placeholder for Magda’s portrait">Your photo</div>
      <div><p className="footer-name">Magdalena Pietras</p><p className="footer-role">Visual Designer</p><p className="footer-availability">Open for roles in Aarhus and remote</p></div>
    </div>
    <address className="footer-details">
      <div className="footer-email-row"><a href="mailto:magdalena.pietras@sleeknote.com">magdalena.pietras@sleeknote.com</a><button className="copy-email" onClick={copyEmail} aria-live="polite">{copied ? 'Email copied' : 'Copy email address'}</button></div>
      <span className="footer-placeholder" aria-label="Phone number placeholder">+45 XX XX XX XX</span>
      <span className="footer-placeholder">LinkedIn profile · coming soon</span>
    </address>
    <a className="footer-top" href="#top">Back to top</a>
    <ThanksDrawing />
  </footer>;
}


