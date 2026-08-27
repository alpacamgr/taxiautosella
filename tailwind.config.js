/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8EE',
          100: '#F6F0DC',
          200: '#EDE0B9',
          300: '#E3CE94',
          400: '#D8BD70',
          500: '#D4AF37', // Champagne Gold
          600: '#B89326',
          700: '#8C6F1B',
          800: '#614C12',
          900: '#3A2E09',
        },
        obsidian: {
          900: '#07090E',
          800: '#0B0F17',
          700: '#111827',
          600: '#1F2937',
        },
        alpine: {
          900: '#071526',
          800: '#0C2340',
          700: '#143865',
          600: '#1D4ED8',
          500: '#3B82F6',
          400: '#60A5FA',
          300: '#93C5FD',
          100: '#E0F2FE',
          50: '#F0F9FF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(212, 175, 55, 0.15)',
        'tech': '0 20px 30px -10px rgba(5, 150, 105, 0.15)',
        'adventure': '0 20px 30px -10px rgba(56, 189, 248, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
