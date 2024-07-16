// useIsDesktop.ts
import { useState, useEffect } from "react";

const useDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const thresholdWidth = 992;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > thresholdWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
};

export default useDesktop;
