"use client";
import Image from "next/image";
export function Food(props: { src: string; title: string }) {
	return (
		<div className="min-w-[80px]">
			<Image
				className="overflow-hidden !h-[80px] object-contain"
				src={props.src}
				alt="Food"
				width={80}
				height={80}
			/>
			<h1>{props.title}</h1>
		</div>
	);
}
