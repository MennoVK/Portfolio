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
