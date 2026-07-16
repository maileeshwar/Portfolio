import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "Maileeshwar K S | AI & Data Science Engineer", description: "Portfolio of Maileeshwar K S, an AI & Data Science Engineer building intelligent solutions.", openGraph: { title: "Maileeshwar K S | AI Engineer", description: "Building AI-powered intelligent solutions that solve real-world problems.", type: "website" }, twitter: { card: "summary_large_image", title: "Maileeshwar K S | AI Engineer" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} font-sans`}>{children}</body></html>; }
