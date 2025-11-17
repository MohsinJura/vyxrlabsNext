"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section className="relative z-10 bg-black text-white flex justify-center pt-10 md:pt-16 -mt-[120px] md:-mt-[250px] overflow-hidden">
      {/* Main Container */}
      <div
        className="w-full max-w-7xl md:w-[80%] rounded-t-2xl shadow-lg border border-stone-400 border-b-0 
        flex flex-col relative md:min-h-[600px] mx-auto transition-all duration-300 ease-in-out"
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-8 md:px-12 py-6 md:py-10 gap-8 md:gap-20">

          {/* Text Block */}
          <div className="w-full text-center lg:text-left md:w-5/6">
            <div className="badge mb-4">Who we are</div>

            <p className="font-inter font-bold leading-tight text-[34px] sm:text-[40px] md:text-[50px]">
              Your trusted partner for impactful design, crafting apps and
              business that <em>drive success.</em>
            </p>
          </div>

          {/* Image & Info Block */}
          <div className="w-full lg:w-1/6 flex flex-col items-center text-center mt-6 md:mt-0">
            <Image
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t2.png"
              alt="Travis Miller, Co-Founder"
              width={300}
              height={300}
              className="w-[70%] sm:w-3/4 md:w-full h-auto object-contain mb-3 md:mb-4 transition-transform duration-300 hover:scale-[1.03]"
            />

            <h3 className="font-semibold mt-[-5px] md:mt-[-10px] text-[16px] sm:text-[18px] md:text-[23px]">
              Travis Miller
            </h3>

            <p className="text-cblue font-playfair font-semibold text-sm sm:text-base md:text-[19px] mt-[-2px] md:mt-[-5px] max-w-[90%]">
              Co-Founder
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#4676FF] to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center w-full p-4 sm:p-6 md:px-10 text-center">
          <p className="font-semibold leading-snug mb-3 md:mb-4 text-lg sm:text-2xl md:text-4xl">
            <em>Delivering</em> change that matters. <br />
            <em>Innovation</em> alongside partner trust.
          </p>

          <p className="text-gray-300 text-sm sm:text-base md:text-base max-w-full md:max-w-[80%] mb-5 md:mb-6">
            We specialize in delivering high-impact digital experience solutions
            that drive measurable success for sellers in today’s fast-paced
            digital economy. Our mission is to empower brands with advanced
            selling techniques, seamless digital interactions, and a strategic
            approach rooted in professionalism and innovation.
          </p>

          <Link
            href="/contacts"
            className="ctabtn mb-5"
          >
            <Image
              src="https://static.wixstatic.com/media/0d9155_f5b7e5cc16534e6f987af648c2dc363f~mv2.png"
              alt="Audit Icon"
              width={25}
              height={25}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            Get a free audit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
