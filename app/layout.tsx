import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/unique-windows-manchester"),
  title: "Unique Windows | Windows and Doors Manchester",
  description:
    "Windows, doors and bifold door installation from Unique Windows, a family-run Manchester business covering the North West.",
  robots: "index, follow",
  alternates: {
    canonical: "https://deanooooooooo.github.io/unique-windows-manchester/",
  },
  openGraph: {
    type: "website",
    title: "Unique Windows | Windows and Doors Manchester",
    description:
      "Windows, doors and bifolds fitted by a family-run Manchester business covering the North West.",
    url: "https://deanooooooooo.github.io/unique-windows-manchester/",
    images: ["/assets/unique-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unique Windows | Windows and Doors Manchester",
    description:
      "Replacement windows, doors and bifolds across Manchester and the North West.",
    images: ["/assets/unique-hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
