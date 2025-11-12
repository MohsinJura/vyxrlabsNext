"use client";

import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const faqData = [
  {
    q: "How can I start a project with Vyxr Labs?",
    a: "Simply reach out via our contact form, share your project requirements, and our team will get in touch to guide you through the next steps.",
  },
  {
    q: "How is Vyxr Labs different?",
    a: "We combine automation, branding, and cutting-edge strategies to deliver results that are tailored, efficient, and sustainable for your business growth.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines vary based on complexity, but most projects are delivered within 4–8 weeks. We always provide a clear roadmap and regular updates.",
  },
  {
    q: "What design tools do you use?",
    a: "Our team works with Figma, Adobe Creative Suite, Webflow, and Framer to ensure modern, pixel-perfect, and scalable designs.",
  },
  {
    q: "Is Vyxr Labs a start-up?",
    a: "Yes, we operate like a lean start-up—agile, fast-moving, and client-focused—while leveraging industry expertise to deliver enterprise-level solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto my-20 px-4 md:w-[80%] lg:w-full">
      {/* Header */}
      <div className="text-center">
        <div className="badge">Frequently Asked Questions</div>
        <p className="text-2xl desktops:text-[44px] font-bold font-montserrat mt-5">
          Everything you need to{" "}
          <em className="text-blue-600">know.</em>
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-6 md:mt-10 space-y-7">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="border-b border-gray-300 pb-2 cursor-pointer transition-colors duration-200 hover:text-cblue"
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h5 className="font-montserrat text-lg md:text-2xl">
                {item.q}
              </h5>
              <BsArrowDown
                className={`text-cblue text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="max-w-[90%] text-sm md:text-lg font-inter text-gray-700 leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
