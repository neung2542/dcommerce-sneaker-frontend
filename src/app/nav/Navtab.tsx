"use client";

import { usePathname } from "next/navigation";
import { navItems } from "./navItems";
import Link from "next/link";

const Navtab = () => {
  const pathname: string = usePathname();

  return (
    <div className="flex justify-center items-center gap-8 h-14">
      {navItems.map((item, index) => (
        <div key={index} className="h-full flex justify-center items-center relative">
          <Link href={item.route} className="line-hover font-semibold">
            {item.name}
          </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300 ${
                pathname === item.route ? "opacity-100" : "opacity-0"
              } hover:opacity-100`}
            ></span>
        </div>
      ))}
    </div>
  );
};

export default Navtab;