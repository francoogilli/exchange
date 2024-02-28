import Image from "next/image";
export default function Balance() {
    return (
        <div className="bg-[#121212] col-span-4 rounded-2xl select-none p-5">
            <h2 className="text-xl font-semibold text-center text-[#A9A9A9] pb-6">Tu balance</h2>
            <h2 className="text-5xl font-semibold text-center pb-4">304.9</h2>
            <div className="flex justify-center hover:scale-110 transition duration-500  items-center gap-x-2">
                <Image src="/coins/eth.svg" width={25} height={25} alt="" />
                <span className="font-semibold text-xl text-[#8C8C8C] ">ETH</span>
            </div>
            <div className="flex justify-center pb-7">
                <Image src="/graphics.svg" className="w-full" draggable="false" width={310} height={310} alt="" />
            </div>
        </div>
    );
}