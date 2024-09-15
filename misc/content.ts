import {age} from "./time"


export const projectsTitle = "To practise my skills i've done some personal and school related projects. Below are the most important ones."

export const projects = [
    {
        title: "Arthur Bruyere portfolio", 
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page", 
        aspects: "dev", 
        year: 2024, 
        images: [
            {file: "1project1.png", alt: "testalt"},
            {file: "1project2.png", alt: "testalt"},
            {file: "1project1.png", alt: "testalt"},
            {file: "1project1.png", alt: "testalt"},
        ],
        link: "https://arthur-bruyere.com",
    },
    {
        title: "Todo app", 
        description: "For a school project i chose to learn VueJS. To prove my knowledge i built this Todo list app and hosted it with firebase.", 
        aspects: "dev",
        year: 2023, 
        images: [
            {file: "2project1.png", alt: "testalt"},
            {file: "2project2.png", alt: "testalt"},
        ],
        link: "https://todoapp-b51e4.web.app/"
    },
]

export const bio = `Hi! I'm Menno Veerkamp. A ${age} year old frontend developer from The Netherlands.`

export const skills = [
    "html",
    "(s)css",
    "Javascript",
    "React",
    "Nextjs",
    "Vue",
    "Svelte",
    "TailwindCSS",
    "Git",
]

export const experience = [
    {work: "student assistent - Hogeschool Leiden", year: "2022-23", description: "As a student assistent my job was to assist teachers in helping first year students with their work. I was also available to share my personal school experiences and helped setting up learning environments."},
    {work: "Internship frontend development - Numbered studio", year: "2023-24", description: "During my internship at Numbered i learned to work in a team on projects for big clients. This included working with modern web development techniques and focussing on performance, accesibility and SEO."},
]

export const socials = [
    {platform: "LinkedIn", url: "https://www.linkedin.com/in/menno-veerkamp-3205b0258/"},
    {platform: "GitHub", url: "https://www.github.com/mennoVK"},
]

export const email = "Contact@mennoveerkamp.com"

export const error = {title: "404 error", link: "Return to home"}