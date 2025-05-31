/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-45': '#45E4A8',
        'blue-0D' : '#0d6efd',
        'blue-10' : '#107DCC',
        'blue-1C' : '#1C45BC',
        'blue-27': '#27A4FF',
        'blue-6A' : '#6AA9DC',
        'blue-94': '#94D2FF',
        'blue-F2' : '#F2FAFF',
        'blue-EE' : '#EEF8FF',
        'blue-17' : '#172B5E',
        'violet-21' : '#21175E',
        'gray-45': '#45557E',
        'gray-5C': '#5C5C5C',
        'gray-63': '#636375',
        'gray-C8' : '#C8C8C8',
        'gray-8A' : '#8A92A6',
        'gray-8C' : '#8C89A6',
        'gray-F4' : '#F4F4F4',
        'gray-F8' : '#F8F8F8',
        'gray-CE': '#CED4DA',
        'gray-A3' : '#A3B9C9',
        'gray-AA': '#AAB5C8',
        'gray-E9' : '#E9ECEF',
        'gray-F4F4FB': 'F4F4FB',
        'gray-F5': '#F5F4FB',
        'gray-F5F5F7': '#F5F5F7', 
        'brown-78' : '#787878',
        'pint-F9' : '#F97478',
        'pink-FF-drk' : '#FF788D',
        'pink-FF-light' : '#FFF8F8',
        'red-A9' : '#a94442',
        'red-DD' : '#dd4b39',
      },
      backgroundColor: {
        'green-45': '#45E4A8',
      },
      padding: {
        '2.5': '10px',
      },
      fontFamily :{
        'Montserrat': ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
