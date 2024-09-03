import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

import { CustomLink } from "@/components/CustomLink"
import { projects } from "@/misc/content"


export const ImageProjectsDiptych = () => {
    return (
        <section className="flex w-full h-screen gap-10 px-20 py-32">
            <div className="w-3/5 h-full border rounded-tl-lg rounded-br-lg border-tundora-grey p-95">
                <Image
                    alt="placeholder"
                    src="/circle.gif"
                    width={610}
                    height={610}
                    className="w-full max-w-[1000px]"/>
            </div>
            <div className="flex flex-col w-2/5 gap-40">
                <h2 className="uppercase text-12 text-white/50">Projects</h2>
                <p className="text-30">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page</p>
                <div className="w-full uppercase">
                    {projects.map((project, idx) => (
                        <CustomLink
                            key={idx}
                            className={clsx("flex justify-between w-full border-b border-tundora-grey", idx === 0 && "border-t")}
                            href={`/projects/${(project.title).replaceAll(" ", "-")}`}>
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



