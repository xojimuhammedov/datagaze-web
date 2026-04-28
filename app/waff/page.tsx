import Organization from "@/components/service/Organization";
import WaffControlled from "@/components/waff/WaffControlled";
import WaffHero from "@/components/waff/WaffHero";
import React from "react";

const page = () => {
  return (
    <div>
      <WaffHero />
      <WaffControlled />
      <Organization />
    </div>
  );
};

export default page;
