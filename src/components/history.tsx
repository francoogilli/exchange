import { Icon } from "@iconify/react";
import { historyData } from "../data";

export default function History() {
  return (
    <div className="border-2 bg-[#151A25] col-span-8 border-zinc-800 rounded-2xl">
      <div className="relative pt-4 rounded-[14px] overflow-x-auto">
        <table className="w-full text-sm  text-left rtl:text-right text-zinc-200">
          <thead className="text-sm text-[#666873] bg-[#181A25]">
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
                className={`border-bs ${
                  index % 2 === 0 ? "bg-[#171822]" : "bg-[#171822]"
                } dark:border-gray-700`}
              >
                <th
                  scope="row"
                  className="px-6 flex items-center  gap-x-2  py-4 font-medium  "
                >
                  <Icon icon={item.icon} className="text-xl" />{item.currency}
                </th>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">{item.action}</td>
                <td className="px-6 py-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}