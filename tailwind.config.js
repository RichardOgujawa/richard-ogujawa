/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'center-bottom': 'center bottom -1px',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'lg-tablet': '720px',
        'laptop': '1050px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }}
        'xl': '1400px',
        'sm': '700px'
      },
      borderColor: {
        'col-neutral-100': '#c9c9c9',
        'col-neutral-250': '#A2A2A2',
        'col-neutral-500': '#707070',
        'col-neutral-900': '#090300',
        /*Primary*/
        'col-primary-100': '#958B8B',

      },
      backgroundColor: {
        'col-neutral-100': '#c9c9c9',
        'col-neutral-250': '#A2A2A2',
        'col-neutral-500': '#707070',
        'col-neutral-900': '#090300',
        'col-neutral-1000': '#090300',
        /*Primary*/
        'col-primary-100': '#958B8B',
      },
      textColor: {
        /*Neutral*/
        'col-neutral-100': '#c9c9c9',
        'col-neutral-250': '#A2A2A2',
        'col-neutral-500': '#707070',
        'col-neutral-900': '#040200',
        /*Primary*/
        'col-primary-100': '#958B8B',
      },
      backgroundImage: {
        'hero-img-gone': "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('/img/background-profile.jpg')",
        'mobile-hero-img': "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.7)), url('/img/background-profile.jpg')",
        'hero-img': "url('/img/background-profile.jpg')",
        'mountain': "url('/img/mountain-bg.svg')",
        'cv-bg-gradient': "linear-gradient(180deg, rgba(34,28,26,1) 0%, rgba(18,18,18,1) 35%, rgba(23,22,22,1) 100%)",
        'black-gradient': 'linear-gradient(180deg, rgb(149, 139, 139) -10%, rgb(4, 2, 0) 50%, rgb(4, 2, 0) 75%, rgba(149, 139, 139, 0.55) 130%);'
      },
      padding: {
        'container': "5rem"
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}