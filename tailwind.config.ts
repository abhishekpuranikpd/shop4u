import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#bfef8f",

          secondary: "#3fc4f4",

          accent: "#db8774",

          neutral: "#1b1622",

          "base-100": "#e4e2e9",

          info: "#3e8bea",

          success: "#169c88",

          warning: "#af7112",
          body : {
              "background-color" : "#e3e6e6"
          },

          error: "#e56c7e",
        },
      },
    ],
  },

}
export default config
