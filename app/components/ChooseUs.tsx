"use client";

import Image from "next/image";

const ChooseUs = () => {
  return (
    <section>
      <div className="w-full md:max-w-[80%] mx-auto pb-4 md:p-16 text-center">
        <div className="p-6">
          {/* Badge */}
          <div className="badge max-[640px]:text-xs max-[640px]:px-2 max-[640px]:py-0.5">
            Why Choose Us?
          </div>

          {/* Heading */}
          <p className="heading max-[640px]:text-xl max-[640px]:leading-snug">
            Smart solutions that <em>spark conversations,</em> automate and
            powerful <em>business growth.</em>
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto my-10 w-[90%] max-w-6xl h-[450px] flex flex-col items-center justify-start p-6 rounded-xl border-[0.5px] border-black bg-gradient-to-br from-[#F7F1FF] to-[#FFFFFF] max-[640px]:h-auto max-[640px]:p-4">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center max-[640px]:text-xl">
            Campaign <em>transparency</em>
          </h2>

          {/* Description */}
          <p className="mt-10 text-center max-w-[90%] md:max-w-[70%] text-[17.6px] md:text-[20px] font-semibold max-[640px]:mt-4 max-[640px]:text-sm max-[640px]:w-[95%]">
            We deliver smart solutions in growth, automation, SEO and marketing
            to unlock your business’s <em>full potential.</em>
          </p>

          {/* Images container */}
          <div className="mt-6 w-full flex justify-center gap-3 max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-4">
            <div className="w-[49%] max-[640px]:w-[80%] max-h-[180px] relative">
              <Image
                src="/graph0.png"
                alt="Graph Blue"
                className="w-full object-contain"
                width={100} height={100}
                sizes="(max-width: 640px) 80vw, 49vw"
                priority
              />
            </div>

            <div className="w-[49%] max-[640px]:w-[80%] max-h-[180px] relative">
              <Image
                src="/graph1.png"
                alt="Graph Blue 2"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80vw, 49vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
