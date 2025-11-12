"use client";
import { useState, useEffect, useRef } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const services = [
    {
      title: "Web Design and Development",
      description:
        "We craft custom Shopify stores tailored to your brand – designed for high-performance, premium user experiences that drive conversions.",
      urlink: "/service/web",
      image:
        "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1-1.png",
      projects: [
        { id: 1, image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1_1.png", plink: "/service/web" },
        { id: 2, image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1_2.png", plink: "/service/web" },
        { id: 3, image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os1_3.png", plink: "/service/web" },
      ],
    },
    {
      title: "Search Engine Optimization",
      description:
        "Implementing advanced Shopify SEO strategies to boost your store's visibility and attract the right audience.",
      urlink: "/service/seo",
      image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os2.png",
    },
    {
      title: "Business Automation",
      description:
        "Optimize operations with AI automation—streamline workflows, cut manual tasks, and boost efficiency.",
      urlink: "/service/ba",
      image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os3.png",
    },
    {
      title: "Conversion Optimization",
      description:
        "Boost conversion rates through data-driven strategies for sustainable growth.",
      urlink: "/service/co",
      image: "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/os4.png",
    },
  ];

  const [projectIndexes, setProjectIndexes] = useState(services.map(() => 0));

  const nextProject = (serviceIndex: number, length: number) => {
    setProjectIndexes((prev) =>
      prev.map((val, idx) =>
        idx === serviceIndex ? (val + 1) % length : val
      )
    );
  };

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 768);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index));
        }),
      { threshold: 0.5 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section className="bg-black text-white w-full text-center md:text-left">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="badge">Our Services</div>
        <p className="heading mb-14">
          Accelerate <em>your revenue</em> with our business solutions
        </p>

        {/* Desktop Layout */}
        {isDesktop ? (
          <div className="flex items-start justify-between relative">
            <div className="w-2/5 sticky top-52 h-screen">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="heading2">
                    {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <em>{service.title.split(" ").slice(-1)}</em>
                  </h2>
                  <div className="mt-1 h-1 bg-gradient-to-r from-blue-900 via-indigo-950 to-transparent"></div>
                  <p className="mt-4 text-sm text-gray-200">{service.description}</p>
                  <Link href={service.urlink} className="inline-block mt-4 text-cblue border-b border-cblue">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>

            <div className="w-3/5 px-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="relative h-screen flex items-center justify-center"
                >
                  {service.projects ? (
                    <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
                      <Link href={service.projects[projectIndexes[index]].plink}>
                        <Image
                          src={service.projects[projectIndexes[index]].image}
                          alt={service.title}
                          width={900}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </Link>
                      <button
                        aria-label="Next project"
                        onClick={() => nextProject(index, service.projects.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cblue"
                      >
                        <BsArrowRightCircle className="w-10 h-10 hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  ) : (
                    <Link href={service.urlink}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={600}
                        className="object-contain rounded-lg shadow-md"
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Mobile layout here...</p>
        )}

        <div className="flex justify-center mt-12">
          <Link href="/contacts" className="ctabtn">
            <Image
              src="https://static.wixstatic.com/media/0d9155_f5b7e5cc16534e6f987af648c2dc363f~mv2.png"
              alt="Free SEO Audit Icon"
              width={24}
              height={24}
            />
            Get a free audit
          </Link>
        </div>
      </div>
    </section>
  );
}
