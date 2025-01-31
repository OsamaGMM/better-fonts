import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";
import Header from "@/components/Header";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Better Fonts",
	description: "Best app to compare fonts",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased mx-4 md:mx-8`}
			>
				<Header />
				<NuqsAdapter>{children}</NuqsAdapter>
			</body>
		</html>
	);
}
