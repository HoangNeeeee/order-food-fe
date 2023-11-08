import React from "react";
import Image from "next/image";

function About() {
	return (
		<div className="bg-[#FFC522] flex flex-col justify-center items-center py-[15px]">
			<h1 className="font-nigger text-3xl text-[#E31837] uppercase pb-[30px]">Lịch sử hình thành</h1>
			<h1 className="pb-[25px]">
				Jollibee là một câu chuyện thành công phi thường bởi chỉ từ 2 tiệm kem nhỏ hình thành vào năm 1975,
				chuyên bán các món ăn nóng và bánh mì kẹp đã trở thành công ty với 7 cửa hàng vào năm 1978, chuyên về bơ
				gơ. Sau đó trở thành một tập đoàn tạo nên cuộc cách mạng thức ăn nhanh tại Philippines.
			</h1>
			<h1>
				Jollibee hiện có hơn 1000 cửa hàng tại Philippines và hơn 300 cửa hàng tại các quốc gia trên khắp thế
				giới như Mỹ, Hong Kong, các tiểu vương quốc Ả Rập Thống Nhất, Qatar, Brunei, Trung Quốc, và Việt Nam.
			</h1>
			<div></div>
			<div>
				<a href="https://www.facebook.com/JollibeeVietnam">
					{/* <Image src="" alt="" width={} height={} /> */}
				</a>
			</div>
		</div>
	);
}
export default About;
