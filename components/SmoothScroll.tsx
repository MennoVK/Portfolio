"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { useLayoutStore } from "@/misc/stores/store";
import usePrefersReducedMotion from "@/misc/usePrefersReducedMotion";


export interface SmoothScrollProps {
    stop?: boolean;
}

export const SmoothScroll = ({stop}: SmoothScrollProps) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();
    const { sideBarOpen } = useLayoutStore();
    const prefersReducedMotion = usePrefersReducedMotion();
    
    useEffect(() => {
        if (lenisRef .current) lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    useEffect(() => {
        const lenis = new Lenis();
        lenisRef.current = lenis

        if(sideBarOpen){
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
    },[stop, sideBarOpen, prefersReducedMotion]);

    return <></>;
}