import { sitePath } from './sitePath.js';
import React from 'react';
import './Drizzles.css';

export function Drizzle({ shape, placement, colored = false }) {
  return <img className={`page-drizzle drizzle-${placement}`} src={sitePath(`/assets/drizzle-${shape}${colored ? '-color' : ''}.svg`)} alt="" aria-hidden="true" draggable="false" />;
}

export function HeroDrizzles() {
  return <div className="hero-drizzles" aria-hidden="true">
    <Drizzle shape="loop" placement="hero-loop" colored />
    <Drizzle shape="spark" placement="hero-spark" colored />
    <Drizzle shape="wave" placement="hero-wave" colored />
  </div>;
}
