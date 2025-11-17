"use client";
import React from "react";

const logos: string[] = [
  "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/b1.png",
  "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/b2.png",
  "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/b3.png",
  "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/b4.png",
  "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/b5.png",
];

interface BannerProps {
  
  bgImage: string;
  breadcrumb?: string;
  logo?: string;
  title1?: React.ReactNode;
  title2?: React.ReactNode;
  title3?: React.ReactNode;
  title4?: React.ReactNode;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({
  bgImage,
  breadcrumb,
  logo,
  title1,
  title2,
  title3,
  title4,
  description,
}) => {
  return (
    <section
      className="w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full overflow-hidden flex flex-col items-center text-white text-center p-3 md:p-9 mt-22">
        
        {/* Logo */}
        {logo && <img src={logo} alt="Company logo" className="w-72" />}

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="bg-gray-900 text-[9px] py-1 px-3 border border-gray-700 rounded-full mt-4 whitespace-nowrap">
            Home &gt; Services &gt; {breadcrumb}
          </div>
        )}

        <h1 className="text-[1.4rem] lg:text-[3rem] font-bold font-montserrat mt-[10px] leading-tight text-center">
          <span>
            {title1}
            <em>{title2}</em>
          </span>
          <br />
          <span>
            {title3}
            <em>{title4}</em>
          </span>
        </h1>

        {/* Description */}
        {description && (
          <p className="md:w-3xl mx-auto px-4 text-xs md:text-md font-inter mt-5">
            {description}
          </p>
        )}

        {/* Sliding Logos */}
        <div className="hidden md:flex w-full overflow-hidden pt-9">
          <div className="flex animate-slide gap-6">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-end last:justify-start odd:justify-start h-44 w-60 md:h-56 md:w-80"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
