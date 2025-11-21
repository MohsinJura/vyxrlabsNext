"use client";
import { useState, useEffect, useRef } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

// Define cblue and heading2 styles for consistency
// In a real project, these would be defined in a CSS file or Tailwind config.
// For this example, we'll use inline classes like text-indigo-400 and text-5xl font-extrabold.

export default function OurServices() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [projectIndexes, setProjectIndexes] = useState([0, 0, 0, 0]); // Start at index 0 for all

  const services = [
    {
      title: "Web Design and Development",
      description:
        "We craft custom Shopify stores tailored to your brand – designed for high-performance, premium user experiences that drive conversions.",
      urlink: "/Service/WebDesign",
      image:
        "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1-1.png",
      projects: [
        { id: 1, image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1_1.png", plink: "/Service/WebDesign" },
        { id: 2, image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1_2.png", plink: "//Service/WebDesign" },
        { id: 3, image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1_3.png", plink: "//Service/WebDesign" },
      ],
    },
    {
      title: "Search Engine Optimization",
      description:
        "Implementing advanced Shopify SEO strategies to boost your store's visibility and attract the right audience.",
      urlink: "/Service/SEO",
      image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os2.png",
    },
    {
      title: "Business Automation",
      description:
        "Optimize operations with AI automation—streamline workflows, cut manual tasks, and boost efficiency.",
      urlink: "/Service/BussinesAutomation",
      image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os3.png",
    },
    {
      title: "Conversion Optimization",
      description:
        "Boost conversion rates through data-driven strategies for sustainable growth.",
      urlink: "/Service/CRA",
      image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os4.png",
    },
  ];

  // Helper function to handle project/image transition for the first block
  const nextProject = (serviceIndex: number, length: number) => {
    setProjectIndexes((prev) =>
      prev.map((val, idx) =>
        idx === serviceIndex ? (val + 1) % length : val
      )
    );
  };

  // Check screen size for desktop/mobile view
  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 1024); // Increased to 'lg' breakpoint for a better desktop experience
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Removed IntersectionObserver logic as sticky sidebar is removed

  return (
    <section className="bg-black text-white w-full text-center lg:text-left py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center lg:text-left mb-16">
          <div className="badge mb-3">
            Our Services
          </div>
          <p className="text-3xl md:text-5xl font-montserrat font-extrabold max-w-5xl">
            Accelerate <em className="text-indigo-400">your revenue</em> with our business solutions
          </p>
        </div>
        
        {/* Desktop Layout - Vertical Blocks */}
        {isDesktop ? (
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between gap-16 py-10 border-b border-gray-800 transition-all duration-700 ease-in-out transform hover:bg-gray-950/50 rounded-lg p-6`}
                // Apply a simple transition class for a "vertical transition" feel when scrolling
              >
                {/* Left Side: Text Box */}
                <div className="w-1/2 p-6">
                  <h2 className="text-5xl font-extrabold mb-4">
                    {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <em className="text-indigo-400">{service.title.split(" ").slice(-1)}</em>
                  </h2>
                  <div className="mt-1 h-1 w-20 bg-indigo-500 mb-6"></div>
                  <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.urlink} className="inline-flex items-center mt-6 text-indigo-400 font-semibold text-lg hover:text-indigo-300 transition-colors">
                    Learn More 
                    <BsArrowRightCircle className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Right Side: Image/Carousel */}
                <div className="w-1/2 max-w-2xl relative rounded-xl overflow-hidden shadow-2xl">
                  {/* First Block: Smooth Horizontal Image Transition */}
                  {index === 0 && service.projects ? (
                    <div className="relative w-full overflow-hidden">
                      <div 
                        className="flex transition-transform duration-700 ease-in-out" 
                        style={{ transform: `translateX(-${projectIndexes[index] * 100}%)` }}
                      >
                        {service.projects.map((project) => (
                          <div key={project.id} className="min-w-full">
                            <Link href={project.plink}>
                              <Image
                                src={project.image}
                                alt={service.title}
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover"
                              />
                            </Link>
                          </div>
                        ))}
                      </div>

                      {/* Navigation Buttons for Carousel */}
                      <button
                        aria-label="Previous project"
                        onClick={() => nextProject(index, service.projects.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-indigo-400 transition-transform p-2 bg-black/30 rounded-full"
                      >
                        {/* Use a left arrow icon for 'next' to loop through images */}
                        <BsArrowRightCircle className="w-8 h-8 rotate-180" />
                      </button>
                      <button
                        aria-label="Next project"
                        onClick={() => nextProject(index, service.projects.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-indigo-400 transition-transform p-2 bg-black/30 rounded-full"
                      >
                        <BsArrowRightCircle className="w-8 h-8" />
                      </button>

                      {/* Indicators */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {service.projects.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              projectIndexes[index] === i ? 'bg-indigo-400 w-6' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Other Blocks: Static Image */
                    <Link href={service.urlink}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={1200}
                        height={600}
                        className="object-cover w-full h-auto rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Mobile Layout */
          <p className="text-gray-400 text-center py-10">
            Switch to a desktop/larger screen to see the full, improved layout.
            <br />
            (A mobile-friendly version would require adapting the block structure for smaller screens).
          </p>
        )}

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <Link href="/contacts" className="ctabtn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full flex items-center shadow-lg transition-colors">
            <Image
              src="https://static.wixstatic.com/media/0d9155_f5b7e5cc16534e6f987af648c2dc363f~mv2.png"
              alt="Free SEO Audit Icon"
              width={24}
              height={24}
              className="mr-3"
            />
            Get a free audit
          </Link>
        </div>
      </div>
    </section>
  );
}