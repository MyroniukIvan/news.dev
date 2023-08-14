import React from "react";
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import line from "@/public/assets/Line.svg";
import { Recursive } from "next/font/google";

const recursive = Recursive({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const LogoSection = () => {
  return (
    <>
      <div
        className={`${recursive.className} flex flex-col items-center justify-center text-white pb-24`}
      >
        <Image
          className={"pb-5"}
          width={194}
          height={204}
          src={logo}
          alt={"logo"}
        />
        <h1
          className={
            "italic text-7xl font-normal pb-[17px] text-[#FF7575] whitespace-nowrap max-md:text-3xl max-sm:text-2xl max-lg:text-5xl"
          }
        >
          News for Developers
        </h1>
        <p
          className={
            "text-3xl  text-center max-lg:text-2xl max-md:text-xl max-sm:text-base max-[485px]:text-[11px]  whitespace-pre-wrap"
          }
        >
          Curated collection of articles for busy developers
        </p>
      </div>
      <Image src={line} alt={"line"} />
    </>
  );
};

export default LogoSection;
