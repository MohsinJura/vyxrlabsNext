"use client";

import Image from "next/image";
import Link from "next/link";
import ConnectBar from "./ConnectBar";
import { PiArrowRightBold } from "react-icons/pi";

const cardData = [
  {
    title: "Enhanced",
    subtitle: "CRO",
    description:
      "We transform visitors into loyal customers. Using data-driven optimization techniques, we create seamless shopping experiences that drive higher conversions.",
    image: "/Phone.png",
    buttonLink: "/ContactUs",
    backgroundImageUrl: "/oe1.png",
    altText: "Smartphone displaying enhanced CRO optimization strategy",
  },
  {
    title: "Data Driven",
    subtitle: "Growth",
    description:
      "Turn analytics into strategy. Our experts analyze customer behavior to refine your store’s performance, maximize engagement, and improve decision-making.",
    image: "/phonehand.png",
    buttonLink: "ContactUs",
    backgroundImageUrl: "/oe2.png",
    altText: "Hand holding phone showing data-driven business growth analytics",
  },
  {
    title: "Maximized",
    subtitle: "Profits",
    description:
      "Scale your business with precision. We optimize every aspect of your online store to strengthen customer relationships and increase revenue.",
    image: "/laptop.png",
    buttonLink: "ContactUs",
    backgroundImageUrl: "/oe3.png",
    altText: "Laptop screen visualizing eCommerce profit optimization dashboard",
  },
];

export default function OurExpertise() {
  return (
    <section
      className="-mt-6 rounded-2xl desktops:rounded-4xl bg-cover bg-center bg-no-repeat pb-12"
      style={{
        backgroundImage: "url('/bg-oe.png')",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center max-w-[1500px] min-[1024px]:w-[85%] mx-auto pt-12 desktops:pt-22 px-3">
        
        {/* Heading */}
        <div className="w-full desktops:text-left text-center max-[360px]:px-0 px-5">
          <div className="badge mb-3">Our Expertise</div>
          <p className="text-3xl desktop:text-5xl font-bold font-montserrat desktop:leading-13">
            What we do: <br /> Best Business <em>Solutions.</em>
          </p>
        </div>

        {/* Cards */}
        <div>
          <ul className="list-none grid grid-cols-1 gap-0 mt-0">
            {cardData.map((card, index) => (
              <li key={index} className="sticky top-0" style={{ paddingTop: `${(index + 1) * 3}em` }}>
                <div
                  className={`w-full desktop:min-h-[430px] flex flex-col desktops:flex-row justify-between items-center rounded-4xl p-6 gap-6 bg-cover bg-center ${
                    index < 2 ? "mb-14" : "m-0"
                  }`}
                  style={{ backgroundImage: `url(${card.backgroundImageUrl})` }}
                >
                  {/* Left Content */}
                  <div className="desktops:w-1/2 h-full flex flex-col desktop:justify-evenly gap-8 text-white">
                    <h2 className="heading2">
                      {card.title} <em style={{color: "white"}}>{card.subtitle}</em>
                    </h2>
                    <p className="text-xl md:text-lg desktop:text-[28px] font-light">
                      {card.description}
                    </p>

                    <Link href={card.buttonLink} className="desktops:w-full">
                      <div className="px-6 py-3 flex gap-2 items-center rounded-lg border-2 border-gray-300/40 font-inter font-bold bg-gradient-to-b from-stone-300/10 to-slate-600/20">
                        <span>open details</span>
                        <PiArrowRightBold />
                      </div>
                    </Link>
                  </div>

                  {/* Right Image */}
                  <div className="desktops:w-1/2 desktops:h-full flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.altText}
                      width={320}
                      height={320}
                      className="h-44 w-auto desktops:h-80 object-cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ConnectBar */}
      <div className="w-full">
        <ConnectBar />
      </div>

    </section>
  );
}
