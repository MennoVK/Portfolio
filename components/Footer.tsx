import Link from "next/link"

import { socials } from "@/misc/content"


export const Footer = () => {
    return (
        <footer className="flex flex-col p-20 uppercase gap-60">
            <div className="flex justify-between">
                <p className="text-12 text-white/50">Contact me</p>
                <div className="flex flex-col gap-12 text-right">
                    {socials.map((social, idx) => (
                        <Link
                            key={idx}
                            target="_blank"
                            className="text-12"
                            href={social.url}>{social.platform}</Link>
                    ))}
                </div>
            </div>
            <Link
                target="_blank"
                className="underline text-[5.1vw] md:text-[5.4vw] xl:text-[5.55vw] text-center overflow-hidden"
                href={"mailto:contact@mennoveerkamp.com"}>contact@mennoveerkamp.com</Link>
        </footer>
    )
}