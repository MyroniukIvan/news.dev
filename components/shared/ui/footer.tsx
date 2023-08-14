import React from "react";
import Link from "next/link";
import {AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
    return <div className={'flex justify-around items-center pb-4 max-sm:flex-col'}>
        <div className={'flex items-center max-sm:flex-col'}>
            <p className={'text-white'}>news.dev</p>
            <p className={'text-white p-2 m-2 bg-[#4699E0] rounded'}>by Ivan Myroniuk</p>
        </div>
        <Link className={'flex gap-2 items-center text-white p-2 m-2 bg-[#4699E0] rounded'}
              href={'https://www.linkedin.com/in/ivan-myroniuk/'}>
            <AiFillLinkedin/>
            follow @ivan-myroniuk
        </Link>
    </div>;
};

export default Footer;
