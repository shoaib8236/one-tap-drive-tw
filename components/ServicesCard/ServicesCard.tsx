import Image from "next/image";
import React from "react";
import { BsLuggageFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SericesCardProps } from "@/types/types";

const ServicesCard = (props: SericesCardProps) => {
  const { data } = props;


  console.log(data)

  return (
    <div className="flex gap-4 items-start border rounded-2xl overflow-hidden border-gray-300">
      <div className="relative h-[270px] w-[300px]">
        <Image
          layout="fill"
          className="object-cover"
          src={data?.image || ""}
          alt="car"
        />
      </div>
      <div className="flex-1 py-4 relative">
        <div className="__tags"></div>

        <h2 className="text-2xl mb-1 font-medium uppercase">
          {data?.make} {data?.model} {data?.year}
        </h2>
        <p className="flex items-center">
          <HiOutlineLocationMarker className="text-danger mr-2" /> Dubai, UAE
        </p>
        <div className="flex justify-between items-center  max-w-[200px]">
          <span className="text-gray-600 font-bold">Per Day</span>{" "}
          <span className="font-bold text-gray-600">AED 800</span>
        </div>
        <div className="flex justify-between items-center  max-w-[200px]">
          <span className="text-gray-600 text-sm">Per Month</span>{" "}
          <span className="text-sm text-gray-600">AED 4000</span>
        </div>
        <ul className="mt-3">
          <li className="text-gray-500 text-sm flex gap-1 items-center">
            <FcCheckmark /> 1 day rental available
          </li>
          <li className="text-gray-500 text-sm flex gap-1 items-center">
            <FcCheckmark /> Deposit: AED 4000
          </li>
          <li className="text-gray-500 text-sm flex gap-1 items-center">
            <FcCheckmark /> Insurance Included
          </li>
        </ul>

        <div className="flex gap-2 mt-3 items-center">
          <span className="flex gap-1 items-center border-2 border-gray-200 shadow-lg shadow-gray-300 py-1 px-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-200">
            <span className="text-gray-500 font-semibold">SUV</span>{" "}
            <span className="text-xl font-medium text-gray-500">4</span>
          </span>
          <span className="flex gap-1 items-center border-2 border-gray-200 shadow-lg shadow-gray-300 py-1 px-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-200">
            <GiCarDoor className="text-lg text-gray-500" />{" "}
            <span className="text-xl font-medium text-gray-500">4</span>
          </span>
          <span className="flex gap-1 items-center border-2 border-gray-200 shadow-lg shadow-gray-300 py-1 px-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-200">
            <MdOutlineEventSeat className="text-lg text-gray-500" />{" "}
            <span className="text-xl font-medium text-gray-500">4</span>
          </span>
          <span className="flex gap-1 items-center border-2 border-gray-200 shadow-lg shadow-gray-300 py-1 px-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-200">
            <BsLuggageFill className="text-lg text-gray-500" />{" "}
            <span className="text-xl font-medium text-gray-500">4</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
