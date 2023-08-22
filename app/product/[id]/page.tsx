import React from "react";
import Image from "next/image";

import Price from "@/src/product/components/Price";
import { singleProduct } from "@/src/common/utils/data";

const SingleProductPage = () => {
  return (
    <div className="min-h-screen h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center py-16 px-4">
      {singleProduct.img && (
        <div className="relative w-full h-1/2">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="flex flex-col gap-4  md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
