import type { Metadata } from "next";
import { Providers } from "./lib/providers";
import { fonts } from "./lib/fonts";
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "SwiftNotes | Home",
  description: "SwiftNotes is a note application built on Nextjs, Tailwindcss, Heroicons",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fonts.reddit_mono.className} max-h-screen h-screen overflow-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
