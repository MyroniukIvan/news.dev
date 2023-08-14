import React from "react";
import Link from "next/link";
import { Recursive } from "next/font/google";
import Image from "next/image";
import gridIcon from "@/public/assets/Grid.svg";
import listIcon from "@/public/assets/List.svg";

const recursive = Recursive({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface Props {
  handleGridClick: () => void;
  handleListClick: () => void;
}

const Tabs = ({ handleGridClick, handleListClick }: Props) => {
  return (
    <nav
      className={`${recursive} gap-6 pb-28 italic pt-4 flex justify-center max-md:gap-3 max-sm:gap-1 max-sm:flex-col max-sm:place-items-center max-md:flex-col max-md:place-items-center max-lg:flex-col max-lg:place-items-center`}
    >
      <div className={"flex gap-3 max-sm:hidden"}>
        <Image
          className={"cursor-pointer"}
          onClick={handleListClick}
          src={gridIcon}
          alt={"gridIcon"}
          width={24}
          height={24}
        />
        <Image
          className={"cursor-pointer"}
          onClick={handleGridClick}
          src={listIcon}
          alt={"listIcon"}
          width={24}
          height={24}
        />
      </div>
      <div
        className={
          "flex gap-9 text-[#909090] max-md:gap-4 max-md:flex-col max-lg:gap-3"
        }
      >
        <Link href={"/section/JavaScript"}>JavaScript</Link>
        <Link href={"/section/DevOps"}>DevOps</Link>
        <Link href={"/section/Cloud"}>Cloud</Link>
        <Link href={"/section/Terraform"}>Terraform</Link>
        <Link href={"/section/Architecture"}>Architecture</Link>
        <Link href={"/section/Scalability"}>Scalability</Link>
        <Link className={"shadow"} href={"/section/Explainers"}>
          Explainers
        </Link>
      </div>
    </nav>
  );
};

export default Tabs;
