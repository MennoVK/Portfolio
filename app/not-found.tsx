"use client"

import clsx from "clsx";

import { CustomLink } from "@/components/CustomLink";
import { Video } from "@/components/Video";
import { error } from "@/misc/content";
import { useLayoutStore } from "@/misc/stores/store";


export default function NotFound() {
    const { sideBarOpen } = useLayoutStore();

    return (
        <div className="w-full h-svh">
            <div className={clsx(sideBarOpen && "overflow-y-scroll", "absolute z-10 flex flex-col items-center justify-center w-full h-full gap-12 uppercase motion-reduce:pointer-events-none")}>
                <h1 className="pointer-events-auto text-60 sm:text-90">{error.title}</h1>
                <CustomLink
                    href="/"
                    underline
                    active
                    className="pointer-events-auto text-12 lg:text-14">{error.link}</CustomLink>
            </div>
            <Video
                sources={["./videos/heroVideo-h264.mp4", "./videos/heroVideo-h265.mp4"]}
                width={3840}
                height={2160}
                autoplay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                preload="auto" 
                poster="/videos/hero-thumbnail.webp" />
        </div>
    );
}
