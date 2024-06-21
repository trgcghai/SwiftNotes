import type { Metadata } from "next";
import { Providers } from "../lib/providers";
import { fonts } from "../lib/fonts";

export const metadata: Metadata = {
    title: "SwiftNotes | Login",
};

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fonts.reddit_mono.className} flex items-center justify-center h-screen`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}