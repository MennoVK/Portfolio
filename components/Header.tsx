"use client"

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { tv } from "tailwind-variants";

import { bio,experience, skills } from "@/misc/content"

import { CustomLink } from "./CustomLink";


const button = tv({
    base: "flex-grow text-center uppercase border border-white/40 basis-0 aspect-[20/7] text-12 px-10",
    variants: {
        rounded: {
            tl: "rounded-tl-lg",
            br: "rounded-br-lg",
            tlbr: "rounded-tl-lg rounded-br-lg",
        },
    },
});

export const Header = () => {
    const [active, setActive] = useState(false)

    return (
        <header className="fixed z-10 flex justify-between w-full gap-10 p-20">
            <CustomLink
                className={clsx(button({ rounded: "tl" }), "flex items-center justify-center !text-36 h-fit")}
                href="/">Menno<br></br> Veerkamp</CustomLink>
            <button
                className={clsx(button({rounded: "br"}), active && "h-fit bg-black")}
                onClick={() => {setActive(!active)}}>
                <span className="inline-block">About me</span>
                {active ? 
                    <Image
                        src="/svgs/minus.svg"
                        alt="minus"
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
                {active &&
                    <div className="flex flex-col w-11/12 py-10 text-left gap-66">
                        <div className="flex flex-col gap-24">
                            <h6 className="uppercase text-white/50">Me</h6>
                            <p className="text-20">{bio}</p>
                        </div>
                        <div className="flex flex-col gap-24">
                            <h6 className="uppercase text-white/50">Experience</h6>
                            <div className="flex flex-col gap-20">
                                {experience.map((experience, idx) => 
                                    <div
                                        key={idx}
                                        className="gap-6">
                                        <p>{experience.work}</p>
                                        <p className="text-white/50">{experience.year}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-24">
                            <h6 className="uppercase text-white/50">Skills</h6>
                            <div className="flex gap-12">
                                {skills.map((skill, idx) => 
                                    <p key={idx}>{skill}</p>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </button>
            <CustomLink
                className={clsx(button({ rounded: "tlbr" }), "flex items-center justify-center  h-fit")}
                href="mailto:contact@mennoveerkamp.com"
                target="_blank">
                contact@mennoveerkamp.com
                <Image
                    src="/svgs/plus.svg"
                    alt="plus"
                    width={11}
                    height={11}
                    className="inline mx-10 align-baseline"/>
            </CustomLink>
        </header>
    )
}