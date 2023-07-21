import { QueryProvider } from "@/network";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthSessionProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Food Order",
	description: "Food Order App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextAuthSessionProvider>
					<QueryProvider>{children}</QueryProvider>
				</NextAuthSessionProvider>
			</body>
		</html>
	);
}
