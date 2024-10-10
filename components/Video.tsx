"use client";

import { forwardRef } from "react";

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

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
    (
        {
            sources,
            controls = false,
            muted,
            loop,
            autoplay,
            playsInline,
            width,
            height,
            preload,
            poster,
            className,
        },
        ref
    ) => {
        const prefersReducedMotion = usePrefersReducedMotion();

        if (prefersReducedMotion === null) {
            return null;
        }

        return (
            <video
                ref={ref}
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
        );
    }
);

// Provide displayName for better debugging
Video.displayName = "Video";
