import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7ED',
          100: '#CCEFDB',
          200: '#99DFB7',
          300: '#66CF93',
          400: '#33BF6F',
          500: '#009640',  // Main primary color (changed to #009640)
          600: '#007833',
          700: '#005A26',
          800: '#003C1A',
          900: '#001E0D',
        },
        secondary: {
          50: '#E6F3FB',
          100: '#CCE7F7',
          200: '#99CFEF',
          300: '#66B7E7',
          400: '#339FDF',
          500: '#3498DB',  // Main secondary color (swapped with previous primary)
          600: '#2A7AAF',
          700: '#205B83',
          800: '#153D58',
          900: '#0B1E2C',
        },
        background: {
          50: '#FFFFFF',
          100: '#FDFEFF',
          200: '#FBFDFE',
           300: '#F9FCFE',
          400: '#F8FBFE',
          500: '#F7FBFE',  // Main background color
          600: '#C6C9CB',
          700: '#949798',
          800: '#636466',
          900: '#313233',
        },
        text: {
          50: '#E9E9E9',
          100: '#D3D3D3',
          200: '#A6A6A6',
          300: '#7A7A7A',
          400: '#4D4D4D',
          500: '#222222',  // Main text color
          600: '#1B1B1B',
          700: '#141414',
          800: '#0E0E0E',
          900: '#070707',
        },
        accent: {
          50: '#FFF7E6',
          100: '#FFEFCC',
          200: '#FFDF99',
          300: '#FFCF66',
          400: '#FFBF33',
          500: '#FFAF00',  // Main accent color (kept as is for contrast)
          600: '#CC8C00',
          700: '#996900',
          800: '#664600',
          900: '#332300',
        },
        success: {
          50: '#E6FAF0',
          100: '#CCF5E1',
          200: '#99EBC3',
          300: '#66E1A5',
          400: '#33D787',
          500: '#00CD69',  // Main success color
          600: '#00A454',
          700: '#007B3F',
          800: '#00522A',
          900: '#002915',
        },
        error: {
          50: '#FDEAEA',
          100: '#FBD5D5',
          200: '#F7ABAB',
          300: '#F38181',
          400: '#EF5757',
          500: '#EB2D2D',  // Main error color
          600: '#BC2424',
          700: '#8D1B1B',
          800: '#5E1212',
          900: '#2F0909',
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
}
