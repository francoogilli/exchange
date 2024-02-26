"use client";
import { Icon } from "@iconify/react";
import BuySell from "src/components/buy-sell";
export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center text-blue-500">Hello</h1>
    <div className="lg:grid text-white grid-cols-2 gap-3 space-y-2 sm:space-y-0 p-2 lg:grid-cols-12 md:grid-cols-3 pt-20 pb-14">
    
    
    <BuySell/>
    
    
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
