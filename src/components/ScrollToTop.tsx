import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; // ✅ Skip scrolling on first page load (i.e., reload)
    }

    // ✅ Scroll to top on route change only
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
