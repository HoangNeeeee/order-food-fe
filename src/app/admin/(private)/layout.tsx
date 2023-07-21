import { authOptions } from "@/utils";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/api/auth/signin");
	}
	return <div>{children}</div>;
}
