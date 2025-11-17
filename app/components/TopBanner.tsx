"use client";
import React from "react";

interface TopBannerProps {
  bgImage: string;
  breadcrumb?: string;
  logo?: string;
  title?: React.ReactNode;
  description?: string;
  txtclr?: string;
}

const TopBanner: React.FC<TopBannerProps> = ({
  bgImage,
  breadcrumb,
  logo,
  title,
  description,
  txtclr = "#f2f2f2",
}) => {
  return (
    <section
      className="w-full flex items-start justify-center h-[600px] pt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="md:w-[75%] flex flex-col items-center text-center p-3"
        style={{ color: txtclr }}
      >
        {/* Logo */}
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-32 md:w-60 max-[640px]:w-30"
          />
        )}

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="w-max border border-gray-600 text-[0.6rem] px-1.5 py-0.5 rounded-full whitespace-nowrap mt-[10px] text-center max-[640px]:text-[0.8rem]">
            Home &gt; {breadcrumb}
          </div>
        )}

        {/* Title */}
        {title && (
          <h1 className="text-[2.25rem] md:text-[2.5rem] font-bold font-montserrat mt-[10px] max-[640px]:text-3xl">
            {title}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-center font-inter mt-[10px] max-[640px]:text-[0.8rem]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default TopBanner;
