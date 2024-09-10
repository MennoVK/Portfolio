"use client"

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

import { email  } from "@/misc/content"

import { CustomLink } from "./CustomLink";
import { SideBar } from "./SideBar";


const button = tv({
    base: "sm:flex-grow text-center border border-white/40 sm:basis-0 text-12 px-10 backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-200",
    variants: {
        rounded: {
            tl: "rounded-br-lg rounded-tl-lg sm:rounded-br-[0px]",
            tr: "rounded-tr-lg",
            br: "sm:rounded-br-lg rounded-tr-lg sm:rounded-tr-[0px]",
            tlbr: "rounded-tl-lg rounded-br-lg",
        },
    },
});

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <>
            <header className="fixed z-10 flex justify-between w-full gap-10 p-10 sm:p-20 sm:h-[15%] h-[10%]">
                <CustomLink
                    className={clsx(button({ rounded: "tl" }), "w-10/12 sm:w-auto flex items-center justify-center text-20 sm:text-30 transition-transform duration-300", !isVisible && "-translate-y-[150%]" )}
                    href="/">Menno Veerkamp</CustomLink>
                <button
                    onClick={() => {setSideBarOpen(!sideBarOpen)}}
                    className={clsx(button({rounded: "br"}), "uppercase delay-100", !isVisible && "-translate-y-[150%]")}>
                    <span className="hidden sm:inline-block">About me</span>
                    {sideBarOpen ?
                        <Image
                            src="/svgs/minus.svg"
                            alt="plus"
                            width={11}
                            height={11}
                            className="inline mx-10 align-baseline"/>
                        :
                        <Image
                            src="/svgs/plus.svg"
                            alt="plus"
                            width={11}
                            height={11}
                            className="inline mx-10 align-baseline"/>
                    }
                </button>
                <CustomLink
                    className={clsx(button({ rounded: "tlbr" }), "items-center hidden sm:flex justify-center transition-transform duration-300 delay-200 uppercase", !isVisible && "-translate-y-[150%]")}
                    href={`mailto:${email}`}
                    target="_blank">
                    {email}
                    <Image
                        src="/svgs/arrow-right.svg"
                        alt="arrow right"
                        width={18}
                        height={18}
                        className="inline mx-5 align-baseline"/>
                </CustomLink>
            </header>
            <SideBar
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen} />
        </>

    )
}