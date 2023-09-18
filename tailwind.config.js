/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {colors:{
      "indigoFromi":"#1F7DB4",
      "skyFromi":"#7DB8D6",
      "blackFromi":"#12222B",
      "blackFromi":"#534e48",
    }},
  },
  plugins: [],
}

