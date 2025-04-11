import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // atau "auto" jika tidak ingin animasi
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;