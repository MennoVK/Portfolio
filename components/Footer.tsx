import Link from "next/link"


export const Footer = () => {
    return (
        <footer className="flex flex-col p-20 uppercase gap-60">
            <div className="flex justify-between">
                <p className="text-12 text-white/50">Contact me</p>
                <div className="flex flex-col gap-12 text-right">
                    <Link
                        target="_blank"
                        className="text-12"
                        href={"https://www.linkedin.com/in/menno-veerkamp-3205b0258/"}>LinkedIn</Link>
                    <Link
                        target="_blank"
                        className="text-12"
                        href={"https://github.com/MennoVK"} >GitHub</Link>
                </div>
            </div>
            <Link
                target="_blank"
                className="underline text-[5.1vw] md:text-[5.4vw] xl:text-[5.55vw] text-center overflow-hidden"
                href={"mailto:contact@mennoveerkamp.com"}>contact@mennoveerkamp.com</Link>
        </footer>
    )
}