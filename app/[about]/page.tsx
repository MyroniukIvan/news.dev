'use client'
import React from "react";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    return (<>
            <button className={'text-white flex p-4 m-2 justify-end bg-[#4699E0] rounded'} onClick={router.back}>Back</button>

            <div className={'text-white text-4xl text-center'}>
                Page is under construction....
            </div>
        </>
    );
};

export default Page;
