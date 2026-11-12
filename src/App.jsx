import { sitePath } from './sitePath.js';
import React, { useEffect, useRef, useState } from 'react';
import { AdCarousel } from './AdCarousel.jsx';
import { HeroFlow } from './HeroFlow.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { AIWork } from './AIWork.jsx';
import { Drizzle, HeroDrizzles } from './Drizzles.jsx';
import { SiteHeader } from './SiteHeader.jsx';
import { ContactRibbon } from './ContactRibbon.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import './SleeknoteCaseStudy.css';

const projects = [
  {
    id: 'sleeknote', title: 'Sleeknote website redesign',
    summary: 'Making a complex product feel clear, useful, and full of personality.',
    role: 'Visual design & Webflow implementation', status: 'In development',
    cover: sitePath('/assets/sleeknote-home.jpg'), detail: sitePath('/assets/sleeknote-detail.jpg'),
    url: 'https://new-sleeknote-website.webflow.io/', link: 'Explore the website preview',
    intro: 'A new digital home for Sleeknote. Bringing product explanations, real campaign examples, and the next step into one connected experience.',
    sections: [
      ['The challenge', 'Sleeknote brings together popups, gamification, and web push. The website needs to make that range understandable for marketers deciding whether it fits their business. The challenge was to give each capability a clear purpose while keeping the overall experience coherent.'],
      ['My approach', 'I connected the visual design with the Webflow implementation, working with reusable sections, styles, and CMS content. The design moves from the visitor’s problem into a tangible product example, then gives them a way to explore further or get started.'],
      ['Design in the real world', 'A product launch exposed a practical constraint: moving the Learn to Earn page from the new website into the existing landing-page setup would lose component and CMS connections. I raised the dependency, explored publishing options, and worked through the transfer with the team. Visual examples and their linked templates also had to match.'],
      ['Where it stands', 'The redesign is in development. The Webflow preview shows the page system and interactions, including product examples, customer stories, and an interactive calculator. Launch performance is not yet available.'],
    ],
    caption: 'A closer look at the product presentation in the Webflow preview.',
  },
  {
    id: 'drip', title: 'Drip Wrapped',
    summary: 'Fully designed and developed by me with AI, from the first idea to the live experience.',
    role: 'AI design & development · End to end', status: 'Published · Summer 2026',
    cover: sitePath('/assets/drip-wrapped.jpg'), detail: sitePath('/assets/drip-detail.jpg'),
    url: 'https://www.drip.com/wrapped-summer-26', link: 'Explore Drip Wrapped',
    intro: 'I fully designed and developed Drip Wrapped with AI. From the visual direction to the interactions and implementation, I turned a season of product updates into a complete web experience.',
    sections: [
      ['The challenge', 'A collection of release notes tells customers what changed. It still needs context to help them understand why those changes matter. The goal was to make Drip’s product progress visible and give customers a reason to explore it.'],
      ['My approach', 'I used AI throughout the design and development, directing the visual language, building the interactions, and refining the implementation. Working with approved copy and release information from marketing and product colleagues, I gave major updates room to tell their story and grouped smaller improvements into clear themes.'],
      ['Clarity before cleverness', 'I asked product colleagues to check that the visuals and wording represented the product truthfully. That review caught examples suggesting capabilities beyond what was available. The playful presentation had to remain grounded in what customers could actually do.'],
      ['The result', 'Drip Wrapped Summer 2026 launched as a dedicated home for the season’s updates. The format received positive internal feedback and sparked interest in a similar approach for other launches. There is no verified adoption or conversion uplift to attribute to the page.'],
    ],
    caption: 'Product storytelling inside the published Wrapped experience. Figures shown belong to the product demonstration, not portfolio results.',
  },
  {
    id: 'sleeknote-wrapped', title: 'Sleeknote Wrapped',
    summary: 'An interactive home for Sleeknote’s spring and summer product releases.',
    role: 'Visual design & product storytelling', status: 'Spring/Summer 2026',
    cover: sitePath('/assets/sleeknote-wrapped-spring.jpg'), detail: sitePath('/assets/sleek-wrapped-builder.avif'),
    url: 'https://get.sleeknote.com/sleeknote-wrapped-spring', link: 'Explore Sleeknote Wrapped',
    intro: 'A colorful, interactive way to explore a season of Sleeknote product updates, from new campaign experiences to improvements in the builder.',
    sections: [
      ['The purpose', 'Bring the season’s releases together in one place and make it easy to see what each update helps marketers do.'],
      ['The experience', 'A playful visual introduction leads into feature groups, product examples, and details visitors can open to explore further. The live page connects the visual story with the releases themselves.'],
    ],
    caption: 'Answer Buttons, one of the feature visuals in the Wrapped experience.',
  },
  {
    id: 'learn-to-earn', title: 'Learn to Earn prototyping skill',
    summary: 'A reusable AI skill I created for the whole company to turn new feature ideas into prototypes.',
    role: 'AI workflow & prototyping', status: 'Internal tool',
    screens: [sitePath('/assets/learn-skill-1.png'), sitePath('/assets/learn-skill-2.png'), sitePath('/assets/learn-skill-3.png')],
    intro: 'I created a reusable AI skill for the whole company, giving teams a shared way to turn new feature ideas into prototypes they can review and test.',
    sections: [
      ['The purpose', 'Help colleagues make an idea tangible before committing to a full product build. A prototype gives the team something concrete to discuss and try.'],
      ['The example', 'These static screens show the Learn to Earn prototype: an introductory lesson, a second lesson, and the reward form. The skill makes this approach reusable for new feature ideas.'],
    ],
  },
];

function ProjectVisual({ project, className = '' }) {
  return project.screens
    ? <div className={`project-screens ${className}`}>{project.screens.map((src, index) => <img key={src} src={src} alt={`Learn to Earn prototype, step ${index + 1}`} loading="lazy" />)}</div>
    : <img className={className} src={project.cover} alt={`${project.title} website`} />;
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-heading" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="dialog-top"><span>Magda Pietras</span><button onClick={onClose} autoFocus className="close">Close project</button></div>
    <div className="case-content">
      <h2 id="project-heading">{project.title}</h2>
      <p className="case-intro">{project.intro}</p>
      <div className="case-meta"><p>{project.role}</p><p>{project.status}</p></div>
      <ProjectVisual project={project} className="case-image" />
      <div className="case-story">
        {project.sections.map(([title, body], index) => <React.Fragment key={title}>
          <section><h3>{title}</h3><p>{body}</p></section>
          {index === 1 && project.detail && <figure><img className="case-image" src={project.detail} alt={`Detail from ${project.title}`} loading="lazy" /><figcaption>{project.caption}</figcaption></figure>}
        </React.Fragment>)}
      </div>
      {project.url && <a className="primary case-link" href={project.url} target="_blank" rel="noreferrer">{project.link}</a>}
    </div>
  </dialog>;
}

export function App() {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(window.location.hash.slice(1));
      section?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const [project, setProject] = useState(null);
  const projectTrigger = useRef(null);
  const openProject = (item, event) => { projectTrigger.current = event.currentTarget; setProject(item); };
  const closeProject = () => { setProject(null); requestAnimationFrame(() => projectTrigger.current?.focus()); };
  return <>
    <a className="skip" href="#work">Skip to work</a>
    <SiteHeader />
    <main>
      <section className="hero wrap" aria-labelledby="hero-heading">
        <HeroDrizzles />
        <div className="hero-copy"><h1 id="hero-heading">Clear ideas.<br/>A little personality.</h1><p className="introduction">I’m Magda, a Visual Designer at Drip & Sleeknote.</p><p className="hero-description">Websites, product stories, and campaigns<br className="desktop-break"/> that make complex things click.</p><a className="primary" href="#work">Explore my work</a></div>
        <HeroFlow />
      </section>
      <section className="work wrap" id="work" aria-labelledby="work-heading">
        <Drizzle shape="curl" placement="work" />
        <SectionHeading id="work-heading" icon="laptop">Selected work</SectionHeading>
        <div className="project-grid">{projects.map(item => <React.Fragment key={item.id}><article className={`project ${item.id}`}>
          <button className="project-preview" onClick={event => openProject(item, event)} aria-label={`View ${item.title} project`}><ProjectVisual project={item} /><span className="preview-action">View project</span></button>
          <div className="project-description"><button className="project-title" onClick={event => openProject(item, event)}><h3>{item.title}</h3></button><p>{item.summary}</p><div className="project-meta"><span>{item.role}</span><span>{item.status}</span></div></div>
        </article></React.Fragment>)}<article className="dashboard-feature">
          <a className="dashboard-feature-image" href={sitePath('/work/sleeknote-dashboard-builder')} aria-label="Read the Sleeknote dashboard and builder case study"><img src={sitePath('/assets/ai-sleeknote-dashboard.png')} alt="Sleeknote campaign dashboard prototype" loading="lazy" /><span className="preview-action">View project</span></a>
          <div><h3><a href={sitePath('/work/sleeknote-dashboard-builder')}>Sleeknote dashboard &amp; builder</a></h3><p>Turning user and customer support feedback into a dashboard direction and an AI-coded builder prototype.</p><div className="project-meta">Interface design &amp; AI-assisted prototyping · Builder prototype, not live</div><a className="dashboard-feature-link" href={sitePath('/work/sleeknote-dashboard-builder')}><span>Read the case study</span><svg viewBox="109 0 83 53" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M148.266 6.1084C157.748 9.18279 165.995 11.7634 169.594 12.7259C174.929 14.1525 177.313 14.3325 180.465 15.3624C181.725 15.7744 182.848 16.2651 183.622 16.8399C184.614 17.5769 181.583 20.111 177.425 23.5673C174.72 25.8158 170.593 28.8057 167.986 30.6341C165.378 32.4626 164.36 32.9717 161.353 35.1435C153.381 41.1341 147.757 45.5779 146.731 46.5404C146.214 46.9936 145.705 47.3755 144.409 48.5405" />
          <path d="M113.163 28.0959L113.163 28.0959C124.238 26.5683 135.313 25.0408 147.765 23.681C160.217 22.3213 173.71 21.1756 187.612 19.9952" />
        </svg></a></div>
        </article></div>
      </section>
      <AIWork />
      <AdCarousel />
      <section className="about wrap" id="about" aria-labelledby="about-heading"><Drizzle shape="loop" placement="about" /><SectionHeading id="about-heading" icon="person">A little about me.</SectionHeading><div className="about-copy"><p className="about-lead">I like design with a clear purpose.<br/>And a bit of a spark.</p><p>At Drip and Sleeknote, I help turn complex marketing products into experiences people can understand and enjoy. My work moves between websites, product storytelling, campaigns, and the details that make them work.</p><p>I work closely with marketing, product, and engineering—from the first visual idea to Webflow implementation, campaign building, and the last check before launch.</p><p>Good typography, a useful interaction, an unexpected detail. I care about how it looks, and what it helps someone do.</p></div></section>
      <ContactRibbon />
      <section className="contact wrap" id="contact" aria-labelledby="contact-heading"><Drizzle shape="orbit" placement="contact" /><div><SectionHeading id="contact-heading" icon="bulb">Have something in mind?</SectionHeading></div></section>
    </main>
    <SiteFooter />
    {project && <ProjectDialog project={project} onClose={closeProject} />}
  </>;
}




