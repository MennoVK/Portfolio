import { socials } from "@/misc/content"
import { email } from "@/misc/content"
import { currentYear } from "@/misc/time"

import { CustomLink } from "./CustomLink"


export const Footer = () => {
    return (
        <footer className="flex flex-col p-10 overflow-hidden uppercase sm:p-20">
            <div className="flex justify-between">
                <p className="text-12 lg:text-14 text-white/50">Contact me</p>
                <div className="flex flex-col items-end gap-12">
                    {socials.map((social, idx) => (
                        <CustomLink
                            key={idx}
                            underline
                            target="_blank"
                            className="text-12 lg:text-14"
                            href={social.url}>{social.platform}</CustomLink>
                        
                    ))}
                    <p className="mt-48 text-white/50 text-12 lg:text-14 lg:mt-60">© Menno Veerkamp {currentYear}</p>
                    <p className="mb-48 text-white/50 text-12 lg:text-14 lg:mb-60">Design:&nbsp;
                        <CustomLink
                            href="https://www.instagram.com/experimentalthingz"
                            target="_blank" 
                            underline
                            active>Arthur Bruyere</CustomLink>
                    </p>
                </div>
            </div>
            <CustomLink
                target="_blank"
                className="text-[5.5vw] sm:text-[5.6vw] md:text-[5.7vw] lg:text-[5.75vw] xl:text-[5.8vw] 2xl:text-[5.9vw] text-center leading-tight sm:leading-none flex justify-between w-full"
                href={`mailto:${email}`}
                underline
                active
            >
                <span>Contact</span>
                <span className="leading-none sm:leading-[0.85]">@</span>
                <span>MennoVeerkamp.com</span>
            </CustomLink>
        </footer>
    )
}