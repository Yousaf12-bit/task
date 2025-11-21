import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({
  label,
  list = [],
  onSelect,
  className = {},
}: any) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    function checkClick(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", checkClick);
    return () => document.removeEventListener("mousedown", checkClick);
  }, []);

  const handleSelect = (item: any) => {
    setSelected(item);
    onSelect && onSelect(item);
    setOpen(false);
  };

  return (
    <div className={`relative  ${className.main}`} ref={ref}>
      <div
        onClick={toggle}
        className={`h-auto flex items-center justify-center gap-2 rounded-[10px] bg-white cursor-pointer hover:bg-white/80 px-3.5 py-2.5 shadow-md ${className.wrapper}`}
      >
        <p className="text-base text-black md:text-[#FF5037] font-semibold">
          {selected || label}
        </p>
        <IoIosArrowDown
          color="#6B7280"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg p-2 z-50">
          {list.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="text-sm px-2 py-1.5 cursor-pointer rounded-md hover:bg-gray-100 text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
