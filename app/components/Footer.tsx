"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const footerHighlights = [
  {
    icon: "/fb1.png",
    title: "Lightning fast service!",
    desc: "Teams who deliver exceptional results with speed and efficiency, consistently exceeding expectations without compromising quality.",
  },
  {
    icon: "/fb2.png",
    title: "Client-First Champion!",
    desc: "Delivering personalized solutions, proactive support, and an outstanding customer experience from start to finish.",
  },
  {
    icon: "/fb3.png",
    title: "Certified Excellence!",
    desc: "Teams who demonstrate verified expertise and consistently uphold the highest standards of quality and performance in every digital experience they deliver.",
  },
];

const Footer = () => {
  const offices = [
    {
      location: "500 Terry Francine Street, San Francisco",
      phone: "(+1) 213 536 0623",
    },
    {
      location: "Mill Rd, Youghal, Co. Cork, Ireland",
      phone: "(+353) 089 457 4060",
    },
    {
      location: "Al Mushrif, Abu Dhabi, UAE",
      phone: "(+971) 566 457 591",
    },
  ];

  return (
    <footer
      className="
        bg-[url('/bgfooter.png')] bg-center bg-cover text-white overflow-hidden
        rounded-4xl max-[768px]:rounded-t-2xl rounded-b-none
        py-10 mobiles:px-6 desktops:px-16
      "
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-1">

        {/* Highlights Section */}
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-8 desktops:gap-12 px-2">
          {footerHighlights.map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-2 px-4 py-5 border border-gray-500
                rounded-xl bg-black/10 backdrop-blur-sm transition
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={`Footer badge - ${item.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h6 className="text-xl font-montserrat font-semibold">{item.title}</h6>
              </div>
              <p className="text-gray-300 text-base desktops:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <hr className="divider mt-16 mb-9" />

        {/* Link Grid */}
        <div className="grid grid-cols-1 desktops:grid-cols-4 gap-10 text-center desktops:text-left">
          {/* Important Links */}
          <div>
            <p className="font-montserrat font-bold mb-3 text-lg">Important Links</p>
            <div className="flex flex-col gap-1 text-slate-200 font-light">
              <Link href="/" className="hover:text-cblue">Home</Link>
              <Link href="/services" className="hover:text-cblue">Services</Link>
              <Link href="/contacts" className="hover:text-cblue">Contact Us</Link>
              <Link href="/abouts" className="hover:text-cblue">About Us</Link>
              <Link href="/blogs" className="hover:text-cblue">Blogs</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-montserrat font-bold mb-3 text-lg">Services</p>
            <div className="flex flex-col gap-2 text-slate-200 font-light">
              <Link href="/service/web" className="hover:text-cblue">Web Design & Dev.</Link>
              <Link href="/service/seo" className="hover:text-cblue">SEO Optimization</Link>
              <Link href="/service/ba" className="hover:text-cblue">Business Automation</Link>
              <Link href="/service/co" className="hover:text-cblue">Conversion Optimization</Link>
            </div>
          </div>

          {/* Industry */}
          <div>
            <p className="font-montserrat font-bold mb-3 text-lg">Specialized Industry</p>
            <ul className="flex flex-col gap-2 text-slate-200 font-light">
              <li>E-Commerce Stores</li>
              <li>Business Development</li>
              <li>Technology</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-montserrat font-bold mb-3 text-lg">Contact</p>
            <div className="flex flex-col gap-4 text-slate-200 text-sm">
              {offices.map((office, i) => (
                <address key={i} className="not-italic leading-relaxed">
                  <FaMapMarkerAlt className="inline mr-2 text-cblue" />
                  {office.location}
                  <br />
                  <FaPhoneAlt className="inline mr-2 text-cblue" />
                  {office.phone}
                </address>
              ))}
            </div>
          </div>
        </div>

        <hr className="divider mt-14 mb-1" />
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 font-playfair mb-6">
          <Link href="/terms" className="hover:text-cblue transition-colors ">
            Terms & Conditions
          </Link>
          <p className=" font-montserrat text-slate-200">© 2025 VyxrLabs, All Rights Reserved.</p>
          <Link href="/privacy" className="hover:text-cblue transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Logo + Tagline */}
        <div className="flex flex-col items-center gap-3 mt-6 text-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/Logo.png"
            alt="VyxrLabs company logo"
            width={400}
            height={100}
            className="w-2/3 md:w-1/2 max-w-[500px]"
          />
          <p className="text-xl md:text-3xl font-semibold tracking-wide">
            Your Partner <em>Forever.</em>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
