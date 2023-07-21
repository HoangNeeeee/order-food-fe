"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();

	return (
		<>
			Not signed in <br />
		</>
	);
}
