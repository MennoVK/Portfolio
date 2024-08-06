import { notFound } from "next/navigation";

import { FullscreenImage } from "@/blocks/FullscreenImage";
import { ImageDiptych } from "@/blocks/ImageDiptych";
import { ImageTextDiptych } from "@/blocks/ImageTextDiptych";
import { projects } from "@/misc/content";
import { imageType } from "@/misc/types/types";


export interface PageProps {
    params: { 
        slug: string 
    };
}

export interface ProjectProps {
    title: string;
    description: string; 
    images: imageType[]
}

export default function Project({ params }: PageProps) {
    const props = projects.find(project => project.title === (params.slug).replaceAll("-", " "));

    if (!props) {
        notFound();
    }

    const { title, description, images }: ProjectProps = props;

    return (
        <>
            <ImageTextDiptych title={title} description={description} images={images} />
            {images?.[1] && 
                <FullscreenImage images={images}  />
            }
            {images?.[2] && images?.[3] &&
                <ImageDiptych images={images}  />
            }
        </>
    )
}
