import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import CartButton from "./components/CartButton";

const Navbar = () => {
  return (
    <div className="h-12  text-red-500 p-4 flex items-center justify-between  uppercase md:h-20">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
      </div>
      <div className="text-xl md:text-center font-bold flex-1">
        <Link href="/">Masti</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 right-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 7890</span>
        </div>
        {/* <Link href="">Login</Link> */}
        <Link href="">Orders</Link>
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
