import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Enables dark mode using "class" strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			mobile: '375px',
  			desktop: '1440px'
  		}
  	},
  	extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
  		colors: {
  			darkBlueElements: 'hsl(209, 23%, 22%)',
  			veryDarkBlueBg: 'hsl(207, 26%, 17%)',
  			veryDarkBlueText: 'hsl(200, 15%, 8%)',
  			darkGrayInput: 'hsl(0, 0%, 52%)',
  			veryLightGrayBg: 'hsl(0, 0%, 98%)',
  			whiteText: 'hsl(0, 0%, 100%)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
        icon:'hsl(var(--icon))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: ['Nunito Sans"', "sans-serif"]
  		},
  		fontSize: {
  			body: '14px',
  			detail: '16px'
  		},
  		fontWeight: {
  			light: '300',
  			semibold: '600',
  			bold: '800'
  		},
  		container: {
  			center: 'true',
  			padding: '2rem',
  			screens: {
  				'2xl': '1400px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
