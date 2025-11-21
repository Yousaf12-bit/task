import Header from "@/components/common/header";
import Hero from "@/components/home/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 300;
      setIsSticky(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative poppins">
      <Header isSticky={isSticky} />
      <Hero isSticky={isSticky} />
      <div className="bg-black h-400 flex items-center justify-center text-3xl">
        Main Section
      </div>
    </div>
  );
}
