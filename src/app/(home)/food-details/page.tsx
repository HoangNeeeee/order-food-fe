import { Popular } from "@/components";
import Image from "next/image";
export default function Detail() {
	return (
		<main className=" h-screen bg-gradient-to-b from-[#462B9C] to-[#644AB5D9] flex flex-col justify-center">
			<div className="px-9 py-14 flex justify-center">
				{/* <a href="/" className="absolute top-9 left-9">
					<Image
						className="flex font-bold text-2xl font-poppins"
						src="/Arrowback.svg"
						alt="Arrowback"
						width={32}
						height={32}
					/>
				</a> */}
				<Image className="mt-12" src="/BurgerSandwich.png" alt="Burger" width={280} height={210} />
			</div>
			<div className="bg-white w-100% h-[482px] rounded-tl-[70px] px-9 py-12 text-black">
				<div className="flex">
					<h1 className="font-montserrat w-[230px] h-[31px] text-[24px] font-bold">Chicken Burger </h1>
					<div>
						<Image className="mr-3" src="LocationIcon.svg" alt="locationlogo" width={34} height={34} />
					</div>
					<div className=" w-[34px] h-[34px] relative flex justify-center items-center bg-red-100 rounded-full">
						<Image
							className="absolute w-[16px] h-[16px] "
							src="heart.svg"
							alt="heartlogo"
							width={34}
							height={34}
						/>
					</div>
				</div>
				<div className="w-[100px] h-[52px] rounded-[40px] flex justify-center items-center gap-2 ">
					<Image src="/Star.svg" alt="" width={24} height={24} />
					<h1 className="text-black w-32 h-5 inline-block text-sm font-semibold font-montserrat">
						4,8 Rating
					</h1>
				</div>
				<h1 className="font-montserrat2">
					Delicious and tasty cheese burger one of tasty town’s finest, it has a record sale of 2000 orders
					and a rating of 4.8 since it’s introduction. no dull yourself oh!!
				</h1>
				<div className="flex justify-between">
					<div className="flex gap-2 mt-[39px]">
						<button className="bg-[#FFEDED] w-[32px] h-[26px] text-[18px] text-[#F10027] font-medium flex justify-center items-center rounded-2xl">
							{" "}
							-{" "}
						</button>
						<h1>1</h1>
						<button className="bg-[#FFEDED] w-[32px] h-[26px] text-[18px] text-[#F10027] font-medium flex justify-center items-center rounded-2xl">
							{" "}
							+{" "}
						</button>
					</div>
					<h1 className="flex mt-[39px]">$12</h1>
				</div>
				<div className="flex justify-center items-center mt-[25px]">
					<button className="flex justify-center items-center bg-[#F10027] w-[290px] h-[72px] rounded-3xl font-montserrat2 text-[20px] font-semibold text-white">
						Add to cart
					</button>
				</div>
			</div>
		</main>
	);
}
