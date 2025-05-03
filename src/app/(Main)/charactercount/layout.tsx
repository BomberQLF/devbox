import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../../globals.css";
import React from "react";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Character Count",
    description: "A real-time character count tool that keeps track of the number of characters, sentences and words in your text."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                style={{ height: "100vh" }}
                className={`${dmSans.variable} bg-black antialiased`}
            >
                {children}
            </body>
        </html>
    )
}