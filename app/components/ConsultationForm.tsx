"use client";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

export default function ConsultationForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 👉 You can handle form data here
    // e.g., send it to an API route: /api/contact
    alert("Form submitted!");
  };

  return (
    <section
      className="w-full md:w-[80%] max-w-7xl mx-auto bg-cover bg-center rounded-3xl relative"
      style={{ backgroundImage: "url('https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/nd_krd.jpg')", }} 
    >
      {/* ✅ Hidden image for SEO crawlability */}
      <img
        src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/nd_krd.jpg"
        alt="Consultation form background - business growth concept"
        className="hidden"
      />

      <div className="md:p-12 px-4 py-6 flex flex-col desktop:flex-row items-start gap-6 text-white max-[768px]:items-center max-[768px]:text-center consultation-1024">
        {/* Left: Contact Info */}
        <div className="desktop:w-[40%] flex flex-col max-[768px]:w-full max-[768px]:items-center consultation-1024-left">
          <div className="badge mb-4 max-w-fit max-[768px]:mx-auto">
            Sign Up for a Consultation
          </div>

          <h2 className="text-[50px] font-bold font-montserrat mb-8 leading-13 max-[768px]:text-4xl max-[768px]:leading-tight">
            Elevate Your Brand to <em>New Heights.</em> Supercharge Your Growth
          </h2>

          <div className="space-y-4 max-[768px]:space-y-3 w-fit text-left">
            <p className="text-2xl md:text-3xl font-bold font-inter">
              Contact
            </p>

            {/* Location / Phone Blocks */}
            {[
              ["500 Terry Francine Street, San Francisco", "+1 (213) 5360623"],
              [
                "Mill Rd, Youghal-Lands, Youghal, Co. Cork, P36 X015, Ireland",
                "+353 (89) 457 4060",
              ],
              ["Al Mushrif, Abu Dhabi, UAE", "+971 (56) 6457591"],
            ].map(([address, phone], i) => (
              <div key={i} className="text-base">
                <div className="flex items-center gap-2 mb-1 font-inter">
                  <FaMapMarkerAlt className="w-4 h-4 text-red-600" aria-label="Location icon" />
                  <p>{address}</p>
                </div>
                <div className="flex items-center gap-2 font-playfair">
                  <FaPhoneAlt className="w-4 h-4 text-cblue" aria-label="Phone icon" />
                  <p>{phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="desktop:w-[60%] max-[798px]:w-full max-[798px]:mt-8 max-[798px]:flex max-[798px]:justify-center">
            <form
                onSubmit={handleSubmit}
                className="h-full flex flex-col justify-between max-[768px]:items-center max-[768px]:w-full"
            >
                {/* Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm max-[768px]:w-full font-inter">
                {[
                    ["First Name", "text", "Enter your first name"],
                    ["Last Name", "text", "Enter your last name"],
                    ["Email Address", "email", "Enter your email address"],
                    ["Phone Number", "tel", "Enter your phone number"],
                    ["Company Name", "text", "Enter your company name"],
                ].map(([label, type, placeholder], i) => (
                    <div key={i} className="max-[768px]:max-w-[350px]">
                    <label className="block mb-1 text-left">
                        {label}
                    </label>
                    <input
                        type={type}
                        placeholder={placeholder}
                        required
                        className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                ))}

                {/* Select */}
                <div className="max-[768px]:max-w-[350px]">
                    <label className="block mb-1 text-left max-[768px]:text-center">
                    Select Service
                    </label>
                    <select
                    required
                    className="w-full border border-gray-300 rounded-lg px-2 py-2 text-gray-800 opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Select a service</option>
                    <option value="web">Web Design & Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="automation">Business Automation</option>
                    <option value="conversion">Conversion Optimization</option>
                    </select>
                </div>

                {/* Textarea */}
                <div className="max-[768px]:max-w-[350px]">
                    <label className="block mb-1 text-left max-[768px]:text-center">
                    Project Details
                    </label>
                    <textarea
                    placeholder="State what service you require"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-gray-800 resize-none opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Notes */}
                <div className="space-y-3 max-[768px]:w-fit md:mx-auto my-auto text-left font-playfair">
                {[
                    "You can expect a response within 24 hours.",
                    "Our specialists are ready to assist you.",
                    "Discover how to help your business succeed.",
                ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                    <BsCheckCircle
                        color="#928468"
                        className="w-4 h-4"
                        aria-label="Checkmark icon"
                    />
                    <p className="text-xs text-[#928468] font-bold">{text}</p>
                    </div>
                ))}
                </div>
            </div>


            {/* Checkboxes */}
            <div className="text-center desktop:text-left space-y-2 text-sm mt-6 font-inter font-light">
              {[
                "I confirm that the information provided is accurate and complete.",
                "I agree to proceed based on the details and terms outlined.",
              ].map((text, i) => (
                <label key={i} className="flex items-center gap-2 max-[430px]:text-[9px]">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 accent-blue-600 max-[430px]:w-3 max-[430px]:h-3"
                  />
                  {text}
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button type="submit" className="ctabtn">
                Submit my details →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
