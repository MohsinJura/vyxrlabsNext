"use client";
import React from "react";
import Link from "next/link";

const StartWithUs = () => {
  return (
    <section className="w-full h-[600px] flex max-[1023px]:flex-col max-[1023px]:items-center max-[1023px]:h-auto max-[1023px]:py-10">
      
      {/* Left Part (Image) - Desktop */}
      <div
        className="w-1/2 flex items-center justify-end pr-10 
        max-[1023px]:hidden"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/swu0.png"
          alt="Showcase"
          className="h-[450px] object-contain"
        />
      </div>

      {/* Right Part (Content) */}
      <div
        className="w-1/2 flex flex-col justify-center items-start pl-10 
        max-[1023px]:w-full max-[1023px]:items-center max-[1023px]:text-center max-[1023px]:px-4"
      >
        {/* Badge */}
        <div className="badge mb-6 max-[1023px]:mb-4">
          Start with us now!
        </div>

        {/* Image (Mobile Only) */}
        <div className="hidden max-[1023px]:block mb-6">
          <img
            src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/swu0.png"
            alt="Showcase"
            className="h-[250px] object-contain mx-auto"
          />
        </div>

        {/* Heading */}
        <p
          className="text-3xl md:text-4xl font-montserrat font-black leading-tight mb-4 text-left 
          max-[1023px]:text-2xl max-[1023px]:text-center"
        >
          We don’t just create <br /> websites, we create pathways <br />
          <em>to success.</em>
        </p>

        {/* Description */}
        <p
          className="text-gray-700 text-[16px] font-inter max-w-[500px] text-left 
          max-[1023px]:text-sm max-[1023px]:text-left max-[1023px]:max-w-[90%]"
        >
          Every project is crafted with care, keeping engagement, growth, and your business vision at the heart of the process.<br />
          <br />1. You’ll work with skilled designers who bring real expertise to the table.
          <br />2. Instead of one-size-fits-all templates, you’ll explore multiple unique design directions.
          <br />3. Your website adapts beautifully to every device, ensuring seamless experience.
          <br />4. The process is fast, so your brand goes live without delay.
          <br />5. Most importantly, every solution is tailored to fit your goals and ambitions.
        </p>

        {/* CTA Button */}
        <Link
          href="/contacts"
          className="ctabtn flex items-center mt-5 gap-2 max-[1023px]:justify-center max-[1023px]:text-sm max-[1023px]:px-4 max-[1023px]:py-2"
        >
          <img
            src="https://static.wixstatic.com/media/0d9155_f5b7e5cc16534e6f987af648c2dc363f~mv2.png"
            alt="Audit"
            className="w-5 h-5 max-[1023px]:w-4 max-[1023px]:h-4"
          />
          Get a free audit
        </Link>
      </div>

    </section>
  );
};

export default StartWithUs;
