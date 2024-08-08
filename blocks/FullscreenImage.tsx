import Image from "next/image"

import { imageType } from "@/misc/types/types"


export interface FullscreenImageProps {
    images: imageType[]
}

export const FullscreenImage = ({images}: FullscreenImageProps) => {
    return (
        <section className="w-full h-[calc(100vh-20px)]">
            <Image
                src={`/projects/${images[1].file}`}
                alt={images[1].alt}
                width={1440}
                height={788}
                className="object-cover w-full h-full px-20 my-10" />
        </section>
    )
}