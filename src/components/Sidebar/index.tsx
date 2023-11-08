"use client";
import { MouseEvent, useMemo } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { useGetSidebarMenu } from "@/network";
import Image from "next/image";

export const Sidebar = () => {
	const { data: menuRes } = useGetSidebarMenu();

	const MenuList = menuRes?.responseData ?? [];

	return (
		<div className="h-14 w-14">
			<Menu>
				{MenuList.map((item, index) => {
					return (
						<a key={index} id={item.id} className="menu-item" href={item.navLink}>
							{item.title}
						</a>
					);
				})}
			</Menu>
			<div className="flex justify-center items-center w-[390px] h-[56px]">
				<a href="/">
					<Image src="githublogo.svg" alt="" width={45} height={65} />
				</a>
			</div>
		</div>
	);
};
