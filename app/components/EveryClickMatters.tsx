import React from "react";
import Link from "next/link";
import ConnectBar from "./ConnectBar";

const EveryClickMatters = () => {
  return (
    <section className="md:-mt-16">
      <div className="max-w-7xl mx-auto lg:pt-26 py-12 px-4">
        {/* Head */}
        <div className="text-center mb-4 lg:mb-12">
          <div className="badge">Every Click Matters</div>
          <h2 className="heading">
            Maximize Every <em>Click!</em> Convert, <em>Grow!</em>
          </h2>
        </div>

        {/* Image Grid */}
        <div className="w-full flex flex-col gap-4">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/ecm1.png"
              alt="Analytics representation"
              loading="lazy"
              className="object-fit h-80 w-auto"
            />

            <Link href="/contacts" aria-label="Contact us to grow your business">
              <div>
                <img
                  src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/ecm2.png"
                  alt="Conversion success illustration"
                  loading="lazy"
                  className="hidden lg:block object-fit h-80 w-auto"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/ecm21.png"
                  alt="Conversion success mobile version"
                  loading="lazy"
                  className="lg:hidden object-fit w-full"
                />
              </div>
            </Link>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/ecm3.png"
              alt="Marketing growth visualization"
              loading="lazy"
              className="hidden lg:block object-fit h-80 lg:w-[40rem] xl:w-full"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it11.png"
              alt="Marketing mobile version"
              loading="lazy"
              className="lg:hidden object-fit w-full"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/ecm4.png"
              alt="Customer engagement graphic"
              loading="lazy"
              className="object-fit h-80 lg:w-[340px]"
            />
          </div>
        </div>
        <ConnectBar />
      </div>
    </section>
  );
};

export default EveryClickMatters;
