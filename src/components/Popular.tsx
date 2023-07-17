"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export function Popular(props: { src: string; title: string; cost: string }) {
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push("/food-details");
			}}
			className="w-[161px] h-[214px] bg-gradient-to-r rounded-3xl from-[#EBE8E8] to-[#EFEEEE]  flex flex-col justify-center items-center"
		>
			<div>
				<Image
					className="overflow-hidden object-contain !h-[100px]"
					src={props.src}
					alt="popular"
					width={130}
					height={100}
				/>
				<h1 className="flex justify-center">{props.title}</h1>
			</div>
			<div className="flex gap-14 text-[#C9AA05]">
				<h1 className="flex items-center">{props.cost}</h1>
				<Image src="/Addcircle.png" alt="addcart" width={28} height={28} />
			</div>
		</div>
	);
}
