"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeContextProvider } from "@/context/ThemeContext";

const breakpoints = {
  base: "0em", // 0px
  // sm: "30em", // ~480px.
  md: "48em", // ~768px
  //lg: "62em", // ~992px
  // xl: "80em", // ~1280px
  // "2xl": "96em", // ~1536px
};

const theme = extendTheme({ breakpoints });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ChakraProvider>
  );
}
