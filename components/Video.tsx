"use client"

import usePrefersReducedMotion from "@/misc/usePrefersReducedMotion";


export interface VideoProps {
    sources: string[];
    controls?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    width: number;
    height: number;
    className?: string;
    poster?: string;
    preload?: "metadata" | "auto" | "none";
}

export const Video = ({sources, controls = false, muted, loop, autoplay, playsInline, width, height, preload, poster, className}: VideoProps) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    if (prefersReducedMotion === null) {
        return null;
    }

    return (
        <video
            width={width}
            height={height}
            controls={prefersReducedMotion || controls}
            muted={muted}
            autoPlay={!prefersReducedMotion && autoplay}
            playsInline={playsInline}
            loop={loop}
            preload={preload}
            className={className}
            poster={poster}
        >
            {sources.map((source, index) => (
                <source
                    key={index}
                    src={source}
                    type="video/mp4" />
            ))}
        Your browser does not support the video tag.
        </video>
    )
}