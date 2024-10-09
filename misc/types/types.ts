export type imageType = {
    file: string;
    alt: string;
}

export type ProjectType = {
    title: string,
    description: string,
    aspects: string,
    year: number,
    images: imageType[],
    link: string,
}