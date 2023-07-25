import { Popular } from "@/components";
import Image from "next/image";
export default function Detail() {
	return (
		<main className=" h-screen bg-gradient-to-b from-[#462B9C] to-[#644AB5D9] flex flex-col justify-center">
			<div className="px-9 py-14 flex justify-center">
				<a href="/" className="absolute top-9 left-9">
					<Image
						className="flex font-bold text-2xl font-poppins"
						src="/Arrowback.svg"
						alt="Arrowback"
						width={32}
						height={32}
					/>
				</a>
				<Image className="mt-12" src="/BurgerSandwich.png" alt="Burger" width={280} height={210} />
			</div>
			<div className="bg-white w-100% h-[482px] rounded-tl-[70px] px-9 py-6 text-black">
				<div className="w-[100px] h-[52px] bg-[#472C9D] rounded-[40px] flex justify-center items-center gap-2 ">
					{/* <h1 className="flex justify-center">$</h1> */}
					<Image src="/Star.svg" alt="" width={24} height={24} />
					<h1 className="text-white">ABCD</h1>
					<h1 className="text-black">20</h1>
				</div>
			</div>
		</main>
	);
}
