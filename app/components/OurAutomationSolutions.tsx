"use client";

import React from "react";
import Link from "next/link";
import ConnectBar from "./ConnectBar";

const OurAutomationSolutions: React.FC = () => {
  return (
    <section className="md:-mt-16">
      <div className="max-w-7xl mx-auto lg:pt-26 py-12 px-4">
        {/* Head */}
        <div className="text-center lg:mb-12 mb-4">
          <div className="badge">Our Automation Solutions</div>
          <h2 className="heading">
            Transform the way your <em>Business Operates!</em>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {/* top side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
            <Link href="/contacts">
  <img
    src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas1.png"
    alt="Contact us to explore business automation solutions"
    className="hidden lg:block object-fit w-full h-80"
  />
  <img
    src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas21.png"
    alt="Mobile view of automation service consultation banner"
    className="lg:hidden object-cover"
  />
</Link>

            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas2.png"
              alt="Workflow automation and efficiency enhancement visual"
              className="hidden lg:block object-fit h-80"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas11.png"
              alt="Mobile layout showing business process automation"
              className="lg:hidden object-cover"
            />
          </div>

          {/* bottom side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas3.png"
              alt="Automation dashboard displaying key metrics"
              className="hidden lg:block object-fit w-sm h-80"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas31.png"
              alt="Mobile dashboard example of automation tool"
              className="lg:hidden object-cover"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/oas4.png"
              alt="Team implementing automated workflows for productivity"
              className="hidden lg:block object-fit w-4xl h-80"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it11.png"
              alt="Mobile illustration of intelligent automation system"
              className="lg:hidden object-cover"
            />
          </div>
        </div>

        <ConnectBar />
      </div>
    </section>
  );
};

export default OurAutomationSolutions;
