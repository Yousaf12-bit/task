import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function InputDropdown({
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
    function handleOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleSelect = (item: any) => {
    setSelected(item);
    onSelect && onSelect(item);
    setOpen(false);
  };

  return (
    <div ref={ref} className={`relative w-full ${className.main}`}>
      <label className={`text-sm text-[#808080] ${className.label}`}>
        {label}
      </label>

      <div
        onClick={toggle}
        className="flex items-center justify-between mt-1.5 cursor-pointer"
      >
        <p className={`text-base text-black font-medium ${className.text}`}>
          {selected || "Select..."}
        </p>
        <IoIosArrowDown
          color="#807D8D"
          size={20}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-50">
          {list.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 text-sm cursor-pointer rounded-md hover:bg-gray-100 text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
