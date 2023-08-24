tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Plus Jakarta Sans', 'sans-serif']
		},
		extend: {
			fontSize: {
				'3.5xl': '2rem',
				'5.5xl': ['min(14vw,3.4rem)', {lineHeight: '3.8rem', letterSpacing: '-0.01em'}],
				'8.5xl': ['6.3rem', {lineHeight: '6.5rem', letterSpacing: '-0.01em'}],
			},
			colors: {
				'red': 'hsl(1, 90%, 64%)',
				'blue': 'hsl(219, 85%, 26%)',
				'white': 'hsl(0, 0%, 100%)',
				'gray-blue': {
					'50': 'hsl(210, 60%, 98%)',
					'100': 'hsl(211, 68%, 94%)',
					'200': 'hsl(205, 33%, 90%)',
					'300': 'hsl(219, 14%, 63%)',
					'400': 'hsl(219, 12%, 42%)',
					'500': 'hsl(224, 21%, 14%)',
				}
			},
		}
	}
}