"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		signIn("credentials", {
			username,
			password,
			redirect: false,
			url: "/admin/dashboard",
		})
			.then((res) => {
				if (res?.error) {
					return;
				}

				router.push("/admin/dashboard");
			})
			.catch((error) => {
				console.log("error", error);
			});
	};

	return (
		<div>
			<div className="w-full max-w-xs">
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							autoComplete="off"
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							type="password"
							placeholder="******************"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="off"
						/>
						<p className="text-red-500 text-xs italic">Please choose a password.</p>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
				<p className="text-center text-gray-500 text-xs">©2020 Acme Corp. All rights reserved.</p>
			</div>
		</div>
	);
}
