"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeContextProvider } from "@/context/ThemeContext";

const breakpoints = {
  base: "0em", // 0px
  // sm: "30em", // ~480px.
  md: "48em", // ~768px
  //lg: "62em", // ~992px
  xl: "80em", // ~1280px
  // "2xl": "96em", // ~1536px
};
const components = {
  Drawer: {
    sizes: {
      sidebar: {
        dialog: {
          maxWidth: "14rem",
          height: "fit-content",
          mt: "4rem",
          rounded: "xl",
        },
      },
    },
  },
};
const theme = extendTheme({ breakpoints, components });
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
