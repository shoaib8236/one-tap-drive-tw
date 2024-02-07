import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      'primary-dark': '#ff6f00',
      "primary": "#ffba00",
      "primary-opacity-75": "rgba(255, 186, 0, 0.75)",
      "primary-opacity-50": "rgba(255, 186, 0, 0.5)",
      'primary-opacity-25': 'rgba(255, 186, 0, 0.25)',
      "secondary": "#ff6f00",
      "danger": "#ff3d00",
      "success": "#00c853",
      "info": "#00b0ff",
      "warning": "#ff9100",
      "dark": "#212121",
      "light": "#FFFFFF",
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    backgroundImage: {
      "hero": "url('../public/hero.jpg')",
      'mercedes': "url('../public/mercedes.webp')",
      'striped-background': "url('../public/striped-background.png')",
      'cta_car_action': "url('../public/cta_car_action.png')", 
    },



    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },



    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },



      keyframes: {
        rubber: {
          '0%': { transform: 'scaleX(1)' },
          '12.5%': { transform: 'scaleX(1.12) scaleY(0.75)' },
          '25%': { transform: 'scaleX(0.85) scaleY(1)' },
          '37.5%': { transform: 'scaleX(1.09) scaleY(0.85)' },
          '50%': { transform: 'scaleX(0.9) scaleY(1)' },
          '62.5%': { transform: 'scaleX(1.05) scaleY(0.95)' },
          '75%': { transform: 'scaleX(1) scaleY(1)' },
        }
      },

      animation: {
        rubber: 'rubber 1s ease-in-out both',
      },

    },
  },
  
};
export default config;
