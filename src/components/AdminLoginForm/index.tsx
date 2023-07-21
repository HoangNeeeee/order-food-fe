"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

interface AdminLoginFormProps {
	dashboardUrl: string;
}

export function AdminLoginForm(props: AdminLoginFormProps) {
	const { dashboardUrl } = props;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const [redirectUrl, setRedirectUrl] = useState(dashboardUrl);

	useEffect(() => {
		const url = new URL(location.href);
		setRedirectUrl(url.searchParams.get("callbackUrl") ?? dashboardUrl);
	}, [dashboardUrl]);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		signIn("credentials", {
			username,
			password,
			redirect: false,
			url: redirectUrl,
		})
			.then((res) => {
				if (res?.error) {
					return;
				}
				router.push(redirectUrl);
			})
			.catch((error) => {
				console.log("error", error);
			});
	};

	return (
		<div className="w-screen h-screen flex items-center justify-center">
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
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						{/* <a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a> */}
					</div>
				</form>
			</div>
		</div>
	);
}
