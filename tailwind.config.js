const spacing = new Array(450).fill(null).reduce((result, item, i) => {
    result[i] = i < 4 ? `${i}px` : `${i / 16}rem`
    return result
}, {})

const SIZES = [
    12, 20, 28, 30, 36, 50, 60, 65, 66, 90
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
            black: "#121212",
            grey: "#C1B8B8",
            "tundora-grey": "#4B4A4A",
            white: "#ffffff",
            red: "#ff0000",
        },
        borderRadius: {
            md: "25px",
            lg: "30px",
        },
        spacing,
        fontSize,
        extend: {
            animation: {
                "custom-bounce": "custom-bounce 1s ease-in-out infinite",
            },
            keyframes: {
                "custom-bounce": {
                    "0%, 100%": {
                        transform: "translateY(-20%)",
                    },
                    "50%": {
                        transform: "translateY(20%)",
                    }
                }
            },
        },
    },
    plugins: [],
}
