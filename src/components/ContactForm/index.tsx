"use client";

import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
	username: yup.string().required("Vui lòng nhập tên"),
	phonenumber: yup.string().required("Vui lòng nhập số điện thoại").min(10, "Số điện thoại cần ít nhất 10 số"),
	email: yup.string().email("Định Dạng Email Không Đúng").required("Vui lòng nhập email"),
	message: yup.string().required("Vui lòng nhập tin nhắn"),
});
export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: any) => console.log(data);
	return (
		<fieldset className="gap-4 flex flex-col">
			<div className="flex justify-between">
				<div>
					<input
						className="bg-red w-[170px] h-[53px] border-gray-500 border-2 rounded-lg px-2"
						placeholder="Tên*"
						{...register("username")}
					/> 
					<p className="text-red-500">{errors.username?.message}</p>
				</div>
				<div>
					<input
						className="bg-red w-[170px] h-[53px] border-gray-500 border-2 rounded-lg px-2"
						placeholder="Số điện thoại*"
						{...register("phonenumber")}
					/>
					<p className="text-red-500 w-[170px]">{errors.phonenumber?.message}</p>
				</div>
			</div>
			<div>
				<input
					type="email"
					className="bg-red w-full h-[53px] border-gray-500 border-2 rounded-lg px-2"
					placeholder="Email*"
					{...register("email")}
				/>
				<p className="text-red-500">{errors.email?.message}</p>
			</div>
			<div>
				<textarea
					className="bg-red w-full h-[81px] border-gray-500 border-2 rounded-lg px-2 py-2 whitespace-normal items-start"
					placeholder="Tin nhắn*"
					{...register("message")}
				/>
				<p className="text-red-500">{errors.message?.message}</p>
			</div>
			<div className=" w-full flex justify-center items-center mt-5">
				<button
					className=" bg-red-600 w-[160px] h-[52px] rounded-lg flex justify-center items-center"
					onClick={handleSubmit(onSubmit)}
				>
					<h1 className="text-white font-nigger uppercase ">Gửi</h1>
				</button>
			</div>
		</fieldset>
	);
};
