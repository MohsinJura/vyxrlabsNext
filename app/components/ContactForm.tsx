
"use client";

import { BiCheckCircle } from "react-icons/bi";
import { BookText } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="  bg-[#C7CEC8] px-4">
      <div className="relative z-20 -mt-80">
        <div className=" max-w-7xl md:w-2/3 mx-auto bg-white rounded-2xl py-8 px-4 md:p-16 text-center">
          {/* Top Heading */}
          <div className="text-center leading-snug mb-6">
              <p className="badge mb-3">Contact Info</p>
              <p className="text-[25px] md:text-[52px] font-bold leading-13 font-montserrat mb-12">
                  Tell us more about your project and what you{" "}
                  <em style={{ color: "brown" }}>aim to achieve.</em>
              </p>
          </div>

          {/* Main Heading */}
          <p className="text-3xl font-inter font-semibold my-6">Your <span className="text-[brown]">Details</span></p>

          <form className=""
            action="https://formspree.io/f/mrblzyap" method="post"
          >
            {/* Grid Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-6">
              {[
                { id: "first_name", label: "First Name", type: "text" },
                { id: "last_name", label: "Last Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                {
                  id: "phone",
                  label: "Phone Number",
                  type: "tel",
                  pattern: "[0-9]{10,15}",
                  title: "Enter 10 to 15 digits",
                },
                { id: "company", label: "Company Name", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-1 font-semibold text-left text-gray-800"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={`Please enter your ${field.label.toLowerCase()}`}
                    required
                    pattern={field.pattern}
                    title={field.title}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
                  />
                </div>
              ))}

              {/* Select Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block mb-1 font-semibold text-left text-gray-800"
                >
                  Select Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
                >
                  <option value="" disabled>
                    Select the service you need
                  </option>
                  <option value="web">Web Design & Development</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="automation">Business Automation</option>
                  <option value="conversion">Conversion Optimization</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="project_details"
                  className="block mb-1 font-semibold text-left text-gray-800"
                >
                  Project Details
                </label>
                <textarea
                  id="project_details"
                  name="project_details"
                  placeholder="Please state what service you would require"
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500 resize-y"
                ></textarea>
              </div>

              {/* Info Points */}
              <div className="space-y-3 md:mt-[60px] text-left">
                {[
                  "You can expect a response within 24 hours.",
                  "Our specialists are ready to assist you.",
                  "Discover how to help your business succeed.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <BiCheckCircle className="text-[#786A4E]" />
                    <p className="text-xs text-[#786A4E]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="md:w-fit mx-auto text-center space-y-2 text-sm">
              {[
                "I confirm that the information provided is accurate and complete.",
                "I agree to proceed based on the details and terms outlined.",
              ].map((label, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 max-[430px]:text-[9px]"
                >
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 accent-blue-600 max-[430px]:w-3 max-[430px]:h-3"
                  />
                  {label}
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <button type="submit" className="mt-4 ctabtn flex items-center gap-2">
              <BookText />
              Submit my details →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
