import Link from "next/link"

import { socials } from "@/misc/content"

import { CustomLink } from "./CustomLink"


export const Footer = () => {
    return (
        <footer className="flex flex-col p-20 uppercase gap-60">
            <div className="flex justify-between">
                <p className="text-12 text-white/50">Contact me</p>
                <div className="flex flex-col items-end gap-12">
                    {socials.map((social, idx) => (
                        <CustomLink
                            key={idx}
                            underline
                            target="_blank"
                            className="text-12"
                            href={social.url}>{social.platform}</CustomLink>
                        
                    ))}
                </div>
            </div>
            <CustomLink
                target="_blank"
                className="text-[5.1vw] md:text-[5.4vw] xl:text-[5.55vw] text-center overflow-hidden leading-none"
                href={"mailto:contact@mennoveerkamp.com"}
                underline
                active
            >contact@mennoveerkamp.com</CustomLink>
        </footer>
    )
}