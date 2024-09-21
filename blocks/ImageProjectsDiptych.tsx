"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

import { CustomLink } from "@/components/CustomLink"
import { projects, projectsTitle } from "@/misc/content"
import { isMobile } from "@/misc/responsiveness"


export const ImageProjectsDiptych = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null)

    return (
        <section className="relative flex w-full h-full gap-10 sm:py-32 sm:h-screen sm:px-20 sm:my-0 my-120">
            <div className="relative items-center justify-center w-full rounded-tl-lg rounded-br-lg sm:flex sm:h-full sm:w-3/5 sm:border border-tundora-grey sm:p-25 lg:p-95">
                <Image
                    alt={activeProject != null ? `/projects/${activeProject+1}` : "x"}
                    src={activeProject != null ? `/projects/${activeProject+1}project1.png` : "/circle.gif"}
                    width={610}
                    height={610}
                    className="w-full max-w-fit"
                    unoptimized />
            </div>
            <div className="absolute flex flex-col w-full gap-40 px-10 sm:px-0 sm:w-2/5 sm:relative ">
                <h2 className="uppercase text-12 text-white/50">Projects</h2>
                <p className="text-20 sm:text-30">{projectsTitle}</p>
                <div className="w-full uppercase">
                    {projects.map((project, idx) => (
                        <CustomLink
                            key={idx}
                            className={clsx("flex justify-between w-full border-b border-tundora-grey", idx === 0 && "border-t")}
                            href={`/projects/${(project.title).replaceAll(" ", "-")}`}
                            onMouseEnter={() => !isMobile() && setActiveProject(idx)}
                            onMouseLeave={() => !isMobile() && setActiveProject(null)}
                        >
                            <p className="w-1/2 py-20 text-12">{project.title}</p>
                            <p className="py-20 text-center text-12">{project.aspects}</p>
                            <p className="py-20 text-right text-12">{project.year}</p>
                        </CustomLink>
                    ))}
                    <div
                        className={clsx("flex justify-between w-full border-b border-tundora-grey text-white/50")}
                    >
                        <p className="w-1/2 py-20 text-12">Coming soon</p>
                        <p className="py-20 text-right text-12">2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



