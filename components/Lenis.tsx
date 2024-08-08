"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";


interface LenisProps {
    children?: ReactNode
}

export const Lenis = ({ children }: LenisProps) => {
    return (
        <ReactLenis
            root
            options={{ lerp: 0.1, duration: 0.5 }}>
            {children}
        </ReactLenis>
    );
};
