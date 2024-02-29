
import { historyData } from "../data";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function History() {
  return (
    <div className=" bg-[#121212] col-span-8  rounded-2xl">
      <div className="relative pt-4 rounded-[14px] overflow-x-auto">
      
        <table className="w-full  text-sm  text-left rtl:text-right text-zinc-200">
          <thead className="text-sm text-[#848793] bg-[#121212]">
            <tr className="">
              <th scope="col" className="px-6 font-semibold py-3">
                Divisa
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Precio
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Cant.
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Comprar/Vender
              </th>
              <th scope="col" className="px-6 font-semibold py-3">
                Fecha
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
                <td className="px-6 py-2 font-medium flex items-center ">
                  <Image src={item.icon} className="mr-3 hover:scale-125 transition-transform duration-500" width={25} height={25} alt=""/>
                  <span className="font-medium">{item.currency}</span>
                </td>
                <td className="px-6 py-4 font-medium">{item.price}</td>
                <td className="px-6 py-4 font-medium">{item.amount}</td>
                <td className={`px-6 py-5 font-medium`}>
                  <span className={`px-4 py-1 rounded-lg font-medium ${item.action === 'Vender' ? 'bg-emerald-500/20 hover:bg-emerald-500/25 hover:text-emerald-400 text-emerald-500 transition duration-300' : 'bg-red-500/20 hover:bg-red-500/25 hover:text-red-400 text-red-500 transition duration-300'}`}>{item.action}</span>
                </td>
                <td className="px-6 py-4 font-medium">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
