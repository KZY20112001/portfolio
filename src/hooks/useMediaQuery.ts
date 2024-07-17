// useIsDesktop.ts
import { useState, useEffect } from "react";

const useMediaQuery = (width: number): boolean => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setMatch(window.innerWidth > width);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return match;
};

export default useMediaQuery;
