import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav
      className={
        "pt-[45px] pb-[80px] flex justify-around items-center text-white max-sm:flex-col max-sm:gap-3"
      }
    >
      <div>
        <p className={"text-3xl "}>news.dev</p>
      </div>
      <div className={"flex gap-8"}>
        <Link href={"/categories"}>categories</Link>
        <Link href={"/articles"}>articles</Link>
        <Link href={"/about"}>about</Link>
      </div>
    </nav>
  );
};

export default Header;
