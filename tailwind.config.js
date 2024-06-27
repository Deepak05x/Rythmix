/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'max-375': { min: '320px', max: '375px' },
                'max-425': { min: '375px', max: '425px' },
                'exact-425': { raw: '(min-width: 425px) and (max-width: 425px)' },
                'max-640': { min: '425px', max: '640px' },
                'max-768': { min: '640px', max: '768px' },
                'max-1024': { min: '768px', max: '1024px' },
                'max-1170': { min: '1024px', max: '1170px' },
                'exact-1024': { raw: '(min-width: 1024px) and (max-width: 1024px)' },
                'max-1280': { min: '1170px', max: '1280px' },
                'max-1440': { min: '1280px', max: '1440px' },
                'max-2560': { min: '1440px', max: '2560px' },
                // 'max-1023' : { 'min'}
            },
        },
    },
    plugins: [],
};
