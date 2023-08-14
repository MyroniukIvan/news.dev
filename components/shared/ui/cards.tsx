"use client";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActivePage} from "@/components/store/paginationSlice";
import {Card, fetchCardsAsync} from "@/components/store/cardsSlice";
import {Poppins, Recursive} from "next/font/google";
import moment from "moment";
import {TbFidgetSpinner} from "react-icons/tb";
import Tabs from "@/components/shared/ui/tabs";
import Image from "next/image";
import line from '@/public/assets/Line.svg'

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});
const recursive = Recursive({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const CardPagination: React.FC = () => {
    const [flexMode, setFlexMode] = useState(false);
    const activePage = useSelector((state: any) => state.pagination.activePage);
    const cards = useSelector((state: any) => state.cards.data);
    const loading = useSelector((state: any) => state.cards.loading);
    const dispatch = useDispatch();
    const itemsPerPage = 9;

    const totalPages = Math.ceil(cards.length / itemsPerPage);

    const displayCards = () => {
        const startIndex = (activePage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return cards.slice(startIndex, endIndex);
    };

    useEffect(() => {
        function handleWindowResize() {
            if (window.innerWidth < 650) {
                setFlexMode(true);
            } else {
                setFlexMode(false);
            }
        }

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchCardsAsync());
    }, [dispatch]);

    const handlePageChange = (newPage: number) => {
        dispatch(setActivePage(newPage));
    };

    const handleListClick = () => {
        setFlexMode(true);
    };
    const handleGridClick = () => {
        setFlexMode(false);
    };

    const flexColStyles = "flex flex-col place-items-center gap-2";

    return (
        <>
            <Tabs
                handleListClick={handleListClick}
                handleGridClick={handleGridClick}
            />
            <div
                className={`${
                    flexMode ? "flex" : flexColStyles
                } ${poppins} pb-32 flex-wrap gap-[37px] justify-center max-sm:flex `}
            >
                {loading === "pending" ? (
                    <p className={"animate-spin text-white text-7xl"}>
                        <TbFidgetSpinner/>
                    </p>
                ) : (
                    displayCards().map((card: Card) => (
                        <div
                            key={card.id}
                            className={`${
                                flexMode ? "" : "w-[90%]"
                            } relative cursor-pointer w-[390px] h-[440px] bg-white border-[#252930] flex justify-center flex-col items-center p-6 rounded-[22px] max-sm:w-[300px] max-sm:h-[350px]`}
                        >
                            <img
                                className={`${
                                    flexMode ? "" : "w-full top-0"
                                } absolute top-3 rounded-[22px] w-[337px] h-[180px] mb-8 max-sm:w-full max-sm:h-[90px] max-sm:top-0 object-cover`}
                                src={card.imageUrl}
                                alt={"image"}
                            />
                            <div className={"absolute bottom-4 p-4"}>
                                <h1
                                    className={
                                        "text-[#0F1217] mb-2 font-bold text-[19px] text-center first-letter:uppercase"
                                    }
                                >
                                    {flexMode ? card.title.slice(0, 55) + "..." : card.title}
                                </h1>
                                <p className={"pb-3 text-center max-sm:text-sm w-full"}>
                                    {" "}
                                    {flexMode ? card.summary.slice(0, 55) + "..." : card.summary.length > 350 ? card.summary.slice(0, 350) + "..." : card.summary}
                                </p>
                                <div className={"flex italic justify-start w-full gap-[17px]"}>
                                    <p> {moment(card.updatedAt).format("MMMM Do, YYYY")}</p>
                                    <p>.</p>
                                    <p>DevOps</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <div
                    className={`${recursive} h-[50px] w-full text-[#909090] italic flex justify-center mt-4 sm:w-fit`}
                >
                    <button
                        className={`disabled:text-gray-600 px-3 py-2 mx-1 max-sm:hidden`}
                        onClick={() => handlePageChange(activePage - 1)}
                        disabled={activePage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index}
                            className={` px-3 py-2 mx-1 ${
                                index + 1 === activePage ? "text-[#FF7575] border-t-2 border-[#FF7575] transition-all  duration-700" : "text-[#909090]"
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="disabled:text-gray-600 px-3 py-2 mx-1 max-sm:hidden"
                        onClick={() => handlePageChange(activePage + 1)}
                        disabled={activePage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
            <Image className={'pb-[30px]'} src={line} alt={'line'}/>
        </>
    );
};

export default CardPagination;
