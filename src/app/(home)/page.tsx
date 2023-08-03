"use client";
import { slide as Menu } from "react-burger-menu";
import { Food, Popular } from "@/components";
import Image from "next/image";
import { extend } from "lodash";
import React, { useMemo } from "react";
import { Component } from "react";
import { useGetFoodMenu } from "@/network";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BiHomeAlt, BiUser, BiMedal, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

export default function Home(this: any) {
	const { data: menuRes } = useGetFoodMenu();

	const menuList = useMemo(() => menuRes?.responseData ?? [], [menuRes]);

	return (
		<>
			{/* {menuList.map((item) => {
				return <Food src={item.image} title={item.title} />;
			})} */}
			{/* Sidebar Hamburger Menu */}
			{/* <Menu>
				<p className="memu-title">Menu</p>
				<a className="menu-item" href="/">
					<BiHomeAlt />
					Home
				</a>
				<a className="menu-item" href="/user">
					<BiUser />
					User
				</a>
				<a className="menu-item" href="/result">
					<BiMedal />
					Result
				</a>
				<a className="menu-item" href="/login">
					<BiLogInCircle />
					Log in
				</a>
				<a className="menu-item logout" href="/logout">
					<BiLogOutCircle />
					Log out
				</a>
			</Menu> */}
			<div className="relative flex  bg-[#eeeeee] px-3 w-[358px] h-[58px] rounded-[30px] outline-none flex-row items-center justify-start">
				<img className="w-8 h-8" src="Search.svg" />
				<input className="w-full h-[50px] bg-[#eeeeee] ml-2" placeholder="Search" />
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
			{/* <div>
				<Menu>
					<a id="home" className="menu-item" href="/">
						Home
					</a>
					<a id="about" className="menu-item" href="/about">
						About
					</a>
					<a id="contact" className="menu-item" href="/contact">
						Contact
					</a>
					<a onClick={this.showSettings} className="menu-item--small" href="">
						Settings
					</a>
				</Menu>
			</div> */}

			{menuList.map((item) => {
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
		</>
	);
}