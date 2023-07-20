"use client";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
	return (
		<div>
			<h1>admin dashboard</h1>
			<button onClick={() => void signOut()}>sign out</button>
		</div>
	);
}
