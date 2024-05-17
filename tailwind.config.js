/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      position: {
        '0%': {
          top: '50%',
          left: '50%',
        }
      },
      fadein: {
        '0%': {
          transform: 'translateY(100px)',
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        }
      },
      opacity: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        }
      },
      jumpin: {
        "0%": { transform: "translate3d(-50%, -70%, 0)" },
        "50%": { transform: "translate3d(-50%, -80%, 0)" },
        "100%": { transform: "translate3d(-50%, -50%, 0)"}
      },
    },
    animation: {
      position: 'position 1s ease-in-out',
      fadein: 'fadein 1s ease-in-out',
      jumpin: "jumpin 0.4s ease-in",
      opacity: 'opacity 1s ease-in-out',
    },
    fontFamily: {
      'nunito': ['Nunito','sans-serif'],
    }
  },
  plugins: [],
}