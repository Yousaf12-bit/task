import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import InputDropdown from "../ui/input-dropdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = [
  { key: "venue", label: "Venue", img: "/assets/svg/venu.svg" },
  { key: "vendors", label: "Vendors", img: "/assets/svg/Vendor.svg" },
];

const sliderImages = [
  "/assets/png/desktop-banner.png",
  "/assets/png/desktop-banner.png",
  "/assets/png/desktop-banner.png",
  "/assets/png/desktop-banner.png",
];

export default function Hero({ isSticky }: any) {
  const [active, setActive] = useState("venue");

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings} className="h-screen md:h-[745px] xl:h-auto">
        {sliderImages.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt=""
              width={1440}
              height={745}
              className="w-full h-screen md:h-[745px] xl:h-auto object-cover object-center"
            />
          </div>
        ))}
      </Slider>

      <div
        className={`max-w-264 absolute top-1/2 left-1/2 -translate-x-1/2 transform transition-all duration-500 w-full px-4 md:px-7 xl:px-0 ${
          isSticky
            ? "-translate-y-[200px] opacity-100 md:opacity-0 pointer-events-none"
            : "-translate-y-1/2 opacity-100"
        }`}
      >
        <h1 className="max-w-187 mx-auto text-3xl/10 md:text-[50px] md:leading-17.5 lg:text-[70px] lg:leading-20 font-bold text-center text-white px-4 md:px-0">
          Celebrate <br className="hidden md:block lg:hidden" /> in venues big
          and small
        </h1>

        <div className="relative w-full bg-white rounded-[10px] px-4 pt-3.5 md:pt-6 pb-3.5 mt-5 md:mt-15 lg:mt-30">
          <div className="md:absolute md:left-1/2 md:-top-10 md:-translate-x-1/2 grid grid-cols-2 bg-white rounded-[10px] shadow-[0px_0px_34px_0px_#00000040] px-2.5 py-1.5 mb-4 md:mb-0">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 rounded-[10px] px-6 py-2.5 cursor-pointer ${
                  active === tab.key ? "bg-[#FF5037]" : "bg-white"
                }`}
              >
                <Image
                  src={tab.img}
                  alt=""
                  width={24}
                  height={24}
                  className={`${
                    active === tab.key
                      ? tab.key === "venue"
                        ? ""
                        : "invert"
                      : ""
                  }
                  ${
                    active !== tab.key
                      ? tab.key === "venue"
                        ? "invert"
                        : ""
                      : ""
                  }`}
                />

                <p
                  className={`text-sm font-semibold ${
                    active === tab.key ? "text-white" : "text-black"
                  }`}
                >
                  {tab.label}
                </p>
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">
            <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
              <InputDropdown
                label="Where"
                list={["Dubai, UAE", "Abu Dhabi, UAE", "Sharjah", "Ajman"]}
                onSelect={(value: any) => console.log("Selected:", value)}
              />

              <InputDropdown
                label="When"
                list={["Anytime", "Anytime", "Anytime", "Anytime"]}
                onSelect={(value: any) => console.log("Selected:", value)}
              />

              <InputDropdown
                label="Guests"
                list={["10-20", "20-30", "30-40", "40-50"]}
                onSelect={(value: any) => console.log("Selected:", value)}
              />
            </div>

            <button className="w-full md:w-36.5 h-15 flex items-center justify-center gap-2.5 rounded-[10px] bg-[#FF5037] text-2xl text-white font-semibold">
              <Image
                src={"/assets/svg/search.svg"}
                alt=""
                width={24}
                height={24}
              />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
