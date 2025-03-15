import { Metadata } from "next";
import { notFound } from "next/navigation";

import { FullscreenImage } from "@/blocks/FullscreenImage";
import { ImageDiptych } from "@/blocks/ImageDiptych";
import { ImageTextDiptych } from "@/blocks/ImageTextDiptych";
import { Footer } from "@/components/Footer";
import { projects } from "@/misc/content";


export async function generateStaticParams() {
    const slugs = projects.map((project) => 
        project.title.toLowerCase().replace(/\s+/g, "-")
    );

    return slugs.map((slug) => ({
        slug
    }));
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const props = projects.find(project => project.title === (slug).replaceAll("-", " "));

    if (!props) {
        notFound();
    }

    const { title, aspects, year, description, link, images } = props;

    return (
        <>
            <div className="relative block w-full bg-black header " />
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

export const metadata: Metadata = {
    openGraph: {
        type: "article",
    },
}