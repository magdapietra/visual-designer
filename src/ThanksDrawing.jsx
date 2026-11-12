import React, { useEffect, useRef, useState } from 'react';

export function ThanksDrawing() {
  const drawing = useRef(null);
  const animationsRef = useRef([]);
  const visibleRef = useRef(false);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    pausedRef.current = paused;
    animationsRef.current.forEach(animation => {
      if (visibleRef.current && !paused) animation.play();
      else animation.pause();
    });
  }, [paused]);
  useEffect(() => {
    const svg = drawing.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const paths = [...svg.querySelectorAll('path')];
    const lengths = paths.map(path => path.getTotalLength());
    const total = lengths.reduce((sum, length) => sum + length, 0);
    let animations = [];
    let visible = false;
    const configure = () => {
      animations.forEach(animation => animation.cancel());
      animations = [];
      animationsRef.current = animations;
      svg.classList.remove('is-ready');
      if (media.matches || !('IntersectionObserver' in window)) return;
      svg.classList.add('is-ready');
      let delay = 0;
      paths.forEach((path, index) => {
        const duration = lengths[index] / total * 5.5;
        const animation = path.animate([
          { offset: 0, strokeDashoffset: '1', opacity: 0 },
          { offset: delay / 8.5, strokeDashoffset: '1', opacity: 1 },
          { offset: (delay + duration) / 8.5, strokeDashoffset: '0', opacity: 1 },
          { offset: .94, strokeDashoffset: '0', opacity: 1 },
          { offset: 1, strokeDashoffset: '0', opacity: 0 },
        ], { duration: 8500, iterations: Infinity, easing: 'linear', fill: 'both' });
        if (!visible || pausedRef.current) animation.pause();
        animations.push(animation);
        delay += duration + .1;
      });
    };
    configure();
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      visibleRef.current = visible;
      animations.forEach(animation => visible && !pausedRef.current ? animation.play() : animation.pause());
    }, { threshold: .2 }) : null;
    observer?.observe(svg);
    media.addEventListener('change', configure);
    return () => {
      observer?.disconnect();
      media.removeEventListener('change', configure);
      animations.forEach(animation => animation.cancel());
    };
  }, []);  return <div className="footer-thanks"><svg ref={drawing} className="thanks-drawing" role="img" aria-label="Thanks" viewBox="0 0 888 329" fill="none" xmlns="http://www.w3.org/2000/svg">
<path pathLength="1" d="M20.6635 284.838C49.7916 272.05 73.145 259.094 91.2128 243.387M91.2128 243.387C93.9924 240.97 96.6469 238.489 99.178 235.933C110.231 224.771 121.441 208.155 130.024 194.592C138.606 181.029 143.524 170.373 148.108 158.735C152.691 147.097 156.789 134.801 160.54 119.86C168.555 87.9347 171.358 61.7701 171.774 46.2759C172.135 32.8297 170.539 24.8572 169.303 21.5534C165.797 12.1803 155.647 7.4564 152.343 7.04032C145.841 6.22147 135.426 18.1502 113.691 46.0399C102.361 60.5777 96.4642 81.0339 90.4652 100.26C87.9392 108.356 87.3353 113.339 87.7328 142.104C88.0889 167.883 89.4427 212.695 91.2128 243.387ZM91.2128 243.387C91.4179 246.942 91.6285 250.308 91.8439 253.433C94.3552 289.877 99.7307 297.655 101.997 301.164C107.878 310.267 122.832 317.081 137.78 321.676C140.705 322.098 142.754 322.098 145.04 321.688C147.325 321.279 149.784 320.459 154.802 317.13" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path pathLength="1" d="M7.00116 182.992C14.3913 170.249 30.9723 149.482 45.6343 145.948C74.0285 139.105 92.2289 150.674 109.189 156.468C127.988 162.891 134.483 169.305 144.829 179.638C154.74 191.214 168.862 203.274 172.166 203.28C173.83 202.877 175.469 201.647 177.158 197.896" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path pathLength="1" d="M188.337 313.404C189.976 310.945 191.616 308.486 197.789 293.079C203.961 277.671 214.618 249.39 220.313 233.797C226.717 216.26 234.627 198.058 248.68 167.895C267.214 128.116 267.404 116.394 269.888 107.464C270.403 105.612 270.31 103.949 270.31 106.589C270.31 109.228 270.31 116.196 266.622 134.745C262.933 153.295 255.555 183.215 251.754 199.449C246.735 220.886 240.154 244.075 235.751 263.667C234.243 270.378 232.798 275.8 231.531 280.083M231.531 280.083C229.189 288.002 227.454 292.03 227.051 293.11C225.881 296.243 228.047 288.85 231.531 280.083ZM231.531 280.083C233.235 275.796 235.254 271.18 237.353 267.307C246.174 251.028 257.045 240.969 260.554 238.28C263.873 235.737 269.453 236.399 274.62 236.809C283.643 237.524 288.826 253.044 291.753 261.807L291.828 262.034C295.946 274.36 301.758 283.968 306.105 292.669C310.826 302.116 311.707 308.001 313.148 310.902C313.742 312.099 315.818 311.343 317.482 310.312C323.705 304.313 327.841 297.705 329.921 287.98C330.337 285.682 330.747 284.043 331.17 279.87" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path pathLength="1" d="M443.573 216.526C433.699 214.464 412.199 212.8 395.401 215.682C387.349 217.063 382.726 221.482 380.043 223.96C370.477 232.795 369.101 269.759 363.679 286.663C359.552 299.533 375.249 315.876 378.137 317.739C385.094 322.228 394.687 314.249 403.176 306.405C413.998 296.406 415.404 283.223 440.163 246.049C444.328 239.797 445.634 244.596 445.231 247.732C443.088 264.378 434.878 292.588 438.17 303.033C439.554 307.425 448.913 305.952 456.148 305.542C465.494 301.828 470.885 297.27 472.953 294.587C473.791 293.134 474.201 291.495 474.623 289.806" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path pathLength="1" d="M471.829 294.774C475.108 284.937 481.715 259.376 489.372 225.251C493.757 205.709 494.173 197.908 497.88 195.226C503.469 191.181 509.487 190.444 512.791 190.649C516.145 190.857 519.013 192.915 521.491 196.213C522.942 198.144 523.969 201.15 524.602 220.047C525.236 238.945 525.236 273.784 525.441 292.551C525.646 311.318 526.055 312.957 526.267 309.293C527.673 284.895 527.72 274.951 535.961 245.621C539.84 231.814 549.232 230.201 552.74 228.338C554.484 227.412 556.659 227.704 559.149 229.139C570.451 235.649 572.408 246.707 576.972 258.296C581.724 270.359 586.492 281.099 590.001 282.962C591.744 283.888 593.92 283.596 595.795 282.776C599.726 281.058 603.049 277.398 606.768 274.305C610.771 270.978 621.182 245.316 636.912 210.347C646.113 189.893 649.413 172.757 651.09 156.549C652.683 141.152 659.312 120.207 668.627 100.316C671.336 94.5327 671.795 98.4594 671.18 101.999C668.439 117.778 663.125 135.72 659.797 153.531C657.501 165.816 657.313 175.067 656.685 183.172C656.015 191.836 651.525 204.851 650.475 214.222C649.607 221.979 646.557 231.778 642.21 241.951C636.901 254.373 637.018 265.76 636.813 269.704C636.436 276.95 646.085 250.93 656.822 240.802C663.12 234.86 669.435 230.083 675.5 225.871M675.5 225.871C684.356 219.719 692.679 214.771 699.635 209.161C709.064 201.555 724.879 187.413 731.474 180.849C738.069 174.285 734.79 175.515 731.256 177.173C717.984 183.401 707.465 189.574 698.113 197.25C691.841 202.398 681.383 215.582 676.135 224.587C675.872 225.039 675.661 225.467 675.5 225.871ZM675.5 225.871C671.479 235.939 698.132 231.574 705.093 235.759C713.139 240.596 718.942 250.011 724.357 256.259C726.261 258.455 737.125 246.422 756.513 228.667C779.557 207.564 798.456 199.15 806.076 194.213C810.318 191.465 814.027 188.704 817.162 186.104M817.162 186.104C824.121 180.334 828.253 175.358 829.109 173.08C829.714 171.473 829.532 169.776 828.507 168.522C826.161 165.65 820.452 165.603 815.9 166.423C814.058 166.755 813.808 168.882 813.801 170.956C813.787 175.796 815.155 180.998 817.162 186.104ZM817.162 186.104C821.382 196.84 828.426 207.151 831.376 212.769C832.554 215.013 834.872 216.899 837.158 217.955C846.465 222.254 859.688 221.072 868.01 223.761C871.304 224.826 874.642 227.27 877.536 231.399C880.188 235.184 880.455 240.1 879.84 244.441C878.765 252.032 855.366 259.525 839.921 265.574C827.892 265.387 820.465 262.903 813.82 259.6C812.566 258.358 811.746 256.718 810.901 252.545" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
</svg>
<button className="thanks-pause" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play thanks animation' : 'Pause thanks animation'} aria-pressed={paused} title={paused ? 'Play animation' : 'Pause animation'}>
  {paused ? <span className="play-symbol" aria-hidden="true" /> : <span className="pause-symbol" aria-hidden="true"><i /><i /></span>}
</button>
</div>;
}



