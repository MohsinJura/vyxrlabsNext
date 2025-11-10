"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import LogoSlider from "./LogoSlider";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-black bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/heroBG.jpg')" }}
    >
      <div className="max-w-screen mx-auto">
        {/* Floating icons */}
        <div className="hidden md:block absolute top-12 left-0 right-0 animate-float">
          <Image
            src="/heroIcons.png"
            alt="Floating icons"
            width={1600}
            height={400}
            priority
            className="mx-auto"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 md:max-w-[80%] max-w-full mx-auto px-3 py-12 md:py-18">
          <div className="flex flex-col items-center justify-evenly text-center">
            
            {/* ✅ Logo */}
            <div className="mb-4">
              <Image
                src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/Logo.png"
                alt="VyxrLabs Logo"
                width={300}
                height={100}
                priority
              />
            </div>

            {/* ✅ Reviews */}
            <div className="mb-6">
              <div className="flex items-center gap-3 text-lg">
                <span>500+ Client Reviews</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
              </div>
              <p className="text-lg font-light">
                All-In-One Digital Solutions Agency.
              </p>
            </div>

            {/* ✅ Heading */}
            <h1 className="text-lg md:text-4xl font-bold font-montserrat mb-3 leading-snug">
              Unleash your brand’s <em>potential</em>
              <br />
              and get results that <em>matter</em>
            </h1>

            {/* ✅ Platform Icons */}
            <div className="flex justify-center gap-3 mb-6">
              {[
                "https://static.wixstatic.com/media/0d9155_414cfae0bd7e41f4946ac64a9a884367~mv2.png",
                "https://static.wixstatic.com/media/0d9155_bb0127059ef4408d890f4511973749bf~mv2.png",
                "https://static.wixstatic.com/media/0d9155_28b30ab719354cf1b2fb11d39291832c~mv2.png",
                "https://static.wixstatic.com/media/0d9155_24cb5aa9f72d497b9475bdf6d129d5c2~mv2.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-14 h-14 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Platform ${i + 1}`}
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* ✅ Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 border border-gray-600 rounded-full px-4 py-2.5">
                <Image
                  src="https://static.wixstatic.com/media/0d9155_84d40c3738e54268b4dbde219a89979d~mv2.png"
                  alt="Credit card"
                  width={20}
                  height={20}
                />
                <span className="text-[11px] md:text-base">
                  $120,242,101 | Revenue driven for our clients
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-gray-600 rounded-full px-4 py-2.5">
                <Image
                  src="https://static.wixstatic.com/media/0d9155_e398f2494ebd4d0f8b345b27fa331fcb~mv2.png"
                  alt="Green tick"
                  width={20}
                  height={20}
                />
                <span>US-Based LLC</span>
              </div>
            </div>

            {/* ✅ CTA Button */}
            <Link
              href="/contacts"
              className="flex items-center gap-2 ctabtn"
            >
              <Image
                src="https://static.wixstatic.com/media/0d9155_f5b7e5cc16534e6f987af648c2dc363f~mv2.png"
                alt="Audit icon"
                width={20}
                height={20}
              />
              Get a free audit
            </Link>
          </div>

          {/* ✅ Logo Slider */}
          <div className="mt-6">
            <LogoSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
