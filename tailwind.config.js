/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#15a362'
            },

            fontFamily: {
                zeyada: 'Zeyada',
                sans: 'DMSans',
                poppin: 'poppin',
                bPoppin: 'bPoppin',
                sbPoppin: 'sbPoppin',
                ebPoppin: 'ebPoppin',
            }
        },
    },
    plugins: [],
}
