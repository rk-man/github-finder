/** @type {import('tailwindcss').Config} */

// any sort of requiring packages, we can just reuire them in the plugins so we can now use the daisyi anywhere in the code (content)
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["cupcake", "dark", "cmyk", "cyberpunk"],
    },
    plugins: [require("daisyui")],
};
