import HeroProduct from "@/components/product-unreleased/HeroProduct";
import OurImpakt from "@/components/product-unreleased/OurImpakt";
import Simplify from "@/components/product-unreleased/Simplify";
import Stars from "@/components/product-unreleased/Stars";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroProduct />
      <OurImpakt />
      <Stars />
      <Simplify />
    </div>
  );
};

export default page;
