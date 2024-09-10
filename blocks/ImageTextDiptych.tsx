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
        <section className="gap-10 mx-20 mb-10 sm:flex">
            <div className="flex flex-col justify-between flex-grow basis-0 w-full sm:max-w-[50%]">
                <CustomLink
                    href="/"
                    className="uppercase text-12 text-white/50"
                    underline>Back to home</CustomLink>
                <div className="flex flex-col gap-24 py-48 sm:py-24 sm:w-3/4">
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
                            className="uppercase"
                            underline
                            active>See project</CustomLink>
                    }
                </div>
            </div>
            {!!images?.length &&
                <div className="flex-grow basis-0 h-fit">
                    <Image
                        src={`/projects/${images[0].file}`}
                        alt={images[0].alt}
                        width={695}
                        height={753}
                        priority
                        className="object-cover w-full h-[calc(100vh-20px)]" />
                </div>
            }
        </section>
    )
}