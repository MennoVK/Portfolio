"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import usePrefersReducedMotion from "@/misc/usePrefersReducedMotion";


export interface SmoothScrollProps {
    stop?: boolean;
}

export const SmoothScroll = ({stop}: SmoothScrollProps) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    const prefersReducedMotion = usePrefersReducedMotion();
    
    useEffect(() => {
        if (lenisRef .current) lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    useEffect(() => {
        const lenis = new Lenis();
        lenisRef.current = lenis

        if(stop){
            lenis.stop()
        }

        if(prefersReducedMotion){
            lenis.destroy()
        }

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    },[stop, prefersReducedMotion]);

    return <></>;
}