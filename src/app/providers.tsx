"use client";

import { ThemeContextProvider } from "@/context/ThemeContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ChakraProvider>
  );
}
