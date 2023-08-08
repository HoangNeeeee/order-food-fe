import Image from "next/image";
export function ContactItems(props: { src: string; title: string }) {
	return (
		<div className="flex justify-start items-start">
			<Image className="object-contain" src={props.src} alt="" width={30} height={20} />
			<h1 className="flex justify-center items-center ml-[10px]">{props.title}</h1>
		</div>
	);
}
