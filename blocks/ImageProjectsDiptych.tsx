"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

import { CustomLink } from "@/components/CustomLink"
import { projects } from "@/misc/content"


export const ImageProjectsDiptych = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null)

    return (
        <section className="flex w-full h-auto gap-10 px-10 py-32 sm:h-screen sm:px-20 sm:my-0 my-120">
            <div className="items-center justify-center hidden w-3/5 h-full border rounded-tl-lg rounded-br-lg border-tundora-grey p-95 sm:flex">
                <Image
                    alt={activeProject != null ? `/projects/${activeProject+1}` : "x"}
                    src={activeProject != null ? `/projects/${activeProject+1}project1.png` : "/circle.gif"}
                    width={610}
                    height={610}
                    className="w-full max-w-[1000px]"/>
            </div>
            <div className="flex flex-col w-full gap-40 sm:w-2/5">
                <h2 className="uppercase text-12 text-white/50">Projects</h2>
                <p className="text-20 sm:text-30">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page</p>
                <div className="w-full uppercase">
                    {projects.map((project, idx) => (
                        <CustomLink
                            key={idx}
                            className={clsx("flex justify-between w-full border-b border-tundora-grey", idx === 0 && "border-t")}
                            href={`/projects/${(project.title).replaceAll(" ", "-")}`}
                            onMouseEnter={() => setActiveProject(idx)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            {/* on mouseover change shader/image */}
                            <p className="w-1/2 py-20 text-12">{project.title}</p>
                            <p className="py-20 text-center text-12">{project.aspects}</p>
                            <p className="py-20 text-right text-12">{project.year}</p>
                        </CustomLink>
                    ))}
                </div>
            </div>
        </section>
    )
}



