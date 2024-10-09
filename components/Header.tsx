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
    base: "mdlg:flex-grow text-center border border-white/40 mdlg:basis-0 text-12 lg:text-14 px-10 backdrop-blur-md hover:backdrop-blur-sm transition-all duration-200 motion-reduce:duration-0",
    variants: {
        rounded: {
            tl: "mdlg:rounded-tl-lg rounded-tl-md rounded-br-md mdlg:rounded-br-[0px]",
            br: "mdlg:rounded-br-lg rounded-tr-md mdlg:rounded-tr-[0px]",
            tlbr: "mdlg:rounded-tl-lg rounded-br-md mdlg:rounded-br-lg",
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
                className={clsx(!isVisible && "mdlg:pointer-events-none", sideBarOpen && "sm:overflow-x-hidden sm:overflow-y-scroll", "header fixed z-20 flex justify-between w-full gap-10 p-10 sm:p-20 ")}
                ref={ref}>
                <CustomLink
                    className={clsx(button({ rounded: "tl" }), "w-10/12 mdlg:w-auto flex items-center justify-center text-20 mdlg:text-25 lg:text-30", !isVisible && "mdlg:-translate-y-[150%]", !sideBarOpen && !isVisible && "-translate-y-[150%]" )}
                    href="/"
                    onClick={() => setSideBarOpen(false)}>Menno Veerkamp</CustomLink>
                <button
                    aria-label="open sidebar"
                    onClick={() => {setSideBarOpen(!sideBarOpen)}}
                    className={clsx(button({rounded: "br"}), "uppercase delay-100 motion-reduce:delay-0 w-1/6 mdlg:w-auto", !isVisible && "mdlg:-translate-y-[150%]", !sideBarOpen && !isVisible && "-translate-y-[150%]")}>
                    <span className="hidden mdlg:inline-block">About me</span>
                    <span
                        className={clsx(sideBarOpen && "after:!rotate-0 before:!rotate-180", "inline-block align-baseline relative w-10 h-10 before:content-[''] before:block before:bg-grey before:absolute before:top-2/4 before:left-0 before:w-full before:h-1 after:content-[''] after:block after:bg-grey after:absolute after:top-2/4 after:left-0 after:duration-700 before:duration-700 motion-reduce:after:duration-0 motion-reduce:before:duration-0 after:w-full after:h-1 before:-translate-y-1/2 after:-translate-y-1/2 after:rotate-90 p-5 mx-10")}
                    />
                </button>
                <CustomLink
                    className={clsx(button({ rounded: "tlbr" }), "items-center hidden mdlg:flex justify-center delay-200 motion-reduce:delay-0  uppercase", !isVisible && "-translate-y-[150%]")}
                    href={`mailto:${email}`}
                    target="_blank">
                    {email}
                    <Image
                        src="/svgs/arrow-right.svg"
                        alt="arrow right"
                        width={18}
                        height={11}
                        className="inline ml-5 align-baseline"/>
                </CustomLink>
            </header>
            <SideBar
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen} />
        </>

    )
}