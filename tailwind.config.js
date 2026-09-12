/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F8FAFC',
          secondary: '#F1F5F9',
          tertiary: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFFFF',
          hover: '#F8FAFC',
          border: 'rgba(14, 116, 144, 0.14)',
        },
        brand: {
          dark: '#164E63',
          primary: '#0E7490',
          teal: '#0D9488',
          cyan: '#06B6D4',
          cyanLight: '#E0F2FE',
          amber: '#D97706',
          amberBright: '#F59E0B',
          amberLight: '#FEF3C7',
        },
        slateText: {
          primary: '#0F172A',
          secondary: '#334155',
          muted: '#64748B',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      borderRadius: {
        'card': '20px',
        'xl2': '24px',
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(14, 116, 144, 0.18)',
        'glow-amber': '0 0 25px rgba(245, 158, 11, 0.22)',
        'card-soft': '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 20px 40px -15px rgba(14, 116, 144, 0.14)',
      }
    },
  },
  plugins: [],
}
