import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/admin/login",
	},
	providers: [
		Credentials({
			type: "credentials",
			name: "Credentials",
			credentials: {
				username: { label: "Username" },
				password: { label: "Password" },
			},
			authorize(credentials, req) {
				if (credentials?.username === "admin" && credentials.password === "admin") {
					return {
						id: "1",
						username: "admin",
						email: "admin@example.com",
					};
				}

				return null;
			},
		}),
	],
};
