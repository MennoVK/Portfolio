"use client"

import clsx from "clsx";
import Image from "next/image";

import { email,experience, skills } from "@/misc/content"
import { useLayoutStore } from "@/misc/stores/store";

import { CustomLink } from "./CustomLink";


export const SideBar = () => {
    const { sideBarOpen, setSideBarOpen } = useLayoutStore();

    return (
        <div
            role="dialog"
            aria-label="Sidebar"
            className={clsx(sideBarOpen && "bg-black/50 pointer-events-auto", "pointer-events-none fixed top-0 left-0 flex justify-end w-full h-dvh sm:z-50 z-10")}
            onClick={() => setSideBarOpen(false)}
            data-lenis-prevent
        >
            <div className={clsx(!sideBarOpen && "translate-x-full", "bg-black w-full min-h-85 max-h-200 h-[10svh] fixed top-0 left-0 sm:hidden transition-transform ease-out motion-reduce:duration-0 duration-700 z-30")} />
            <section
                className={clsx(!sideBarOpen && "translate-x-full", "w-full sm:w-1/2 mdlg:w-1/3 h-full px-10 bg-black transition-transform ease-out duration-700 motion-reduce:duration-0 pt-[10svh] sm:pt-0 relative z-20 overflow-y-auto")}
                onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute top-0 right-0 hidden p-10 sm:block"
                    onClick={() => setSideBarOpen(false)}>
                    <Image
                        src="/svgs/plus.svg"
                        alt="exit"
                        width={11}
                        height={11}
                        className="h-auto m-5 rotate-45 w-15"/>
                </button>
                <div className="grid gap-48 py-24 mt-0 sm:py-48 sm:mt-36">
                    <div className="flex flex-col order-1 gap-24 uppercase sm:order-3">
                        <h1 className=" text-white/50">Contact me</h1>
                        <CustomLink
                            href={`mailto:${email}`}
                            className="flex justify-between"
                            target="_blank"
                        >
                            {email}
                            <Image
                                src={"/svgs/arrow-right.svg"}
                                alt="arrow right"
                                width={25}
                                height={24} 
                                className="inline" />
                        </CustomLink>
                    </div>

                    <div className="flex flex-col order-2 gap-24 sm:order-1">
                        <div className="flex flex-col gap-24">
                            {experience.map((experience, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col gap-12">
                                    <h1 className="uppercase text-white/50">Experience {experience.year}</h1>
                                    <h2 className="pt-12 uppercase">{experience.work}</h2>
                                    <p className="text-white/75">{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col order-3 gap-24 uppercase sm:order-2">
                        <h1 className="text-white/50">Skills</h1>
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