// useIsDesktop.ts
import { useState, useEffect } from "react";

const useDesktop = (thresholdWidth: number = 768): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > thresholdWidth);
    };

    typeof window !== undefined &&
      window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      typeof window !== undefined &&
        window.removeEventListener("resize", handleResize);
    };
  }, [thresholdWidth]);

  return isDesktop;
};

export default useDesktop;
