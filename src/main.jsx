import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Creatives } from './Creatives.jsx';
import { SleeknoteCaseStudy } from './SleeknoteCaseStudy.jsx';
import "./fonts.css";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/\/work\/sleeknote-dashboard-builder\/?$/.test(window.location.pathname) ? <SleeknoteCaseStudy /> : /\/creatives\/?$/.test(window.location.pathname) ? <Creatives /> : <App />}
  </React.StrictMode>,
);
