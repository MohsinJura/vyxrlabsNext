"use client";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo8.png",
  "/logo9.png",
];

const LogoSlider = () => {
  return (
    <section
      className="max-w-7xl mx-auto w-full overflow-hidden bg-transparent py-6 select-none"
      aria-label="Logo slider section"
    >
      {/* Moving container */}
      <div className="flex w-max animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="shrink-0 w-44 h-auto flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Partner logo ${index % logos.length + 1}`}
              width={160}
              height={60}
              priority={index < logos.length} // preload first set
              className="max-h-14 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
