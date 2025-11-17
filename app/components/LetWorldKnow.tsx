import React from 'react';
import Link from 'next/link';
import ConnectBar from './ConnectBar';

const LetWorldKnow = () => {
  return (
    <section className="md:-mt-16">
      <div className="lg:w-[85%] mx-auto lg:pt-26 py-12 px-4">
        {/* Head */}
        <div className="text-center lg:mb-12 mb-4">
          <div className="badge">Let the World know</div>
          <h2 className="heading">
            SEO Services that drive <em>Real Results!</em>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
          {/* left side */}
          <div className="lg:w-[30%] mx-auto flex flex-col items-center gap-2 lg:gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/lwk1.png"
              alt="SEO analysis visual representation"
              className="w-full h-full object-fit"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/it11.png"
              alt="Mobile SEO performance illustration"
              className="lg:hidden object-fit"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/lwk2.png"
              alt="Search engine optimization workflow diagram"
              className="w-full h-full object-fit"
            />
          </div>

          {/* right side */}
          <div className="lg:w-[70%] mx-auto flex flex-col items-center gap-2 lg:gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/lwk3.png"
              alt="Team optimizing website for search visibility"
              className="hidden lg:block object-fit"
            />

            <Link href="/contacts">
              <>
                <img
                  src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/lwk4.png"
                  alt="Contact us for SEO consultation banner"
                  className="hidden lg:block h-68 object-fit"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/lwk41.png"
                  alt="Mobile contact banner for SEO services"
                  className="lg:hidden object-fit"
                />
              </>
            </Link>
          </div>
        </div>

        <ConnectBar />
      </div>
    </section>
  );
};

export default LetWorldKnow;
