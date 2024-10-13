import Lenis from "@studio-freight/lenis";
import { create } from "zustand";


interface LayoutState {
    sideBarOpen: boolean;
    toggleSideBar: () => void;
    setSideBarOpen: (isOpen: boolean) => void;
}

export const useLayoutStore = create<LayoutState>((set)=> ({
    sideBarOpen: false,
    setSideBarOpen: (isOpen) => set({ sideBarOpen: isOpen }),
    toggleSideBar: () => set((state) => ({ sideBarOpen: !state.sideBarOpen })),
}));

interface LenisState {
    lenis: Lenis | null;
    setLenis: (lenis: Lenis) => void;
}

export const useLenisStore = create<LenisState>((set) => ({
    lenis: null,
    setLenis: (lenis: Lenis) => set({ lenis }),
}));