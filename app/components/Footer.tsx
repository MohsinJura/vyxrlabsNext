"use client"
import Link from "next/link"
import Image from "next/image"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

const footerHighlights = [
  {
    icon: "/fb1.png",
    title: "Lightning Fast Service!",
    desc: "Teams that deliver exceptional results with speed and precision — consistently exceeding expectations without sacrificing quality.",
  },
  {
    icon: "/fb2.png",
    title: "Client-First Champion!",
    desc: "Providing personalized solutions, proactive support, and an outstanding experience from start to finish.",
  },
  {
    icon: "/fb3.png",
    title: "Certified Excellence!",
    desc: "Demonstrating verified expertise and maintaining top-tier quality in every digital experience delivered.",
  },
]

const officeLocations = [
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
]

export default function Footer() {
  return (
    <footer
      className="
        bg-[url('/bgfooter.png')] bg-black bg-center bg-cover text-white overflow-hidden
        rounded-t-4xl py-10 px-2 md:px-16
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* ---------- Highlights Section ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-2 mt-4">
          {footerHighlights.map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-2 px-5 py-6 border border-gray-600/60
                rounded-xl bg-black/20 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02]
              "
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.icon}
                  alt={`Footer badge - ${item.title}`}
                  width={30}
                  height={30}
                  className="flex-shrink-0"
                />
                <h6 className="text-base md:text-xl font-semibold font-montserrat">
                  {item.title}
                </h6>
              </div>
              <p className="text-slate-200 text-sm md:text-base font-inter leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <hr className="divider mt-16 mb-12" />
        {/* ---------- Link Grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Important Links */}
          <div className="">
            <p className="font-bold mb-4 text-lg md:text-xl border-b-2 border-cblue/25 pb-1 md:w-2/3 font-montserrat">Important Links</p>
            <div className="flex flex-col gap-2 text-slate-200 text-sm md:text-base font-inter">
              <Link href="/" className="hover:text-cblue transition-colors">Home</Link>
              <Link href="/services" className="hover:text-cblue transition-colors">Services</Link>
              <Link href="/contacts" className="hover:text-cblue transition-colors">Contact Us</Link>
              <Link href="/abouts" className="hover:text-cblue transition-colors">About Us</Link>
              <Link href="/blogs" className="hover:text-cblue transition-colors">Blogs</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-extrabold mb-4 text-xl border-b-2 border-cblue/25 pb-1 max-w-2/3 font-montserrat">Services</p>
            <div className="flex flex-col gap-2 text-slate-200 text-sm md:text-base font-inter leading-relaxed">
              <Link href="/service/web" className="hover:text-cblue transition-colors">Web Design & Dev.</Link>
              <Link href="/service/seo" className="hover:text-cblue transition-colors">SEO Optimization</Link>
              <Link href="/service/ba" className="hover:text-cblue transition-colors">Business Automation</Link>
              <Link href="/service/co" className="hover:text-cblue transition-colors">Conversion Optimization</Link>
            </div>
          </div>

          {/* Industry */}
          <div>
            <p className="font-extrabold mb-4 text-xl border-b-2 border-cblue/25 pb-1 max-w-5/6 font-montserrat">Specialized Industry</p>
            <ul className="flex flex-col gap-2 text-slate-200 text-sm md:text-base font-inter leading-relaxed">
              <li>E-Commerce Stores</li>
              <li>Business Development</li>
              <li>Technology</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-extrabold mb-4 text-xl border-b-2 border-cblue/25 pb-1 font-montserrat">Contact</p>
            <div className="flex flex-col gap-2 text-slate-200 text-sm font-inter leading-relaxed">
              {officeLocations.map((office, i) => (
                <address key={i} className="not-italic">
                  <p className="flex items-start gap-2 mb-1">
                    <FaMapMarkerAlt className="text-cblue mt-1" />
                    <span>{office.location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-cblue" />
                    {office.phone}
                  </p>
                </address>
              ))}
            </div>
          </div>
        </div>

        <hr className="divider mt-16 mb-2" />
        {/* ---------- Bottom Section ---------- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 font-montserrat text-sm md:text-base">
          <Link href="/terms" className="hover:text-cblue transition-colors">
            Terms & Conditions
          </Link>
          <p>© 2025 VyxrLabs, All Rights Reserved.</p>
          <Link href="/privacy" className="hover:text-cblue transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* ---------- Logo + Tagline ---------- */}
        <div className="flex flex-col items-center gap-3 mt-6 text-center">
          <Image
            src="/logo.png"
            alt="VyxrLabs company logo"
            width={400}
            height={100}
            className="w-2/3 md:w-1/2 max-w-[500px]"
          />
          <p className="text-xl md:text-2xl font-semibold tracking-wide">
            Your Partner <em className="text-cblue not-italic">Forever.</em>
          </p>
        </div>
      </div>
    </footer>
  )
}
