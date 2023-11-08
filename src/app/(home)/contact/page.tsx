import React from "react";
import Image from "next/image";
import { ContactItems } from "@/components";
import { ContactForm } from "@/components/ContactForm";

function Contact() {
	return (
		<div className="px-[15px] py-[15px]">
			<h1 className="flex justify-center items-center text-[26px] font-nigger font-bold uppercase">Liên Hệ</h1>
			<h1 className="text-2xl font-nigger font-semibold mt-8 mb-4">Thông tin liên hệ</h1>
			<div className="flex flex-col gap-4">
				<ContactItems src="https://jollibee.com.vn/media/wysiwyg/ICON_DUI_GA-05.png" title="Jolibee Việt Nam" />
				<ContactItems src="https://jollibee.com.vn/media/wysiwyg/ICON_DUI_GA-05.png" title="1900-1533" />
				<ContactItems
					src="https://jollibee.com.vn/media/wysiwyg/ICON_DUI_GA-05.png"
					title="Lầu 5-tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu, Quận 3, TP.HCM"
				/>
			</div>
			<h1 className="mt-10 mb-4 text-2xl font-nigger font-semibold">Gửi tin nhắn cho chúng tôi</h1>
			<div>
				<ContactForm />
			</div>
		</div>
	);
}
export default Contact;
