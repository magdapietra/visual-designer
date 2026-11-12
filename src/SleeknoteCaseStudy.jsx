import { sitePath } from './sitePath.js';
import React, { useEffect } from 'react';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import './SleeknoteCaseStudy.css';

export function SleeknoteCaseStudy() {
  useEffect(() => { document.title = 'Sleeknote dashboard & builder — Magda Pietras'; }, []);
  return <>
    <a className="skip" href="#case-main">Skip to case study</a>
    <SiteHeader />
    <main id="case-main" className="dashboard-case wrap">
      <a className="case-back" href={sitePath('/#work')}>Back to selected work</a>
      <div className="dashboard-case-intro">
        <h1>Sleeknote dashboard<br />&amp; builder.</h1>
        <p>Turning user and customer support feedback into a clearer way to find, review and build campaigns.</p>
      </div>
      <dl className="dashboard-case-facts">
        <div><dt>My role</dt><dd>Visual Designer</dd></div>
        <div><dt>My contribution</dt><dd>Feedback synthesis, interface design &amp; AI-assisted prototyping</dd></div>
        <div><dt>Project stage</dt><dd>Prototype · Builder not live</dd></div>
      </dl>
      <figure className="dashboard-case-image"><img src={sitePath('/assets/ai-sleeknote-dashboard.png')} alt="Sleeknote dashboard prototype with a dark green sidebar, campaign thumbnails, inline filters and performance columns" /><figcaption>Dashboard prototype: campaign context, performance and editing in one view. Interface figures are illustrative, not measured project results.</figcaption></figure>

      <section className="dashboard-case-section">
        <h2>The starting point.</h2>
        <div><p>I brought together feedback from Sleeknote users and customer support, then used it to explore a new dashboard direction. The challenge was to make everyday campaign work easier to navigate: finding the right campaign, understanding its performance and knowing what to do next.</p><p>The previous header squeezed context and actions into one row, while revenue was buried in a tooltip. I wanted important information and common actions to be visible without making the interface feel busier.</p></div>
      </section>
      <section className="dashboard-case-section">
        <h2>From feedback<br />to a working prototype.</h2>
        <div><p>I shaped the dashboard design around that feedback, then followed the workflow into the builder. Using AI, I vibe-coded a prototype to make the interface and interactions tangible.</p><p>My role covered gathering the input, setting the visual direction and developing the prototype. This gave the exploration a concrete form for further review before a production build.</p></div>
      </section>
      <section className="dashboard-case-section">
        <h2>Make the next action<br />easier to find.</h2>
        <div><p>A dark green sidebar and the Sleeknote logo provide a consistent brand anchor. Soft shadows and restrained dividers give structure without a heavy grid of borders.</p><p>The button system distinguishes filled green primary actions, outlined secondary actions and ghost icon controls. Green gives the main action emphasis, while consistent styles help users recognise the same interaction across screens.</p><p>I separated the header into two rows: campaign and folder context above, search and filtering below. Six columns bring Campaign, Status, Views, Leads, Conversion rate and Revenue into the overview. Small campaign previews support recognition alongside names and metrics.</p></div>
      </section>
      <section className="dashboard-case-section">
        <h2>Two ways to find<br />the right campaign.</h2>
        <div><p>List view prioritises comparing data across campaigns. Grid view prioritises recognising the design, with three larger previews per row, status pills and conversion rates. Keeping both views accommodates those different tasks.</p><p>Inline controls bring sort, status, domain, tag and date filtering into the toolbar. Radio options support a single selection; checkboxes support multiple selections. The sort trigger displays the current choice, while search expands when needed and collapses when empty.</p><p>Grid cards reveal Edit and Activate actions on hover, shortening the proposed route from finding a campaign to acting on it. Visible status and chevrons communicate state before interaction; keyboard access remains part of the interaction requirements.</p></div>
      </section>
      <section className="dashboard-case-section">
        <h2>Keep useful context<br />within reach.</h2>
        <div><p>The Create menu separates Onsite and Web push from the start, with descriptions to explain each choice. A session-usage card keeps plan consumption visible alongside everyday work.</p><p>A profile menu groups Settings, Help, What’s new, Tracking code and Logout without keeping every utility on display. This balances a quieter sidebar with quick access to supporting tasks.</p></div>
      </section>

      <figure className="dashboard-case-image"><img src={sitePath('/assets/ai-sleeknote-builder.png')} alt="Builder prototype capture showing a popup canvas, block settings and horizontal workflow navigation" loading="lazy" /><figcaption>Builder prototype capture with the popup canvas and editing panel. The shared-sidebar and vertical-step direction described below is not shown in this image.</figcaption></figure>
      <section className="dashboard-case-section">
        <h2>Carry the same logic<br />into the builder.</h2>
        <div><p>The builder direction extends the dashboard’s shell, using the dark sidebar to keep the experience connected. A vertical step list replaces the earlier horizontal toggle dots, with explicit “In progress” and “Not started” labels. A persistent Draft chip keeps publishing status visible.</p><p>The canvas remains the focus of editing, with settings alongside it. Consistent buttons and navigation are intended to make moving from campaign management into building feel familiar. The builder is a prototype and has not launched.</p></div>
      </section>
      <section className="dashboard-case-section">
        <h2>Design for more<br />than a mouse.</h2>
        <div><p>The interaction direction includes 32–44px targets, keyboard-friendly search and filters with focus handling, and a grid that reduces to two columns at smaller widths. Labels and status indicators keep essential context visible without hover.</p><p>Hover menus and card actions still need to be checked with keyboard and touch input. These are design requirements to validate in the prototype, rather than a completed accessibility audit.</p></div>
      </section>
      <section className="dashboard-case-section">
        <h2>The intended value.</h2>
        <div><p>For users, the aim is faster orientation and a shorter path through common campaign tasks. Clearer action hierarchy, visible metrics and recognisable previews are the design choices supporting that aim.</p><p>For the business, the intended benefit is a more coherent product experience that communicates care and quality. A shared visual system across dashboard and builder supports that consistency. Faster task completion, a reduced learning curve and stronger perceived value remain hypotheses to validate.</p></div>
      </section>
      <section className="dashboard-case-section dashboard-case-outcome">
        <h2>What I made.<br />What comes next.</h2>
        <div><p>The output is a dashboard direction informed by collected feedback and an AI-coded builder prototype. There are no measured launch results for the builder because it is not live.</p><p>The next step would be to revisit the original feedback and observe people finding a campaign, interpreting its performance and editing a popup. Comparing list and grid use, checking keyboard and touch access, and testing whether the step labels clarify progress would show what to keep or refine.</p></div>
      </section>
      <div className="dashboard-case-end"><a className="primary" href="mailto:magdalena.pietras@sleeknote.com">Let’s talk about the work</a><a href={sitePath('/#work')}>More selected work</a></div>
    </main>
    <SiteFooter />
  </>;
}
