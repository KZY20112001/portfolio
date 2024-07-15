// useIsDesktop.ts
import { useState, useEffect } from "react";

const useDesktop = (thresholdWidth: number = 768): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    (window.innerWidth ?? 0) > thresholdWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > thresholdWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [thresholdWidth]);

  return isDesktop;
};

export default useDesktop;
