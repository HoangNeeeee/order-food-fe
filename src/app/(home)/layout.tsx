import { Sidebar } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="flex top-0 left-0 bg-primary w-full items-center">
				<Sidebar />
			</header>
			<main className="">{children}</main>
		</>
	);
}
