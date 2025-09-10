/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bolalar uchun yumshoq va yorqin ranglar
        kids: {
          'sky-blue': '#87CEEB',      // Yumshoq osmon ko'k
          'soft-pink': '#FFB6C1',     // Yumshoq pushti
          'mint-green': '#98FB98',    // Yashil yalpiz
          'lavender': '#E6E6FA',      // Lavanda
          'peach': '#FFCBA4',         // Shaftoli
          'baby-blue': '#B0E0E6',     // Chaqaloq ko'k
          'cream': '#FFF8DC',         // Krem
          'coral': '#FF7F7F',         // Marjon qizil
          'lemon': '#FFFACD',         // Limon sariq
          'lilac': '#DDA0DD',         // Binafsha
        },
        primary: {
          main: '#6C63FF',            // Asosiy binafsha
          light: '#9C88FF',           // Ochiq binafsha
          dark: '#4B4ACF',            // To'q binafsha
        },
        secondary: {
          orange: '#FFB347',          // Yumshoq apelsin
          green: '#90EE90',           // Ochiq yashil
          yellow: '#F0E68C',          // Yumshoq sariq
        },
        neutral: {
          'cream-white': '#FEFEFE',   // Krem oq
          'soft-gray': '#F5F5F5',     // Yumshoq kulrang
          'light-gray': '#E8E8E8',    // Ochiq kulrang
          'medium-gray': '#C0C0C0',   // O'rta kulrang
        },
        text: {
          primary: '#2D3748',         // Asosiy matn
          secondary: '#4A5568',       // Ikkinchi darajali matn
          light: '#718096',           // Ochiq matn
          white: '#FFFFFF',           // Oq matn
        },
        background: {
          main: '#FAFBFC',            // Asosiy background
          card: '#FFFFFF',            // Card background
          soft: '#F8F9FA',            // Yumshoq background
        },
        border: {
          light: '#E2E8F0',           // Ochiq border
          medium: '#CBD5E0',          // O'rta border
        },
        shadow: {
          soft: 'rgba(0, 0, 0, 0.08)', // Yumshoq soya
          medium: 'rgba(0, 0, 0, 0.12)', // O'rta soya
          strong: 'rgba(0, 0, 0, 0.16)', // Kuchli soya
        }
      }
    },
  },
  plugins: [],
}