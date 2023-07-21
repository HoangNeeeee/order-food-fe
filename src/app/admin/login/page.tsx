import { AdminLoginForm } from "@/components";
import { authOptions } from "@/utils";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const dashboardUrl = "/admin/dashboard";

export default async function Login() {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect(dashboardUrl);
	}

	return <AdminLoginForm dashboardUrl={dashboardUrl} />;
}
