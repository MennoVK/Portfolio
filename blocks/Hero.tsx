"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

import { Video } from "@/components/Video"
import { bio } from "@/misc/content"


export const Hero = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            let offset = window.scrollY;
            if (videoRef.current) {
                videoRef.current.style.transform = "translateY(" + offset * 0.3 + "px)"
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="w-full overflow-hidden h-svh">
            <div className="absolute w-full h-full p-10 sm:w-3/4 lg:max-w-[1400px] sm:p-20 z-[5] motion-reduce:pointer-events-none">
                <h1 className="relative -translate-y-1/2 pointer-events-auto text-28 sm:text-50 top-1/2">{bio}</h1>
                <p
                    className="absolute uppercase pointer-events-auto bottom-20 text-12 lg:text-14 motion-reduce:bottom-100">
                    Projects
                    <Image
                        src="/svgs/arrow-right.svg"
                        alt="Scroll down arrow"
                        width={25}
                        height={15}
                        priority
                        className="inline mx-10 animate-custom-bounce motion-reduce:animate-none motion-reduce:rotate-90"/>
                </p>
            </div>
            <Video
                ref={videoRef}
                sources={["./videos/heroVideo-h264.mp4", "./videos/heroVideo-h265.mp4"]}
                width={3840}
                height={2160}
                autoplay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                preload="auto" 
                poster="./videos/hero-thumbnail.webp"
            />
        </section>
    )
}