import clsx from "clsx";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { email,experience, skills } from "@/misc/content"

import { CustomLink } from "./CustomLink";


export interface SideBarProps {
    sideBarOpen: boolean;
    setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

export const SideBar = ({ sideBarOpen, setSideBarOpen }: SideBarProps) => {
    return (
        <div
            className={clsx(sideBarOpen && "bg-black/50 pointer-events-auto", "pointer-events-none fixed top-0 left-0 flex justify-end w-full h-screen sm:z-10 z-[5]")}
            onClick={() => {setSideBarOpen(false)}}>
            <section
                className={clsx(!sideBarOpen && "translate-x-full", "w-full sm:w-1/3 h-screen px-10 bg-black transition-transform pt-[10vh] sm:pt-0 relative")}
                onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute top-0 right-0 p-10"
                    onClick={() => {setSideBarOpen(false)}}>
                    <Image
                        src="/svgs/plus.svg"
                        alt="plus"
                        width={11}
                        height={11}
                        className="hidden rotate-45 sm:block"/>
                </button>
                <div className="grid gap-48 py-24 mt-0 sm:py-48 sm:mt-36">
                    <div className="flex flex-col order-1 gap-24 uppercase sm:order-3">
                        <h1 className="text-white/50">Contact me</h1>
                        <CustomLink
                            href={`mailto:${email}`}
                            className="flex justify-between">
                            {email}
                            <Image
                                src={"/svgs/arrow-right.svg"}
                                alt={""}
                                width={24}
                                height={24} 
                                className="inline" />
                        </CustomLink>
                    </div>

                    <div className="flex flex-col order-2 gap-24 sm:order-1">
                        <div className="flex flex-col gap-24">
                            {experience.map((experience, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col gap-24">
                                    <h1 className="uppercase text-white/50">Experience {experience.year}</h1>
                                    <h2 className="uppercase">{experience.work}</h2>
                                    <p className="text-white/75">{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col order-3 gap-24 uppercase sm:order-2">
                        <h6 className="text-white/50">Skills</h6>
                        <div className="flex flex-wrap gap-12">
                            {skills.map((skill, idx) => (
                                <p key={idx}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}