"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeContextProvider } from "@/context/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ChakraProvider>
  );
}
