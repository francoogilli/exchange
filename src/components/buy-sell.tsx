import { Icon } from "@iconify/react";
import { useState } from "react";

export default function BuySell() {
  const [selectedOption, setSelectedOption] = useState('buy');

  return (
    <div className="col-span-4 p-6 bg-[#121212] rounded-2xl">
      <div className="flex justify-center pb-4">
        <div className="bg-black rounded-2xl flex justify-center gap-x-2 p-1.5">
          <p className={`text-lg sm:text-base font-medium rounded-[.625rem] py-1 px-3 cursor-pointer ${selectedOption === 'buy' ? 'bg-[#121212]' : 'text-gray-500'}`} onClick={() => setSelectedOption('buy')}>Comprar</p>
          <p className={`text-lg sm:text-base font-medium rounded-[.625rem] py-1 px-3 cursor-pointer ${selectedOption === 'sell' ? 'bg-[#121212]' : 'text-gray-500'}`} onClick={() => setSelectedOption('sell')}>Vender</p>
        </div>
      </div>

      

      <div className="pb-2">
        <p className="text-base pb-1 text-zinc-400 font-medium">Tu pagas</p>
        <div className="flex justify-between p-2 items-center bg-black rounded-2xl">
          <input type="number" name="" id="" placeholder="0" className="appearance-none focus:outline-none bg-black text-lg w-3/4" />
          <select name="" id="" className="focus:outline-none font-medium p-1 rounded-[0.5rem] bg-[#121212]  text-base w-1/4">
            <option value="">ARS</option>
            <option value="">USD</option>
            <option value="">BTC</option>
          </select>
        </div>
      </div>
      <span className="flex justify-center items-center"><Icon icon="uil:exchange-alt" className="rotate-90" width={28}/></span>
      <div className="pb-3">
        <p className="text-base pb-1 text-zinc-400 font-medium">Tu obtienes</p>
        <div className="flex justify-between p-2 items-center bg-black rounded-2xl">
          <input type="number" name="" id="" placeholder="0" className="appearance-none focus:outline-none bg-black text-lg w-3/4" />
          <select name="" id="" className="focus:outline-none font-medium p-1 rounded-[0.5rem] bg-[#121212]  text-base w-1/4">
            <option value="">ARS</option>
            <option value="">USD</option>
            <option value="">BTC</option>
          </select>
        </div>
      </div>
      <span className="text-zinc-400 text-base font-medium">1 BTC = $62,955</span>

      <button className="font-medium text-xl px-3 py-4 mt-6 w-full bg-gradient-to-r from-purple-600 hover:from-purple-600 hover:to-purple-500 transition duration-300 to-purple-400 border border-zinc-800 rounded-2xl">
        Exchange
      </button>
    </div>
  );
}
