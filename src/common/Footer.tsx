import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 text-white flex flex-col items-center justify-center">
      <Link href="/" className="font-bold text-xl">
        Masti
      </Link>
      <p>© Kaivalyamani Tripathi</p>
    </div>
  );
};

export default Footer;
