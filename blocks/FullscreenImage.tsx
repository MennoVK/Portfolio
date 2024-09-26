import Image from "next/image"

import { imageType } from "@/misc/types/types"


export interface FullscreenImageProps {
    images: imageType[]
}

export const FullscreenImage = ({images}: FullscreenImageProps) => {
    return (
        <section className="lg:h-[calc(100vh-20px)] bg-dark-grey mx-10 sm:mx-20 flex justify-center items-center">
            <Image
                src={`/projects/${images[1].file}`}
                alt={images[1].alt}
                width={2280}
                height={1381}
                className="object-contain h-full max-h-full p-20 sm:p-50" />
        </section>
    )
}