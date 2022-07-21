import gsap from 'gsap/dist/gsap';
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
gsap.registerPlugin(ScrambleTextPlugin);
import { isMobile } from 'react-device-detect';

export default function ScrambledText({
  children,
  duration = 0.36,
  speed = 1,
  runOnLoad = false,
  runOnHover = true,
  delimiter = '',
  ...props
}) {
  const el = React.useRef(null);

  const scrambleIt = () => {
    if (isMobile) return;
    gsap.to(el.current, {
      duration,
      ease: 'none',
      scrambleText: {
        speed,
        chars: 'upperAndLowerCase',
        text: children,
        delimiter,
      },
    });
  };

  React.useEffect(() => {
    if (runOnLoad) {
      scrambleIt();
    }
  }, []);

  return (
    <span
      className={clsxm('relative', props.className)}
      {...props}
      onMouseOver={() => {
        if (runOnHover) {
          scrambleIt();
        }
      }}
    >
      <span className='pointer-events-none absolute left-0 top-0' ref={el}>
        {children}
      </span>
      <span className='opacity-0'>{children}</span>
    </span>
  );
}
