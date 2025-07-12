import type { ReactNode } from "react";
import { geistMono, geistSans } from "../style/fonts";
import "../style/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const bodyClassName = `${geistSans.variable} ${geistMono.variable} antialiased`;

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
};

export default RootLayout;
