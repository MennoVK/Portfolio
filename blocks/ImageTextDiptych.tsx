import Image from "next/image"

import { CustomLink } from "@/components/CustomLink";
import { imageType } from "@/misc/types/types";


export interface ImageTextDiptychProps {
    title: string;
    description?: string;
    aspects? : string
    year?: number
    images?: imageType[],
    link?: string,
}

export const ImageTextDiptych = ({title, description, aspects, year, images, link}: ImageTextDiptychProps) => {
    return (
        <section className="h-full gap-10 mx-10 mb-10 sm:mx-20 sm:flex">
            <div className="flex flex-col justify-between flex-grow basis-0 w-full sm:max-w-[50%]">
                <CustomLink
                    href="/"
                    className="hidden uppercase text-12 text-white/50 sm:block"
                    underline>Back to home</CustomLink>
                <div className="flex flex-col gap-24 py-48 sm:py-24 lg:w-3/4">
                    {title && 
                            <h1 className="capitalize text-50">{title}</h1>
                    }
                    <table className="w-full uppercase border-collapse">
                        <tbody>
                            <tr className="w-full border-y border-tundora-grey">
                                {aspects &&
                                    <td className="py-20 text-left text-12">{aspects}</td>
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
                    {link && 
                            <CustomLink
                                href={link}
                                className="uppercase text-nowrap"
                                underline
                                target="_blank"
                                active>See project</CustomLink>
                    }
                </div>
            </div>
            {!!images?.length &&
                    <div className="flex items-center justify-center flex-grow h-full rounded-tl-lg basis-0 aspect-square sm:aspect-auto bg-dark-grey">
                        <Image
                            src={`/projects/${images[0].file}`}
                            alt={images[0].alt}
                            width={567}
                            height={1212}
                            priority
                            className="sm:h-[calc(85vh-10px)] object-contain max-h-full p-10 sm:p-50" />
                    </div>
            }
        </section>
    )
}