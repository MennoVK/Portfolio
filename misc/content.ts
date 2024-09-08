import age from "./age"


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
        title: "Project", 
        aspects: "dev",
        year: 2024, 
        images: [
        ]
    },
    {
        title: "test",
    },
]

export const bio = `Hi! I'm Menno Veerkamp. ${age} years old`

export const skills = [
    "html",
    "CSS/Sass",
    "Javascript",
    "React",
    "Nextjs",
    "Vue",
    "Laravel",
    "Git",
    "TailwindCSS",
]

export const experience = [
    {work: "student assistent - Hogeschool Leiden", year: "2022-23"},
    {work: "Internship frontend development - Numbered studio", year: "2023-24"},
]

export const socials = [
    {platform: "LinkedIn", url: "https://www.linkedin.com/in/menno-veerkamp-3205b0258/"},
    {platform: "GitHub", url: "https://www.github.com/mennoVK"},
]

export const email = "Contact@mennoveerkamp.com"