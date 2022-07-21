import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import * as React from 'react';
gsap.registerPlugin(SplitText, ScrollTrigger);
import { isMobile } from 'react-device-detect';

export default function SplittedTitle({ children }) {
  const el = React.useRef(null);

  React.useEffect(() => {
    if (isMobile) return;
    const splitWords = new SplitText(el.current, { type: 'words' });
    const splitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: el.current,
        start: 'center bottom',
        end: 'bottom top',
        toggleActions: 'restart none none none',
      },
    });

    splitTimeline.from(splitWords.words, {
      opacity: 0,
      yPercent: 60,
      duration: 0.3,
      ease: 'linear',
      stagger: 0.15,
      transform: 'rotate3d(1,-.1,0,40deg)',
    });
  }, []);

  return <span ref={el}>{children}</span>;
}
