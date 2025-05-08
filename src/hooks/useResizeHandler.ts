import { useEffect, useState } from "react";

const useResizeHandler = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPad, setIsPad] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsPad(false);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setIsPad(true);
      setIsMobile(false);
    } else {
      setIsMobile(false);
      setIsPad(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isDesktop, isMobile, isPad };
};

export default useResizeHandler;
