"use client";

import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

export default function ConnectBar() {
  return (
    <div className="mx-3">
      <div
        className="w-full desktop:w-[85%] flex flex-col desktops:flex-row justify-between items-center gap-6 rounded-2xl desktops:rounded-4xl 
          overflow-hidden my-4 px-2 desktop:px-4 py-4 desktops:py-2 max-w-7xl mx-auto
          bg-linear-to-r from-cblue via-gray-200 to-indigo-400"
      >
        {/* Left Image */}
        <div className="w-full desktops:w-[20%] flex justify-center">
        <Image
            src="/teams.png"
            alt="Bottom Decoration"
            width={200}
            height={50}
            className="w-full max-w-[300px] h-auto object-contain"
        />
        </div>

        {/* Center Text */}
        <p className="mobiles:text-lg md:text-sm desktop:text-xl text-center font-bold font-inter">
          Secure your future. Connect with one of the finest technicians in the industry
        </p>

        {/* Button */}
        <Link
          href="/contacts"
          className="desktop:w-[5%] flex justify-between items-center"
        >
          <button className="py-3 px-12 md:p-4 hover:bg-cblue transform bg-gradient-to-b from-indigo-700 to-blue-400 hover:scale-102 rounded-full">
            <span className="block desktops:hidden text-white font-bold font-inter">
              Check out
            </span>
            <CgArrowRight className="hidden desktops:block text-white text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}
