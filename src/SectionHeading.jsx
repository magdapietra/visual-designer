import { sitePath } from './sitePath.js';
import React from 'react';
import './SectionHeading.css';

export function SectionHeading({ id, icon, children }) {
  return <h2 id={id} className="section-heading"><img className={`heading-doodle heading-doodle--${icon}`} src={sitePath(`/assets/heading-${icon}.svg`)} alt="" aria-hidden="true" draggable="false" /><span>{children}</span></h2>;
}
