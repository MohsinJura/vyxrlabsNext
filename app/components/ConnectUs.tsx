"use client";

import Image from "next/image";
import LogoSlider from "./LogoSlider";

export default function ConnectUs() {
  return (
    <section className="bg-black">
      <div
        className="relative z-2 -mt-[90px] w-full min-h-[1450px] md:min-h-[1200px] bg-cover bg-center bg-no-repeat rounded-t-[33px] text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/bgg.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-between px-4 sm:px-6 py-16 text-center">
          {/* Badge */}
          <p className="badge mb-6">Connect now</p>

          {/* Title */}
          <div className="text-2xl md:text-5xl font-bold font-montserrat leading-none">
            Connect with Us Today for <em>Business</em> <br /> <em>Opportunities!</em>
          </div>

          {/* Boxes */}
          <div className="relative w-full h-[70%] my-12">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Ireland */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-20">
                <div className="relative w-[200px] h-[160px] bg-black/60 border-2 border-blue-500 rounded-xl p-3 flex flex-col items-center justify-between">
                  <p className="text-lg font-semibold">Ireland</p>
                  <p className="text-sm text-center leading-snug">
                    Mill rd Youghal-Lands
                    <br /> Youghal, Co. Cork, P36 X015
                  </p>
                  <div className="bg-cblue rounded-full px-3 py-1 text-sm font-medium">
                    +353 89 457 4060
                  </div>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/countrystars.png"
                    alt="Ireland Icon"
                    width={56}
                    height={56}
                    className="absolute top-[9rem] -left-9"
                  />
                </div>
              </div>

              {/* USA */}
              <div className="absolute top-1/2 left-[28%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[200px] h-[160px] bg-black/60 border-2 border-blue-500 rounded-xl p-3 flex flex-col items-center justify-between">
                  <p className="text-lg font-semibold">USA</p>
                  <p className="text-sm text-center leading-snug">
                    500 Terry
                    <br /> Francine Street
                    <br /> San Francisco, CA 94158
                  </p>
                  <div className="bg-cblue rounded-full px-3 py-1 text-sm font-medium">
                    +1 213-536-0623
                  </div>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/countrystars.png"
                    alt="USA Icon"
                    width={56}
                    height={56}
                    className="absolute -top-9 -left-9"
                  />
                </div>
              </div>

              {/* UAE */}
              <div className="absolute top-[60%] left-[68%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[200px] h-[160px] bg-black/60 border-2 border-blue-500 rounded-xl p-3 flex flex-col items-center justify-between">
                  <p className="text-lg font-semibold">UAE</p>
                  <p className="text-sm text-center leading-snug">
                    Al Mushrif,
                    <br /> Abu Dhabi, UAE
                  </p>
                  <div className="bg-cblue rounded-full px-3 py-1 text-sm font-medium">
                    +971 56 645 7591
                  </div>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/countrystars.png"
                    alt="UAE Icon"
                    width={56}
                    height={56}
                    className="absolute -top-9 -left-9"
                  />
                </div>
              </div>
            </div>

            {/* Mobile/Tablet layout */}
            <div className="flex flex-col md:hidden gap-6 items-center">
              {[
                {
                  title: "Ireland",
                  address: ["Mill rd Youghal-Lands", "Youghal, Co. Cork, P36 X015"],
                  phone: "+353 89 457 4060",
                },
                {
                  title: "USA",
                  address: ["500 Terry", "Francine Street", "San Francisco, CA 94158"],
                  phone: "+1 213-536-0623",
                },
                {
                  title: "UAE",
                  address: ["Al Mushrif,", "Abu Dhabi, UAE"],
                  phone: "+971 56 645 7591",
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className="w-[85%] max-w-xs bg-black/60 border-2 border-blue-500 rounded-xl p-3 flex flex-col items-center text-center"
                >
                  <p className="text-lg font-semibold mb-1">{loc.title}</p>
                  <p className="text-sm mb-2">{loc.address.join(" \n ")}</p>
                  <div className="bg-cblue rounded-full px-3 py-1 text-sm font-medium">
                    {loc.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Title */}
          <div className="heading1 text-2xl sm:text-3xl md:text-4xl">
            Contact us to get your <em>Business</em> to the top!
          </div>

          {/* Logo Slider */}
          <div className="w-full mt-6 md:mt-12">
            <LogoSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
