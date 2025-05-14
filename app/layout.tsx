import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import {ClerkProvider} from "@clerk/nextjs";
import { Toaster } from "sonner";

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
        <link rel="icon" href="/logos/header2.png" sizes="any"/>
      </head>

      <body className={`${inter.className} `}>
      
      <ClerkProvider>
      
      <ConvexClientProvider>

      <Header/>
      <main className = "min-h-screen">
        {children}
        <Toaster richColors/>
      </main>

      </ConvexClientProvider>
      </ClerkProvider>
      
      </body>
    </html>
  );
}
