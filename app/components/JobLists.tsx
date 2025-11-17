"use client";

import Image from "next/image";

export default function JobLists() {
  return (
    <section
      className="relative z-2 bg-black rounded-t-lg md:rounded-t-[45px] -mt-[90px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/openingBG.jpg')",
      }}
    >
      <div className="max-w-7xl relative mx-auto text-white py-20">
        {/* Badge */}
        <div className="w-full text-center pb-9">
          <span className="badge">Openings</span>
        </div>

        {/* Top star */}
        <Image
          src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/star.png"
          alt="star"
          width={144}
          height={144}
          className="hidden md:block absolute top-26 right-10 lg:right-32 w-36"
        />

        {/* Main content */}
        <div className="md:w-2/3 mx-6 md:mx-auto rounded-4xl p-0.5 bg-linear-to-r from-cblue via-green-500 to-cblue">
          <div className="bg-black text-center p-12 rounded-4xl">
            <h2 className="heading2 mb-2">We&apos;re Sorry</h2>
            <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
              There are no openings as of now <br />
              Fill the form for an opportunity that may come by!
            </p>
          </div>
        </div>

        {/* Bottom star */}
        <Image
          src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/star.png"
          alt="star"
          width={136}
          height={136}
          className="hidden md:block absolute top-80 lg:top-72 left-20 lg:left-40 w-34"
        />
      </div>
    </section>
  );
}
