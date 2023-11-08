import React from "react";
import Image from "next/image";

function Footer() {
	return (
		<footer>
			<div className="bg-[#e31837] px-[15px] py-[30px]">
				<div className="flex justify-center items-center mb-[15px]">
					<Image className="bg-black" src="valorantlogosvg.svg" alt="testlogo" width={75} height={75} />
				</div>
				<div className="gap-[10px] flex flex-col text-[#fff] font-me">
					<p>CÔNG TY TNHH JOLLIBEE VIỆT NAM</p>
					<p>
						Địa chỉ: Lầu 5, tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh, Việt
						Nam
					</p>
					<p>Điện thoại: (028) 39309168</p>
					<p>Tổng đài: 1900-1533</p>
					<p>Mã số thuế: 0303883266</p>
					<p>Ngày cấp: 15/07/2008 - Nơi cấp: Cục Thuế Hồ Chí Minh</p>
					<p>
						Hộp thư góp ý: <a href="mailto:jbvnfeedback@jollibee.com.vn">jbvnfeedback@jollibee.com.vn</a>
					</p>
				</div>
				<br></br>
				<br></br>
				<div className="text-[#fff] flex flex-col gap-4 font-roboto text">
					<a className="w-[180px] h-[50px]" href="tel:19001533">
						<Image
							src="https://jollibee.com.vn/media/wysiwyg/delivery-lg_1.png"
							alt=""
							width={180}
							height={50}
						/>
					</a>
					<a href="/contact">
						<p>Liên hệ</p>
					</a>
					<p>Chính sách và quy định chung</p>
					<p>Chính sách thanh toán khi đặt hàng</p>
					<p>Chính sách hoạt động</p>
					<p>Chính sách an toàn thông tin</p>
					<p>Thông tin vận chuyển và giao nhận</p>
					<p>Thông tin đăng ký giao dịch chung</p>
					<p>Hướng dẫn đặt phần ăn</p>
				</div>
				<div className="mt-[45px] flex flex-col gap-4">
					<p className="text-[18px] uppercase font-nigger text-[#fff] font-bold">Hãy kết nối với chúng tôi</p>

					<a className="flex" href="https://www.facebook.com/JollibeeVietnam">
						<Image className="rounded-md mr-[15px]" src="SquareFb.svg" alt="" width={34} height={34} />
						<h1 className="flex justify-center items-center text-[16px] text-[#fff] font-roboto">
							Facebook
						</h1>
					</a>

					<a className="flex" href="">
						<Image
							className="rounded-md bg-[#ffc522] mr-[15px]"
							src="emailicon2.svg"
							alt=""
							width={34}
							height={34}
						/>
						<h1 className="flex justify-center items-center text-[16px] text-[#fff] font-roboto">Email</h1>
					</a>
					<a href="http://online.gov.vn/Home/WebDetails/10940">
						<Image src="/chungnhanbct.png" alt="" width={200} height={76} />
					</a>
				</div>
				<hr className="mb-5 mt-5" />
				<div>
					<p className="text-white text-2xl text-left uppercase font-bold">
						Tải ứng dụng để đặt hàng với nhiều ưu đãi hơn
					</p>
					<div className="flex justify-center gap-9 mt-[25px]">
						<button>
							<a href="https://play.google.com/store/apps/details?id=com.jollibee.loyalty">
								<Image
									className="object-cover !h-[40px]"
									src="CHplay.svg"
									alt=""
									width={140}
									height={40}
								/>
							</a>
						</button>
						<button>
							<a href="https://apps.apple.com/vn/app/jollibee-vietnam/id1554984107">
								<Image
									className="object-cover !h-[40px]"
									src="Apple.svg"
									alt=""
									width={140}
									height={40}
								/>
							</a>
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
