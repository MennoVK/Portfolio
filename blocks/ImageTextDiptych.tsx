import Image from "next/image"
import Link from "next/link"

import { imageType } from "@/misc/types/types";


export interface ImageTextDiptychProps {
    title: string;
    description?: string;
    images?: imageType[]
    aspects? : string
    year?: number
}

export const ImageTextDiptych = ({title, description, images, aspects, year}: ImageTextDiptychProps) => {
    return (
        <section className="flex gap-10 pt-10 mx-20 mb-10">
            <div className="flex flex-col justify-between flex-grow basis-0 max-w-[50%]">
                <Link href="/" className="uppercase text-12 text-white/50">Back to home</Link>
                <div className="flex flex-col w-3/4 gap-24 pb-30">
                    {title && 
                        <h1 className="capitalize text-50">{title}</h1>
                    }
                    <table className="w-full uppercase border-collapse">
                        <tbody>
                            <tr className="w-full border-y border-tundora-grey">
                                {/* on mouseover change shader/image, on click go to project */}
                                <td className="py-20 text-12">Project</td>
                                {aspects &&
                                <td className="py-20 text-center text-12">{aspects}</td>
                                }
                                {year &&
                                    <td className="py-20 text-right text-12">{year}</td>
                                }
                            </tr>
                        </tbody>
                    </table>
                    {description &&
                        <p className="text-20">{description}</p>
                    }
                </div>
            </div>
            {!!images?.length &&
                <div className="flex-grow basis-0 h-fit">
                    <Image src={`/projects/${images[0].file}`} alt={images[0].alt} width={695} height={753} className="object-cover w-full h-[calc(100vh-20px)]" />
                </div>
            }
        </section>
    )
}