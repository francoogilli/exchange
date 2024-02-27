
import { historyData } from "../data";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function History() {
  return (
    <div className=" bg-[#121212] col-span-8  rounded-2xl">
      <div className="relative pt-4 rounded-[14px] overflow-x-auto">
      <span className="absolute left-0 right-0 bottom-0 h-[400px] sm:h-[190px] bg-gradient-to-b from-[#180e0e]/5 via-[#180e0e]/80 to-[#120b0b]/95 ">
        
      </span>
        <table className="w-full  text-sm  text-left rtl:text-right text-zinc-200">
          <thead className="text-sm text-[#666873] bg-[#121212]">
            <tr className="">
              <th scope="col" className="px-6 font-semibold py-3">
                Currency
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Price
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Amount
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Buy/Sell
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr
                key={index}
                className={`border-bs hover:bg-[#202020] ${
                  index % 2 === 0 ? "bg-[#121212]" : "bg-[#121212]"
                } dark:border-gray-700`}
              >
                <td className="px-6 py-4 flex items-center ">
                  <Image src={item.icon} className="mr-3 hover:scale-125 transition-transform duration-500" width={25} height={25} alt=""/>
                  <span className="font-normal">{item.currency}</span>
                </td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className={`px-6 py-5 font-normal`}>
                  <span className={`px-4 py-1 rounded-lg font-normal ${item.action === 'Sell' ? 'bg-emerald-500/20 hover:bg-emerald-500/25 hover:text-emerald-400 text-emerald-500 transition duration-300' : 'bg-red-500/20 hover:bg-red-500/25 hover:text-red-400 text-red-500 transition duration-300'}`}>{item.action}</span>
                </td>
                <td className="px-6 py-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/history" className="absolute bottom-0 left-0 flex items-center justify-center px-5 py-3 cursor-pointer hover:text-white transition duration-300 font-semibold text-xl text-zinc-300">Ver historial de movimientos<Icon icon="uil:arrow-right" className="ml-2" width={24} /></a>
      </div>
    </div>
  );
}
