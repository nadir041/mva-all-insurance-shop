import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled more than `offset` px.
 * Uses an IntersectionObserver on an invisible sentinel instead of a scroll listener.
 */
export default function useScrollPast(offset) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = `position:absolute;top:${offset}px;left:0;width:1px;height:1px;pointer-events:none;visibility:hidden;`;
    document.body.prepend(sentinel);

    const io = new IntersectionObserver(([entry]) => {
      setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(sentinel);

    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, [offset]);

  return past;
}
