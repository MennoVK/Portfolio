import { CustomLink } from "@/components/CustomLink";
import { Video } from "@/components/Video";
import { error } from "@/misc/content";


export default function NotFound() {
    return (
        <div className="w-full h-svh">
            <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-12 uppercase">
                <h1 className="text-60 sm:text-90">{error.title}</h1>
                <CustomLink
                    href="/"
                    underline
                    active
                    className="text-12 lg:text-14">{error.link}</CustomLink>
            </div>
            <Video
                sources={["./videos/heroVideo-h264.mp4", "./videos/heroVideo-h265.mp4"]}
                width={3840}
                height={2160}
                autoplay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                preload="auto" 
                poster="/videos/hero-thumbnail.webp" />
        </div>
    );
}
