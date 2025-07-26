"use client";

import { Armchair, Sofa } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const products = [
  { id: 1, name: "Deluxe", price: "10000 MMK" },
  { id: 2, name: "Premium", price: "15000 MMK" },
  { id: 3, name: "Sofa", price: "20000 MMK" },
];

const SelectZone = () => {
  const router = useRouter();
  const handleSelect = (name: string) => {
    router.push(`/seat?status=${name}`);
    console.log("Selected:", name);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <h2 className="mb-4 text-3xl font-bold font-serif">Select Zone</h2>
      {/* Show Example Of Seat */}
      <div className="flex flex-col justify-center items-center space-y-6 bg-gray-200 w-[900px]">
        <div className="flex justify-center items-center bg-cyan-400 w-[100px] border border-gray-800 text-white">
          TV Screen
        </div>
        <div className="grid grid-cols-20">
          <div className="col-span-1 text-center">
            <p>J</p>
            <p>I</p>
            <p>H</p>
            <p>G</p>
            <p>F</p>
          </div>
          <div className="col-span-19 bg-cyan-400 w-[800px] border border-gray-800"></div>
        </div>
        <div className="grid grid-cols-20">
          <div className="col-span-1 text-center">
            <p>E</p>
            <p>D</p>
            <p>C</p>
          </div>
          <div className="col-span-19 bg-green-400 w-[800px] border border-gray-800"></div>
        </div>
        <div className="grid grid-cols-20">
          <div className="col-span-1 text-center">
            <p>B</p>
            <p>A</p>
          </div>
          <div className="col-span-19 bg-violet-400 w-[800px] border border-gray-800"></div>
        </div>
        <div className="flex justify-between items-center gap-36">
          <div className="flex justify-center items-center gap-3">
            <p>
              <Armchair className="text-cyan-400" size={40} />
            </p>
            <div className="text-xl font-black font-serif">
              <p>Deluxe</p>
              <p>10000 MMK</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Sofa className="text-green-400" size={40} />
            <div className="text-xl font-black font-serif">
              <p>Premium</p>
              <p>15000 MMK</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Sofa className="text-violet-400" size={40} />
            <div className="text-xl font-black font-serif">
              <p>Sofa Sweet</p>
              <p>20000 MMK</p>
            </div>
          </div>
        </div>
      </div>
      {/* Choose Seat Type */}
      <div className="w-[500px] space-y-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 shadow-md rounded-md p-4"
          >
            <div className="text-xl font-black font-serif">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <div className="bg-sky-400 p-3 rounded-full w-24 text-center cursor-pointer">
              <button
                className="text-white"
                onClick={() => handleSelect(product.name)}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectZone;
