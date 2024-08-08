import Image from "next/image"


export const Frontpage = () => {
    return (
        <section className="w-full h-screen">
            <div className="absolute h-full p-20 uppercase">
                <h1 className="relative w-3/4 -translate-y-1/2 text-50 top-1/2">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page</h1>
                <p className="absolute bottom-20 text-12">
                    Scroll down
                    <Image
                        src="/svgs/arrow-down.svg"
                        alt="arrow down"
                        width={16}
                        height={9}
                        className="inline mx-10 align-baseline"/>
                </p>
            </div>
            <Image
                src="/shader.gif"
                alt="home"
                width={1440}
                height={900}
                className="object-cover w-full h-full" />
        </section>
    )
}