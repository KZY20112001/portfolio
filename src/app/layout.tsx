import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import { open_sans, quicksand, raleway } from "./fonts";

export const metadata: Metadata = {
  title: "Christopher's Portfolio",
  description: "Portfolio Page for Christopher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${open_sans.variable} ${quicksand.variable}`}
    >
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
