"use client";
import { slide as Menu } from "react-burger-menu";
import { Food, Popular } from "@/components";
import Image from "next/image";
import { extend } from "lodash";
import React, { useMemo } from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BiHomeAlt, BiUser, BiMedal, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import Footer from "@/components/Footer";

export default function Home(this: any) {
	// const menuList = [];

	return (
		<div className="py-[15px]">
			<div className="px-4">
				<div className="flex justify-center items-center bg-[#eeeeee] px-3 w-full h-[58px] rounded-[30px] outline-none">
					<img className="w-8 h-8" src="Search.svg" />
					<input className="w-full h-[50px] bg-[#eeeeee] ml-2" placeholder="Search" />
				</div>
				<div className="py-5 rounded-3xl bg-primary flex justify-center items-center gap-7 mt-7 ">
					<div>
						<Image className="rounded-xl" src="/Fastfood.svg" alt="fastfood" width={122} height={107} />
					</div>
					<div className="flex flex-col items-center font-montserrat font-bold">
						<h1 className="text-[#FFFBFB] w-[130px] h-[50px]">50% off special deal in Febuary</h1>
						<button className="flex justify-center items-center rounded-2xl mt-2 w-[100px] h-[43px] bg-[#FFC42E]">
							<a href="/menu">
								<h1>Buy Now</h1>
							</a>
						</button>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<h1 className="text-5xl">Menu Nè</h1>
				</div>

				{/* {menuList.map((item) => {
				return (
					<div className="mt-8 flex flex-col">
					<div className="flex justify-between">
					<h1 className="font-montserrat font-bold text-[#000]">{item.title}</h1>
					<h1 className="font-montserrat text-[#F10027] font-medium">View More</h1>
					</div>
					<div>
					<div className="flex text-center gap-8 justify-between items-center overflow-x-scroll no-scrollbar">
					{/* {item.children.map((item) => {
						return <Popular src="/Dessert.png" title="ABCD" cost="10" />;
					})}
					{item.children.map((item) => {
						return <Popular src="/Dessert.png" title="ABCD" cost="10" />;
					})} */}

				{/* <Food src="/Dessert.png" title="Pizza" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
								<Food src="/Dessert.png" title="Dessert" />
							<Food src="/Dessert.png" title="Dessert" /> */}
				{/* </div> */}

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
				{/* </div> */}
				{/*  		</div> */}
				{/*  	);
			 })} */}
			</div>
		</div>
	);
}
