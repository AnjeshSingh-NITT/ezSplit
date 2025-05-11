import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "ezSplit",
  description: "The smart expense splitter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/header.png" sizes="any"/>
      </head>

      <body className={`${inter.className} `}>
      
      <ConvexClientProvider>

      <Header/>
      <main className = "min-h-screen">{children}</main>

      </ConvexClientProvider>

      
      </body>
    </html>
  );
}
