"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";


export interface SmoothScrollProps {
    stop: boolean;
}

export const SmoothScroll = ({stop}: SmoothScrollProps) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (lenisRef .current) lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    useEffect(() => {
        const lenis = new Lenis();
        lenisRef.current = lenis

        
        if(stop){
            lenis.stop()
        }

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    },[stop]);

    return <></>;
}