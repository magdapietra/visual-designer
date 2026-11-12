import React from 'react';

export function AdWorkflow() {
  return <svg className="ai-workflow" viewBox="0 0 900 600" role="img" aria-label="Ad automation workflow: a campaign brief and live ad data feed AI ad creation and performance notifications. Both come to Magda for personal review and the final decision.">
    <rect width="900" height="600" fill="#f6f6f6" />
    <g fill="none" stroke="#b8b8bd" strokeWidth="2">
      <path d="M450 148V180Q450 195 435 195H245Q230 195 230 210V230M450 180Q450 195 465 195H655Q670 195 670 210V230" />
      <path d="M230 366V393Q230 408 245 408H435Q450 408 450 423V440M670 366V393Q670 408 655 408H465Q450 408 450 423" />
    </g>
    <g fontFamily="DM Sans, Arial, sans-serif" textAnchor="middle">
      <rect x="230" y="48" width="440" height="100" rx="18" fill="white" stroke="#e1e1e5" />
      <text x="450" y="91" fontSize="27" fill="#171717">Campaign input</text>
      <text x="450" y="121" fontSize="19" fill="#68686e">Brief, brand &amp; live ad data</text>

      <rect x="50" y="230" width="360" height="136" rx="18" fill="#eeebfb" />
      <g fill="none" stroke="#7654bd" strokeWidth="2.5" strokeLinecap="round">
        <rect x="211" y="249" width="28" height="28" rx="5" />
        <path d="M220 245h23a4 4 0 0 1 4 4v22M217 268l6-7 10 10" />
      </g>
      <text x="230" y="310" fontSize="25" fill="#171717">AI ad creation</text>
      <text x="230" y="341" fontSize="18" fill="#68606f">Concepts, layouts &amp; variations</text>

      <rect x="490" y="230" width="360" height="136" rx="18" fill="#fff0e4" />
      <g fill="none" stroke="#b96b30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M657 271h26l-4-6v-7a9 9 0 0 0-18 0v7zM666 277h8" />
      </g>
      <text x="670" y="310" fontSize="24" fill="#171717">Performance notifications</text>
      <text x="670" y="341" fontSize="18" fill="#78695e">Results &amp; changes to review</text>

      <rect x="110" y="440" width="680" height="116" rx="18" fill="#315aff" />
      <text x="450" y="485" fontSize="27" fill="white">My review &amp; final decision</text>
      <text x="450" y="518" fontSize="19" fill="#eef1ff">I check the creative and results, then decide what’s next.</text>
    </g>
    <circle cx="450" cy="408" r="5" fill="#315aff" />
  </svg>;
}
