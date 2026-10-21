import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Runs on page changes only (not on same-page #anchor clicks, which the browser already handles):
 * jump to the requested section if there is one, otherwise start the new page at the top.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    });
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hash changes on the same page are native anchor scrolls
  }, [pathname]);

  return null;
}
