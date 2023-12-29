/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx}'];
export const theme = {
  extend: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1440px',
    },
    fontFamily: {
      inter: ['Inter']
    }
  },
};
export const plugins = [];

