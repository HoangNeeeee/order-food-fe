import React from "react";

export default function Home() {
	return (
		<main className="bg-gradient-to-b from-[#462B9C] to-[#644AB5] flex w-full h-screen px-10 flex-col justify-center items-center">
			<img src="FoodPic.png" className="h-auto w-full object-contain" />
			<h1 className="text-white text-4xl font-bold mt-16">Enjoy Your Food</h1>
			<button className="rounded-3xl bg-white h-16 px-8 mt-16">
				<a className="font-bold text-2xl text-[#462B9C]" href="/menu">
					Get Started
				</a>
			</button>
		</main>
	);
}
