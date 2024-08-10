import { notFound } from "next/navigation";

import { FullscreenImage } from "@/blocks/FullscreenImage";
import { ImageProjectsDiptych } from "@/blocks/ImageProjectsDiptych";
import { ImageTextDiptych } from "@/blocks/ImageTextDiptych";
import { projects } from "@/misc/content";


export interface PageProps {
    params: { 
        slug: string 
    };
}

export default function Project({ params }: PageProps) {
    const props = projects.find(project => project.title === (params.slug).replaceAll("-", " "));

    if (!props) {
        notFound();
    }

    const { title, aspects, year, description, images } = props;

    return (
        <>
            <ImageTextDiptych
                title={title}
                aspects={aspects}
                year={year}
                description={description} 
                images={images} />
            {images && images?.length > 1 && 
                <FullscreenImage images={images}  />
            }
            {images && images?.length > 3 &&
                <ImageProjectsDiptych images={images}  />
            }
        </>
    )
}
