"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useLayoutStore,useLenisStore } from "@/misc/stores/store";
import usePrefersReducedMotion from "@/misc/usePrefersReducedMotion";


export const SmoothScroll = () => {
    const pathname = usePathname();
    const { sideBarOpen } = useLayoutStore();
    const prefersReducedMotion = usePrefersReducedMotion();
    const setLenis = useLenisStore((state) => state.setLenis);

    useEffect(() => {
        const lenis = new Lenis();
        setLenis(lenis);

        if (sideBarOpen) {
            lenis.stop();
        }

        if (prefersReducedMotion) {
            lenis.destroy();
        }

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [sideBarOpen, prefersReducedMotion, setLenis]);

    useEffect(() => {
        const lenis = useLenisStore.getState().lenis;
        if (lenis) lenis.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <></>;
};
