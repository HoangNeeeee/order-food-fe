import { Food, Popular } from "@/components";
import Image from "next/image";
import { extend } from "lodash";
import React from "react";
import { Component } from "react";
export default function Home() {
	return (
		<main className="px-5 pt-5 pb-10">
			<div className="flex justify-center gap-44">
				<h1 className="text-[#101010] w-[121px] h-[59px] text-[42px] text-center">Menu</h1>
				<a href="/profile">
					<img className="w-[56px] h-[56px] flex items-center" src="Ellipse2.svg" />
				</a>
			</div>
			<div className="relative flex  bg-[#eeeeee] px-3 w-[358px] h-[58px] rounded-[30px] outline-none flex-row items-center justify-start">
				<img className="w-8 h-8" src="Search.svg" />
				<input className="w-full bg-[#eeeeee] ml-2" placeholder="Search" />
			</div>
			<div className="flex mt-8 text-center overflow-x-scroll no-scrollbar">
				<Food src="/FoodPic.png" title="All" />
				<Food src="/FoodPic2.png" title="Burger" />
				<Food src="/FoodPic.png" title="Pizza" />
				<Food src="/Dessert.png" title="Dessert" />
				<Food src="/Dessert.png" title="Dessert" />
				<Food src="/Dessert.png" title="Dessert" />
				<Food src="/Dessert.png" title="Dessert" />
				<Food src="/Dessert.png" title="Dessert" />
				<Food src="/Dessert.png" title="Dessert" />
			</div>
			<h1 className="text-[#101010] mt-3 mb-1 text-2xl ">Promotions</h1>
			<div className="py-5 rounded-3xl bg-gradient-to-r from-[#9577F2] to-[#A085F7] flex justify-center items-center gap-7 mt-1">
				<div className="font-poppins">
					<h1 className="text-[#FFFBFB]">Today's Offer</h1>
					<h1 className="text-xl text-[#FFFBFB] font-semibold">Free box of Fries</h1>
					<h1 className="text-[#FFFBFB]">on all orders above $150</h1>
				</div>
				<div>
					<Image className="rounded-xl" src="/FrenchFries.png" alt="Trangmieng" width={107} height={107} />
				</div>
			</div>
			<h1 className="text-[#101010] text-2xl mt-4">Popular</h1>
			{/* <div
				className="grid  mt-1 "
				style={{
					gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
				}}
			> */}
			<div className="flex flex-wrap w-full justify-between gap-y-4 mt-1">
				<Popular src="/Burger.png" title="Beef Burger" cost="$20" />
				<Popular src="/PizzaFries.png" title="Beef Burger" cost="$32" />
				<Popular src="/FrenchFries.png" title="Beef Burger" cost="$32" />
				<Popular src="/FrenchFries.png" title="Beef Burger" cost="$32" />
				<Popular src="/FrenchFries.png" title="Beef Burger" cost="$32" />
				<Popular src="/FrenchFries.png" title="Beef Burger" cost="$32" />
				<Popular src="/FrenchFries.png" title="Beef Burger" cost="$32" />
			</div>
		</main>
	);
}
