"use client";
import { MouseEvent, useMemo } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export const Sidebar = () => {
	const MenuList = useMemo(
		() => [
			{
				id: "home",
				href: "/",
				title: "Home",
			},
			{
				id: "about",
				href: "/food-details",
				title: "About",
			},
			{
				id: "contact",
				href: "/contact",
				title: "Contact",
			},
			{
				id: "login",
				href: "/login",
				title: "Login",
			},
		],
		[],
	);

	return (
		<div className="h-14 w-14 mr-4">
			<Menu>
				{MenuList.map((item, index) => {
					return (
						<a key={index} id={item.id} className="menu-item" href={item.href}>
							{item.title}
						</a>
					);
				})}
			</Menu>
		</div>
	);
};
