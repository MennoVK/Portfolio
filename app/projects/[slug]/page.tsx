import { notFound } from "next/navigation";

import { FullscreenImage } from "@/blocks/FullscreenImage";
import { ImageDiptych } from "@/blocks/ImageDiptych";
import { ImageTextDiptych } from "@/blocks/ImageTextDiptych";
import { Footer } from "@/components/Footer";
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

    const { title, aspects, year, description, link, images } = props;

    return (
        <>
            <div className="h-[10vh] sm:h-[15vh] bg-black block w-full relative"></div>
            <ImageTextDiptych
                title={title}
                aspects={aspects}
                year={year}
                description={description} 
                link={link}
                images={images} />
            {images && images?.length > 1 && 
                <FullscreenImage images={images}  />
            }
            {images && images?.length > 3 &&
                <ImageDiptych images={images}  />
            }
            <Footer />
        </>
    )
}
