/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
		fontFamily: {
			'sans': ['Spiegel', 'ui-sans-serif', 'system-ui', 'Roboto', 'sans-serif'],
			'serif': ['BeaufortForLol', 'ui-serif', 'Georgia', 'serif'],
		},
	  letterSpacing: {
			normal: '0',
		  wide: '.01em',
		  wider: '.02em',
		  widest: '.03em'
	  },
    container: {
      center: true,
      padding: '0.75rem'
    },
    extend: {
	    transitionProperty: {
		    'border': 'border'
	    },
      boxShadow: {
        btn: "0 0 4px 0 rgba(0, 173, 181, 0.5)",
        btnxl: "0 0 8px 0 rgba(0, 173, 181, 0.5)"
      },
	    zIndex: {
				'999': '999',
		    '1000': '1000',
		    '1001': '1001',
		    '1002': '1002',
		    '1003': '1003',
	    },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg: {
          light: '#393E46',
          DEFAULT: '#222831',
        },
        faction: {
          lightbearer: '#1F3B6F',
          wilder: '#225F42',
          graveborn: '#3F5A2D',
          mauler: '#804C2E',
          celestial: '#88681E',
          hypogean: '#3f224b',
          dimensional: '#3b4679'
        },
        txt: {
          DEFAULT: '#EEEEEE',
        },
        theme: {
          dark: '#015559',
          DEFAULT: '#00ADB5',
          light: '#17F5FF'
        }
      }
    }
  },
  plugins: [],
}

