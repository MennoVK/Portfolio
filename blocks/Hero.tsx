import Image from "next/image"

import { bio } from "@/misc/content"


export const Hero = () => {
    return (
        <section className="w-full h-svh">
            <div className="absolute w-full h-full p-10 sm:w-3/4 sm:p-20 z-[5]">
                <h1 className="relative -translate-y-1/2 text-28 sm:text-50 top-1/2">{bio}</h1>
                <p className="absolute uppercase bottom-20 text-12">
                    Scroll down
                    <Image
                        src="/svgs/arrow-down.svg"
                        alt="arrow down"
                        width={16}
                        height={9}
                        priority
                        className="inline mx-10 align-baseline animate-custom-bounce"/>
                </p>
            </div>
            <Image
                src="/shader.gif"
                alt="home"
                width={1440}
                height={900}
                className="object-cover w-full h-full"
                unoptimized />
        </section>
    )
}