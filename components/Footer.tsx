import { socials } from "@/misc/content"
import { email } from "@/misc/content"
import { currentYear } from "@/misc/time"

import { CustomLink } from "./CustomLink"


export const Footer = () => {
    return (
        <footer className="flex flex-col p-10 overflow-hidden uppercase sm:p-20">
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
                    <p className="my-48 text-white/50 text-12 lg:my-60">© Menno Veerkamp {currentYear}</p>
                </div>
            </div>
            <CustomLink
                target="_blank"
                className="text-[5.1vw] md:text-[5.4vw] xl:text-[5.55vw] text-center leading-tight sm:leading-none"
                href={`mailto:${email}`}
                underline
                active
            >{email}</CustomLink>
        </footer>
    )
}