import Image from "next/image";

import { CustomLink } from "@/components/CustomLink";
import { error } from "@/misc/content";


export default function NotFound() {
    return (
        <>
            <div className="w-full h-svh">
                <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-12 uppercase">
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
                    className="object-cover w-full h-svh"
                    unoptimized />
            </div>
        </>
    );
}
