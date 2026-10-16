import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to `#hash` targets (e.g. /#about, /#contact) after navigation — including
 * repeated clicks on the same link — and to the top on plain route changes.
 * Moves focus to the target so keyboard and screen-reader users land there too.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        if (el.hasAttribute('tabindex')) el.focus({ preventScroll: true });
      } else if (attempts++ < 20) {
        // Target may belong to a lazily loaded route that hasn't mounted yet.
        timer = setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
