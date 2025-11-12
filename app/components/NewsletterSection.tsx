"use client";

import { BsArrowRight } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Subscribed email:", email);
    // 👉 You can send this to /api/newsletter or any email API service (Resend, Mailchimp, etc.)
  };

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-6 text-center">
        {/* Intro Text */}
        <p className="font-inter md:text-2xl max-w-5xl mx-auto text-gray-700">
          Leave outdated enterprises behind — step into a smoother, smarter future.{" "}
          <br className="hidden md:block" />
          We lead you from design to innovation, shaping your path from idea to success.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 bg-gray-200 rounded-full hover:bg-cblue hover:text-white transition-colors"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 bg-gray-200 rounded-full hover:bg-cblue hover:text-white transition-colors"
          >
            <FaLinkedinIn size={32} />
          </a>
        </div>

        {/* Subscribe Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6"
        >
          <div className="w-full md:w-[40%] flex items-center border-2 border-gray-400 rounded-full overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-cblue">
            <span className="pl-3 text-gray-600">
              <HiOutlineMail size={24} />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              required
              className="flex-1 px-3 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
            />
          </div>

          <button type="submit"
            className="ctabtn" style={{borderRadius: 50}}
          >
            Submit <BsArrowRight size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
