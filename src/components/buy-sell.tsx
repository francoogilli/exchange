import { Icon } from "@iconify/react";
import { useState } from "react";
export default function BuySell() {
  const [selectedOption, setSelectedOption] = useState('buy');
    return (
        <div className=" col-span-4 p-6  bg-[#121212]  rounded-2xl ">
      <div className="flex pb-5 justify-center gap-x-20">
      <p className={`text-xl font-medium cursor-pointer ${selectedOption === 'buy' ? 'text-blue-600' : 'text-gray-500'}`} onClick={() => setSelectedOption('buy')}>Comprar</p>
      <p className={`text-xl font-medium cursor-pointer ${selectedOption === 'sell' ? 'text-blue-600' : 'text-gray-500'}`} onClick={() => setSelectedOption('sell')}>Vender</p>
      </div>
      <div className="flex justify-between">
        <div className={`h-[2px] w-full ${selectedOption === 'buy' ? 'bg-blue-600' : 'bg-gray-500'}`}></div>
        <div className={`h-[2px] w-full ${selectedOption === 'sell' ? 'bg-blue-600' : 'bg-gray-500'}`}></div>
      </div>
      <div className="flex py-6 justify-between">
        <p className="text-2xl font-medium">1 <span className="text-teal-400">BTC</span></p>
        <Icon icon="pajamas:arrow-right" className="text-[#A6A9B3] text-3xl"/>
        <p className="text-2xl font-medium">51,740 <span className="text-teal-400">USD</span></p>
      </div>

      <div className="pb-2">
        <p className="text-xl text-teal-400 font-medium">Pagas</p>
        <div className="flex justify-between p-2 items-center bg-[#121212] border border-zinc-800 rounded-2xl   ">
          <input type="number" name="" id="" placeholder="0" className="appearance-none focus:outline-none bg-[#121212] text-lg w-3/4" />
          <select name="" id="" className="focus:outline-none font-medium p-1 rounded-[0.5rem] bg-[#1c1c1c]  text-base w-1/4">
            <option value="">ARS</option>
            <option value="">USD</option>
            <option value="">BTC</option>
          </select>
        </div>
      </div>

      <div className="pb-5">
        <p className="text-xl text-teal-400 font-medium">Obtienes</p>
        <div className="flex justify-between p-2 items-center bg-[#121212] border border-zinc-800 rounded-2xl   ">
          <input type="number" name="" id="" placeholder="0" className="appearance-none focus:outline-none bg-[#121212] text-lg w-3/4" />
          <select name="" id="" className="focus:outline-none font-medium p-1 rounded-[0.5rem] bg-[#1c1c1c]  text-base w-1/4">
            <option value="">ARS</option>
            <option value="">USD</option>
            <option value="">BTC</option>
          </select>
        </div>
      </div>

      <button className="font-medium text-xl px-4 py-5 w-full bg-gradient-to-r from-purple-600 hover:from-purple-600 hover:to-purple-500 transition duration-300  to-purple-400 border border-zinc-800 rounded-2xl">
      Exchange
      </button>
    </div>
    )}