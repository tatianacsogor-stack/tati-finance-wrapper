import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const appName = "Tati Finance";
const themeColor = "#064e3b";

export const metadata: Metadata = {
  title: appName,
  description: "Tati Finance mobile wrapper",
  manifest: "/manifest.json",
  applicationName: appName,
  appleWebApp: {
    capable: true,
    title: appName,
    statusBarStyle: "black-translucent"
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/icon.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          background: themeColor,
          overflow: "hidden"
        }}
      >
        {children}
      </body>
    </html>
  );
}
