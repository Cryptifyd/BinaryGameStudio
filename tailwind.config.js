module.exports = {
  content: ['app/storyblok/**/*.{vue,js}', 'app/components/**/*.{vue,js}', 'app/pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: '#40DFFF',
        accent: '#7A70FF',
        dark: '#101010',
        light: '#F9FAFB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #40DFFF 0%, #7A70FF 100%)',
      },
      animation: {
        glitch: 'glitch 3s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
