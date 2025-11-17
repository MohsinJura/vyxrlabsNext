"use client";
import Image from "next/image";

interface BannerProps {
  bgImage: string;
  breadcrumb?: string;
  logo?: string;
  title?: string;
  description?: string;
  txtclr?: string;
}

export default function Banner({
  bgImage,
  breadcrumb,
  logo,
  title,
  description,
  txtclr = "#f2f2f2",
}: BannerProps) {
  return (
    <section
      role="banner"
      aria-label={title || "Banner"}
      className="w-full flex items-start justify-center h-[600px] pt-14 bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="md:w-[75%] flex flex-col items-center text-center p-3"
        style={{ color: txtclr }}
      >
        {/* Logo */}
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            width={240}
            height={120}
            className="w-32 md:w-60 object-contain"
            priority
          />
        )}

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="border border-gray-600 text-[0.75rem] px-2 py-1 rounded-full mt-3">
            Home &gt; {breadcrumb} 
          </div>
        )}

        {/* Title */}
        {title && (
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat mt-4">
            {title} <em>Vyxrlabs</em>
          </h1>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base font-inter mt-3 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
