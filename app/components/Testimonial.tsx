"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Jesse Rooney from ",
    company: "Black Swan Refunds.",
    video:
      "https://video.wixstatic.com/video/0d9155_4cd1ef1f917b4732a4a9fc5d39c15031/480p/mp4/file.mp4",
    text: "I've had nothing but positive things to say about Vyxr Labs. Phenomenal at helping us bring an idea back to life and overcoming challenges we weren’t aware of. They just took care of us. Fantastic communication, great people to work with — highly recommended!",
    stars: 5,
  },
  {
    id: 2,
    name: "Ileana M",
    company: "Me2Beauty",
    video:
      "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/vedios/me2beauty.mp4",
    text: "Wonderful experience working with Vyxr Labs on my website. They optimized the customer experience, understood my industry, and collaborated closely on design. Big thanks to them!",
    stars: 4,
  },
  {
    id: 3,
    name: "Mathew Wainwright from",
    company: "Plentia Capital",
    video:
      "https://video.wixstatic.com/video/0d9155_9f0ba9d62bf74e07933437ad5c900cef/360p/mp4/file.mp4",
    text: "Absolute pleasure. Vyxr Labs is reliable, responsive, and timely. They consistently came up with smart solutions that boosted our productivity. Thanks a lot, it’s been great!",
    stars: 5,
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const prevTestimonial = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextTestimonial = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const current = testimonials[active];

  return (
    <section className="max-w-[1540px] mx-auto text-center min-h-[650px] px-4 py-8">
      {/* Header */}
      <div className="md:mb-10">
        <div className="badge">Client Testimonials</div>
        <p className="heading max-[640px]:text-xl max-[640px]:leading-snug">
          Trusted by <em>clients,</em> <br /> recommended with{" "}
          <em>confidence.</em>
        </p>
      </div>

      {/* Slider */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        {/* ✅ Desktop/Tablet Arrows */}
        <div className="hidden mobiles:flex w-full items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 md:w-12 cursor-pointer hover:scale-110 transition"
          >
            <BsArrowLeftCircle className="text-cblue text-4xl md:text-5xl" />
          </button>

          <div
            className="
              w-full max-w-4xl flex flex-col md:flex-row items-center gap-6 
              bg-white border border-gray-200 rounded-2xl md:p-6 shadow-md 
              transition-all duration-500 max-[640px]:p-3
            "
          >
            {/* ✅ Video */}
            <div className="w-full md:w-[320px] md:h-[320px] overflow-hidden rounded-xl">
              <video
                src={current.video}
                controls
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* ✅ Text Area */}
            <div className="flex flex-col h-full justify-between px-2 md:px-9 text-center md:text-left md:max-w-xl">
              <div className="relative w-12 h-12 my-2 pb-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/col.png"
                  alt="Quotation mark"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>

              <p className="text-xs md:text-lg lg:text-xl md:max-w-md max-[640px]:leading-relaxed">
                {current.text}
              </p>

              <div className="w-full flex flex-col md:flex-row items-center gap-4 font-bold font-inter text-base py-4 max-[640px]:text-sm">
                <div>
                  {current.name}
                  <span className="italic capitalize underline text-cblue ml-1">
                    {current.company}
                  </span>
                </div>
                <span className="text-2xl text-yellow-400">
                  {"★".repeat(current.stars)}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 md:w-12 cursor-pointer hover:scale-110 transition"
          >
            <BsArrowRightCircle className="text-cblue text-4xl md:text-5xl" />
          </button>
        </div>

        {/* ✅ Mobile Version */}
        <div
          className="
            mobiles:flex desktops:hidden flex-col items-center gap-5 
            bg-white border border-gray-200 rounded-2xl p-4 shadow-md 
            transition-all duration-500
          "
        >
          <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
            <video
              src={current.video}
              controls
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm leading-relaxed px-2 pt-3 pb-6">
            {current.text}
          </p>

          <div className="w-full space-x-8 gap-1 font-inter font-semibold">
            {current.name} <em>{current.company}</em>{" "}
            <span className="text-xl text-yellow-400">
              {"★".repeat(current.stars)}
            </span>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-7">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? "bg-cblue scale-110" : "bg-gray-400/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
