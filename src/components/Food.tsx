"use client";
import Image from "next/image";
export function Food(props: { src: string; title: string }) {
	return (
		<div className="min-w-[130px] min-h-[100px]">
			<Image
				className="overflow-hidden !h-[80px] object-contain"
				src={props.src}
				alt="Food"
				width={130}
				height={100}
			/>
			<h1>{props.title}</h1>
		</div>
	);
}
