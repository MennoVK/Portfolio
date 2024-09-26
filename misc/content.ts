import {age} from "./time"


export const bio = `Hi! I'm Menno Veerkamp. \n A ${age} year old frontend developer from The Netherlands.`

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
    {work: "Internship frontend development - Numbered studio", year: "2023-24", description: "During my internship at Numbered I learned to work in a team on projects for big clients. This included working with modern web development techniques and focussing on performance, accessibility and SEO."},
    {work: "student assistent - Hogeschool Leiden", year: "2022-23", description: "As a student assistent my job was to assist teachers in helping first year students with their work. I was also available to share my personal school experiences and helped setting up learning environments."},
]

export const socials = [
    {platform: "LinkedIn", url: "https://www.linkedin.com/in/menno-veerkamp-3205b0258/"},
    {platform: "GitHub", url: "https://www.github.com/mennoVK"},
]

export const email = "Contact@mennoveerkamp.com"

export const projectsTitle = "To practise my skills I've done some personal and school related projects. Below are the most important ones."

export const projects = [
    // {
    //     title: "Arthur Bruyere portfolio", 
    //     description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page", 
    //     aspects: "dev", 
    //     year: 2024, 
    //     images: [
    //         {file: "test.png", alt: "testalt"},
    //         {file: "2project2.png", alt: "testalt"},
    //         {file: "2project1.png", alt: "testalt"},
    //         {file: "2project1.png", alt: "testalt"},
    //     ],
    //     link: "https://arthur-bruyere.com",
    // },
    {
        title: "Todo app", 
        description: "For a school project I chose to learn VueJS. To prove my knowledge I built this Todo list app and hosted it with firebase.", 
        aspects: "dev",
        year: 2023, 
        images: [
            {file: "todo-mobile.png", alt: "testalt"},
            {file: "todo-desktop-2.png", alt: "testalt"},
            {file: "todo-mobile-2.png", alt: "testalt"},
            {file: "todo-mobile-3.png", alt: "testalt"},
        ],
        link: "https://todoapp-b51e4.web.app/"
    },
    {
        title: "Stranger things practise website", 
        description: "For a school project i built a website in Stranger things theme with HTML, CSS and Javascript.", 
        aspects: "dev",
        year: 2022, 
        images: [
            {file: "stranger-mobile.png", alt: "testalt"},
            {file: "stranger-desktop.png", alt: "testalt"},
            {file: "stranger-mobile-2.png", alt: "testalt"},
            {file: "stranger-mobile-3.png", alt: "testalt"},
        ],
        link: "https://eindwebsite-iwder.web.app/"
    },
]

export const error = {title: "404 error", link: "Return to home"}
