"use client";

import React from "react";
import Link from "next/link";
import ConnectBar from "./ConnectBar";

const InnovativeTransformation = () => {
  return (
    <section className="md:-mt-14 lg:-mt-16">
      <div className="lg:w-[85%] mx-auto lg:pt-26 py-12 px-4">
        
        {/* Head */}
        <div className="text-center">
          <div className="badge">Innovative Transformation</div>
          <h2 className="heading">
            Your Business, <em>Our Solutions!</em>
          </h2>
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 my-6 lg:my-3 px-3">
          
          {/* Left Image */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it11.png"
              alt="Client collaboration illustration"
              className="hidden lg:block object-fit h-full w-full lg:h-112"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it11.png"
              alt="Client collaboration illustration mobile view"
              className="lg:hidden object-fit h-full w-full"
            />
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col gap-2 mb-4 lg:mb-0">

            <div className="flex flex-col lg:flex-row justify-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it2.png"
                alt="Business innovation concept"
                className="hidden lg:block object-fit lg:h-60 lg:w-80 2k:h-92 2k:w-94"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it21.png"
                alt="Business innovation concept mobile version"
                className="lg:hidden object-fit w-full h-full"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it3.png"
                alt="Team collaboration visual"
                className="hidden lg:block object-fit lg:h-60 lg:w-80 2k:h-92 2k:w-94"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it31.png"
                alt="Team collaboration visual mobile version"
                className="lg:hidden object-fit w-full h-full"
              />
            </div>

            <Link href="/contacts">
              <img
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it4.png"
                alt="Contact us banner"
                className="hidden lg:block lg:h-48 2k:h-72 w-full"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it41.png"
                alt="Contact us banner mobile view"
                className="lg:hidden object-cover"
              />
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <ConnectBar />
        </div>
      </div>
    </section>
  );
};

export default InnovativeTransformation;
