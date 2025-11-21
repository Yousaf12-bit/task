import Image from "next/image";
import Dropdown from "../ui/dropdown";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Header({ isSticky }: any) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
          isSticky ? "bg-white" : "bg-linear-to-b from-black/60 to-black/0"
        }`}
      >
        <div className="h-22 flex items-center justify-between gap-3 px-4 md:px-7">
          <Image src={"/assets/svg/logo.svg"} alt="" width={48} height={32} />

          <div
            className={`hidden md:flex transition-all duration-500 ${
              isSticky
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            <div className="lg:min-w-140 flex items-center justify-between gap-8 shadow-md rounded-[10px] px-3.5 py-2.5">
              <div className="w-full flex-1 flex items-center justify-between gap-3 lg:gap-7.5">
                <div className="w-full text-sm lg:text-base text-black font-medium truncate">
                  London, UK
                </div>
                <div className="w-px h-4.5 bg-[#DFDFDF]" />
                <div className="w-full  text-sm lg:text-base text-black font-medium text-center truncate">
                  Anytime
                </div>
                <div className="w-px h-4.5 bg-[#DFDFDF]" />
                <div className="w-full  text-sm lg:text-base text-black font-medium truncate">
                  10-20 Guests
                </div>
              </div>

              <button className="w-8.5 h-8.5 flex items-center justify-center rounded-[10px] bg-[#FF5037] cursor-pointer">
                <Image
                  src={"/assets/svg/search.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Dropdown
              label="Add your listing"
              list={["Create New", "Import Listing", "Manage Listings"]}
            />
            <Dropdown
              label="EN"
              list={["EN", "FR", "DE"]}
              className={{ main: "hidden lg:block" }}
            />

            <button className="w-11 h-11 hidden lg:flex items-center justify-center rounded-[10px] bg-white shadow-md">
              <Image
                src={"/assets/svg/user.svg"}
                alt=""
                width={10}
                height={15}
              />
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              className="w-11 h-11 flex lg:hidden items-center justify-center rounded-full bg-white shadow-md"
            >
              <Image
                src={"/assets/svg/menu.svg"}
                alt=""
                width={15}
                height={10}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-500 lg:hidden z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <Image src={"/assets/svg/logo.svg"} alt="" width={48} height={32} />
          <button onClick={() => setDrawerOpen(false)}>
            <IoClose size={30} />
          </button>
        </div>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
}
