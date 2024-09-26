import Image from "next/image"

import { imageType } from "@/misc/types/types"


export interface ImageDiptychProps {
    images: imageType[]
}

export const ImageDiptych = ({images}: ImageDiptychProps) => {
    return (
        <section className="flex gap-10 mx-10 my-10 sm:h-screen sm:mx-20">
            <div className="flex-grow basis-0 bg-dark-grey">
                <Image
                    src={`/projects/${images[2].file}`}
                    alt={images[2].alt}
                    width={695}
                    height={753}
                    className="object-contain w-full sm:h-[calc(100vh-20px)] aspect-square sm:aspect-auto p-10 sm:p-50" />
            </div>
            <div className="flex-grow basis-0 bg-dark-grey">
                <Image
                    src={`/projects/${images[3].file}`}
                    alt={images[3].alt}
                    width={695}
                    height={753}
                    className="object-contain w-full sm:h-[calc(100vh-20px)] aspect-square sm:aspect-auto p-10 sm:p-50" />
            </div>
        </section>
    )
}