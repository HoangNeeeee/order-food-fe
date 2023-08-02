import { Sidebar } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="flex top-0 left-0 bg-white w-full items-center">
				<Sidebar />
				<h1 className="flex text-2xl font-bold font-montserrat text-black text-center">
					Find Your Favorite Meal
				</h1>
				<a href="/profile"></a>
			</header>
			<main className="px-5 pt-5 pb-10">{children}</main>
		</>
	);
}
