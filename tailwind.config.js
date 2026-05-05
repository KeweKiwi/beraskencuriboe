/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#123D2A',
        deep: '#173B20',
        forest: '#1F5C3B',
        olive: '#557A32',
        fresh: '#83A94C',
        sage: '#C8D8A9',
        pale: '#DDEED7',
        cream: '#F5E8C7',
        paper: '#FFFDF5',
        beige: '#D9B982',
      },
      fontFamily: {
        display: ['"Lilita One"', '"Baloo 2"', 'Fredoka', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(18, 61, 42, 0.16)',
        label: '7px 9px 0 rgba(18, 61, 42, 0.15)',
      },
    },
  },
  plugins: [],
};
