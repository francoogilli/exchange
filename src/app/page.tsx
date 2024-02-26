"use client";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center text-blue-500">Hello</h1>
    <div className="lg:grid text-white grid-cols-2 gap-3 space-y-2 sm:space-y-0 p-2 lg:grid-cols-12 md:grid-cols-3 pb-14">
    
    <div className="border-2 col-span-5 p-6  bg-[#151823] border-zinc-800 rounded-2xl ">
      <div className="flex pb-2 justify-between">
        <h2 className="text-2xl text-zinc-200 font-normal">Exchange</h2>
        <Icon icon="uil:exchange-alt" className="text-green-400 text-3xl"/>
      </div>
      <div className="flex pb-6 justify-between">
        <p className="text-2xl font-medium">1 <span className="text-teal-400">BTC</span></p>
        <Icon icon="pajamas:arrow-right" className="text-[#A6A9B3] text-3xl"/>
        <p className="text-2xl font-medium">51,740 <span className="text-teal-400">USD</span></p>
      </div>

      <div className="pb-2">
        <p className="text-xl text-teal-400 font-medium">Obtienes</p>
        <div className="flex justify-between p-2 items-center bg-[#151823] border border-zinc-800 rounded-2xl   ">
          <input type="number" name="" id="" placeholder="0" className="appearance-none focus:outline-none bg-[#151823] text-lg w-3/4" />
          <select name="" id="" className="focus:outline-none p-2 rounded-[0.5rem] bg-[#1a1d29]  text-base w-1/4">
            <option value="">ARS</option>
            <option value="">USD</option>
            <option value="">BTC</option>
          </select>
        </div>
      </div>

      <div className="pb-5">
        <p className="text-xl text-teal-400 font-medium">Pagas</p>
        <div className="flex justify-between p-2 items-center bg-[#151823] border border-zinc-800 rounded-2xl   ">
          <input type="number" name="" id="" placeholder="0" className="appearance-none focus:outline-none bg-[#151823] text-lg w-3/4" />
          <select name="" id="" className="focus:outline-none p-2 rounded-[0.5rem] bg-[#1a1d29]  text-base w-1/4">
            <option value="">ARS</option>
            <option value="">USD</option>
            <option value="">BTC</option>
          </select>
        </div>
      </div>

      <button className="font-medium text-xl px-4 py-5 w-full bg-gradient-to-r from-purple-500 hover:from-purple-600 hover:to-purple-400 transition-colors duration-300  to-purple-400 border border-zinc-800 rounded-2xl">
      Exchange
      </button>
    </div>
    
    
    
    <div className="border-2 bg-[#151823] flex justify-center items-center col-span-7 border-zinc-800 rounded-2xl ">
      <a href="/history" className="text-3xl  font-medium text-center p-10">Historial</a>
    </div>
    
    <div className="border-2 bg-[#151823] col-span-4 border-zinc-800 rounded-2xl ">
      <h2 className="text-3xl font-medium text-center p-10">Composicion</h2>
    </div>
    <div className="border-2 font-medium bg-[#151823] col-span-4 border-zinc-800 rounded-2xl ">
    <h2 className="text-3xl text-center p-10">Estado Actual</h2>
    </div>
    <div className="border-2 font-medium bg-[#151823] col-span-4 border-zinc-800 rounded-2xl ">
      <h2 className="text-3xl text-center p-10">Ver precios</h2>
    </div>


    </div>
    </>
  );
}
