"use client";
import { Food, Popular } from "@/components";
import Image from "next/image";
import { extend } from "lodash";
import React, { useMemo } from "react";
import { Component } from "react";
import { useGetFoodMenu } from "@/network";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	const { data: menuRes } = useGetFoodMenu();

	const menuList = useMemo(() => menuRes?.responseData ?? [], [menuRes]);

	return (
		<main className="px-5 pt-5 pb-10">
			{/* {menuList.map((item) => {
				return <Food src={item.image} title={item.title} />;
			})} */}
			<div className="flex mb-">
				<FontAwesomeIcon className="flex justify-center mt-2" icon={faBars} />
				<h1 className="pl-4 mb-4 w-[230px] h-[62px] text-2xl font-bold font-montserrat text-[#000]">
					Find Your Favorite Meal
				</h1>
				<a href="/profile"></a>
			</div>
			<div className="relative flex  bg-[#eeeeee] px-3 w-[358px] h-[58px] rounded-[30px] outline-none flex-row items-center justify-start">
				<img className="w-8 h-8" src="Search.svg" />
				<input className="w-full bg-[#eeeeee] ml-2" placeholder="Search" />
			</div>
			<div className="py-5 rounded-3xl bg-[#F10027] flex justify-center items-center gap-7 mt-7 ">
				<div>
					<Image className="rounded-xl" src="/Fastfood.svg" alt="fastfood" width={122} height={107} />
				</div>
				<div className="flex flex-col items-center font-montserrat font-bold">
					<h1 className="text-[#FFFBFB] w-[130px] h-[50px]">50% off special deal in Febuary</h1>
					<button className="flex justify-center items-center rounded-2xl mt-2 w-[100px] h-[43px] bg-[#FFC42E]">
						<h1>Buy Now</h1>
					</button>
				</div>
			</div>

			{menuList.map((item) => {
				return (
					<div className="mt-8 flex flex-col">
						<div className="flex justify-between">
							<h1 className="font-montserrat font-bold text-[#000]">{item.title}</h1>
							<h1 className="font-montserrat text-[#F10027] font-medium">View More</h1>
						</div>
						<div>
							<div className="flex text-center gap-8 justify-between items-center overflow-x-scroll no-scrollbar">
								{item.children.map((item) => {
									return <Popular src="/Dessert.png" title="ABCD" cost="10" />;
								})}
								{item.children.map((item) => {
									return <Popular src="/Dessert.png" title="ABCD" cost="10" />;
								})}

								{/* <Food src="/Dessert.png" title="Pizza" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" /> */}
							</div>
							{/* <div className="flex text-center gap-8 justify-between items-center overflow-x-scroll no-scrollbar">
								<Food src="/Dessert.png" title="All" />
								<Food src="/Dessert.png" title="Burger" />
								<Food src="/Dessert.png" title="Pizza" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
							</div> */}
						</div>
					</div>
				);
			})}
		</main>
	);
}
