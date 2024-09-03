const spacing = new Array(450).fill(null).reduce((result, item, i) => {
    result[i] = i < 4 ? `${i}px` : `${i / 16}rem`
    return result
}, {})

const SIZES = [
    12, 20, 30, 36, 50, 65, 66
];

const max = (px) => {
    return `max(${px}px,${px / 16}rem)`;
};

const fontSize = {};
SIZES.forEach((size) => {
    fontSize[size] = [max(size)];
});

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./blocks/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            current: "currentColor",
            white: "#ffffff",
            "tundora-grey": "#4B4A4A",
            black: "#121212",
            red: "#ff0000",
        },
        borderRadius: {
            lg: "30px",
        },
        spacing,
        fontSize,
        extend: {
            
        },
    },
    plugins: [],
}
