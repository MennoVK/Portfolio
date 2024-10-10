"use client"

import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"

import { CustomLink } from "@/components/CustomLink"
import { Video } from "@/components/Video"
import { projects, projectsTitle } from "@/misc/content"
import { isMobile } from "@/misc/responsiveness"


export const ImageProjectsDiptych = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    let projectActive = activeProject != null && !isMobile() 

    return (
        <section
            className="relative flex w-full h-full gap-10 sm:py-32 sm:h-screen sm:px-20 sm:my-0 my-120"
            id="projects">
            <div className="relative items-center justify-center w-full rounded-tl-lg rounded-br-lg sm:flex sm:h-full sm:w-3/5 sm:border border-tundora-grey sm:p-25 lg:p-95">
                {isClient && !isMobile() &&
                    <Image
                        src={`/projects/${projects[activeProject ? activeProject : 0].images[0].file}`}
                        alt={`/projects/${projects[activeProject ? activeProject : 0].images[0].alt}`}
                        width={567}
                        height={1212}
                        className={clsx(!projectActive && "hidden","!relative w-full max-h-full object-contain")}
                    />
                }
                <Video 
                    sources={["./videos/bubbles-crop-h265.mp4", "./videos/bubbles-crop-h264.mp4"]}
                    width={1440}
                    height={1440}
                    autoplay
                    loop
                    muted
                    playsInline
                    className={clsx(projectActive && "hidden", "w-full max-h-full opacity-70")}
                    preload="auto" 
                    poster="/videos/bubbles-thumbnail.webp" />
            </div>
            <div className="absolute flex flex-col w-full gap-40 px-10 sm:px-0 sm:w-2/5 sm:relative ">
                <h2 className="uppercase text-12 lg:text-14 text-white/50">Projects</h2>
                <p className="text-20 sm:text-30 lg:text-36">{projectsTitle}</p>
                <div className="w-full uppercase">
                    <div
                        className={clsx("flex justify-between w-full border-t border-tundora-grey text-white/50")}
                    >
                        <p className="w-1/2 py-20 text-12 lg:text-14">Coming soon</p>
                        <p className="py-20 text-right text-12 lg:text-14">2024</p>
                    </div>
                    {projects.map((project, idx) => (
                        <CustomLink
                            key={idx}
                            className={clsx("flex justify-between items-center w-full border-b border-tundora-grey hover:border-b-grey", idx === 0 && "border-t")}
                            href={`/projects/${(project.title).replaceAll(" ", "-")}`}
                            onMouseEnter={() => setActiveProject(idx)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <p className="w-1/2 py-20 text-12 lg:text-14">{project.title}</p>
                            <p className="py-20 text-center text-12 lg:text-14">{project.aspects}</p>
                            <p className="py-20 text-right text-12 lg:text-14">{project.year}</p>
                        </CustomLink>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}



