"use client"

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";

import { email  } from "@/misc/content"

import { CustomLink } from "./CustomLink";
import { SideBar } from "./SideBar";
import { SmoothScroll } from "./SmoothScroll";


const button = tv({
    base: "sm:flex-grow text-center border border-white/40 sm:basis-0 text-12 px-10 backdrop-blur-sm sm:hover:backdrop-blur-lg transition-all duration-200",
    variants: {
        rounded: {
            tl: "sm:rounded-tl-lg rounded-tl-md rounded-br-md sm:rounded-br-[0px]",
            br: "sm:rounded-br-lg rounded-tr-md sm:rounded-tr-[0px]",
            tlbr: "sm:rounded-tl-lg rounded-br-md sm:rounded-br-lg",
        },
    },
});

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const ref = useRef(null);

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
    })

    return (
        <>
            <SmoothScroll stop={sideBarOpen} />
            <header
                className={clsx(!isVisible && "sm:pointer-events-none", "fixed z-20 flex justify-between w-full gap-10 p-10 sm:p-20 sm:h-[15%] h-[10%]")}
                ref={ref}>
                <CustomLink
                    className={clsx(button({ rounded: "tl" }), "w-10/12 sm:w-auto flex items-center justify-center text-20 sm:text-30 transition-transform duration-300", !isVisible && "sm:-translate-y-[150%]", !sideBarOpen && !isVisible && "-translate-y-[150%]" )}
                    href="/">Menno Veerkamp</CustomLink>
                <button
                    onClick={() => {setSideBarOpen(!sideBarOpen)}}
                    className={clsx(button({rounded: "br"}), "uppercase delay-100 w-1/6 sm:w-auto", !isVisible && "sm:-translate-y-[150%]", !sideBarOpen && !isVisible && "-translate-y-[150%]")}>
                    <span className="hidden sm:inline-block">About me</span>
                    <div
                        className={clsx(sideBarOpen && "after:!rotate-0 before:!rotate-180", "inline-block align-baseline relative w-10 h-10 before:content-[''] before:block before:bg-grey before:absolute before:top-2/4 before:left-0 before:w-full before:h-1 after:content-[''] after:block after:bg-grey after:absolute after:top-2/4 after:left-0 after:duration-700 before:duration-700 after:w-full after:h-1 before:-translate-y-1/2 after:-translate-y-1/2 after:rotate-90 p-5 mx-10")}
                        aria-label="plus" />
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