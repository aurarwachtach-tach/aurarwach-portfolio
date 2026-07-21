import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurarwach Tachaveeraphong — Data Portfolio",
  description: "Portfolio of Aurarwach Tachaveeraphong, a Computer Science student interested in Data Analytics and Data Science.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
