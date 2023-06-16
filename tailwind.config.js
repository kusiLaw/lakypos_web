/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {

     colors : {
      'default_gold' : '#ffc13b',
      'default_blue' : '#1e3d59',
       'context_color' : '#ff6e40',
       'default_gray' : '#f5f0e1'
     },

    },
  },
  plugins: [],
}

