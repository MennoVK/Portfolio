import Image from "next/image"

import { imageType } from "@/misc/types/types"


export interface ImageDiptychProps {
    images: imageType[]
}

export const ImageDiptych = ({images}: ImageDiptychProps) => {
    return (
        <section className="flex h-screen gap-10 mx-20 my-10">
            <div className="flex-grow basis-0">
                <Image src={`/projects/${images[2].file}`} alt={images[2].alt} width={695} height={753} className="object-cover w-full h-[calc(100vh-20px)]" />
            </div>
            <div className="flex-grow basis-0">
                <Image src={`/projects/${images[3].file}`} alt={images[3].alt} width={695} height={753} className="object-cover w-full h-[calc(100vh-20px)]" />
            </div>
        </section>
    )
}