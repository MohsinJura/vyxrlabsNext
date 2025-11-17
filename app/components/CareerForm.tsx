"use client";
import { Book, BookA, BookAIcon, BookCheck, BookCopy, BookCopyIcon, BookDashed, BookIcon, BookImage, BookTextIcon } from "lucide-react";
import Image from "next/image";

interface CareerFormProps {
  title: string;
  head1: string;
  head2: string;
}

export default function CareerForm({ title, head1, head2 }: CareerFormProps) {
  return (
    <section className="relative z-2 -mt-[270px] max-md:-mt-[180px]">
      <div className="pt-5 pb-32 text-center">
          {/* Top Heading */}
          <div className="w-7xl mx-auto text-center leading-snug mb-20">
            <p className="badge">{title}</p>
            <p className="heading1 my-3">
              {head1} <em>{head2}</em>
            </p>
          </div>

        <form
          aria-label="Career form"
          className="w-[90%] md:w-2/3 max-w-[1200px] mx-auto bg-[#EDF7FF] rounded-2xl shadow-lg p-8 md:p-16"
          action="https://formspree.io/f/mrblzyap"
          method="POST"
        >
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block mb-1 font-semibold text-left text-gray-800">
                Full Name
              </label>
              <input
                id="full_name"
                type="text"
                name="full_name"
                placeholder="Please enter your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-left text-gray-800">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Please enter your email address"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold text-left text-gray-800">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Please enter your phone number"
                pattern="[0-9]{10,15}"
                title="Enter 10 to 15 digits"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
              />
            </div>

            {/* Expertise */}
            <div>
              <label htmlFor="expertise" className="block mb-1 font-semibold text-left text-gray-800">
                Your Expertise
              </label>
              <input
                id="expertise"
                type="text"
                name="expertise"
                placeholder="Please enter what you specialize in"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
              />
            </div>

            {/* About */}
            <div>
              <label htmlFor="about" className="block mb-1 font-semibold text-left text-gray-800">
                About Yourself
              </label>
              <textarea
                id="about"
                name="about"
                placeholder="Information about yourself, Age, Employment status, Student..."
                rows={6}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500 resize-y"
              ></textarea>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col items-start justify-center gap-4 text-left font-bold font-inter">
              <label className="flex items-center gap-3 text-gray-700 text-sm">
                <input type="checkbox" name="confirm_info" required className="w-6 h-4 accent-blue-600" />
                <span>I confirm that the information provided above is accurate and complete.</span>
              </label>
              <label className="flex items-center gap-3 text-gray-700 text-sm">
                <input type="checkbox" name="agree_terms" required className="w-6 h-4 accent-blue-600" />
                <span>I agree to send my information.</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="mt-4 ctabtn flex items-center gap-2">
            <BookTextIcon />
            Submit my details →
          </button>
        </form>
      </div>

      {/* Background */}
      <div className="absolute top-[270px] left-0 w-full h-[60vh] md:h-[837px] bg-[#D5EAF9] -z-10"></div>
    </section>
  );
}
