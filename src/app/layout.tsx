import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

export const metadata: Metadata = {
  title: "Kamosaba | Minecraft Community Server",
  description: "The official website of Kamosaba, an open Minecraft community server. Compatible with both Java and Bedrock editions! Come and have fun together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <footer style={{ padding: '80px 0', textAlign: 'center', opacity: 0.6 }}>
          <div className="container">
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
              <Link href="/tos">Terms of Service</Link>
              <Link href="/policy">Privacy Policy</Link>
              <Link href="/status">Status</Link>
              <Link href="/news">News</Link>
            </div>
            <p>&copy; 2026 Kamosaba Community</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
