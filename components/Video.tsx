export interface VideoProps {
    src: string;
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

export const Video = ({src, controls, muted, loop, autoplay, playsInline, width, height, preload, poster, className}: VideoProps) => {
    return (
        <video
            width={width}
            height={height}
            controls={controls}
            muted={muted}
            autoPlay={autoplay}
            playsInline={playsInline}
            loop={loop}
            preload={preload}
            className={className}
            poster={poster}>
            <source
                src={src}
                type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    )
}