"use client";
import { Icon } from "@iconify/react";
import BuySell from "src/components/buy-sell";
import History from "src/components/history";
export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center text-blue-500">Hello</h1>
    <div className="lg:grid text-white grid-cols-2 gap-3 space-y-2 sm:space-y-0 p-2 lg:grid-cols-12 md:grid-cols-3 pt-20 pb-14">
    
    
    <BuySell/>
    
    
    <History/>
    
    <div className=" bg-[#121212] col-span-4 rounded-2xl ">
      <h2 className="text-3xl font-medium text-center p-10">Composicion</h2>
    </div>
    <div className=" font-medium bg-[#121212] col-span-4 rounded-2xl ">
    <h2 className="text-3xl text-center p-10">Estado Actual</h2>
    </div>
    <div className=" font-medium bg-[#121212] col-span-4 rounded-2xl ">
      <h2 className="text-3xl text-center p-10">Ver precios</h2>
    </div>


    </div>
    </>
  );
}
