import Image from "next/image"

import { CustomLink } from "@/components/CustomLink";
import { error } from "@/misc/content";


export default function NotFound() {
    return (
        <>
            <div className="absolute flex flex-col items-center justify-center w-full h-screen gap-12 uppercase">
                <h1 className="text-60 sm:text-90">{error.title}</h1>
                <CustomLink
                    href="/"
                    underline
                    active
                    className="text-12">{error.link}</CustomLink>
            </div>
            <Image
                src="/shader.gif"
                alt="home"
                width={1440}
                height={900}
                className="object-cover w-full h-screen"
                unoptimized />
        </>
    );
}
