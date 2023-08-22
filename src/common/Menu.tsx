"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { links } from "./utils/utils";
import CartButton from "./components/CartButton";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="cursor-pointer">
      {open ? (
        <Image
          src="/close.png"
          width={20}
          height={20}
          alt=""
          onClick={handleOpen}
        />
      ) : (
        <Image
          src="/open.png"
          width={20}
          height={20}
          alt=""
          onClick={handleOpen}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute w-full left-0 top-24  flex flex-col gap-8 items-center justify-center text-3l z-10 py-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={handleOpen}>
              {item.title}
            </Link>
          ))}
          <Link href="/login" onClick={handleOpen}>
            Login
          </Link>
          <Link href="/orders" onClick={handleOpen}>
            Orders
          </Link>
          <div onClick={handleOpen}>
            <CartButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
