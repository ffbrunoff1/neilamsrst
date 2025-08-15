export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#fbd6a5',
          300: '#f8b86d',
          400: '#f59132',
          500: '#f2741d',
          600: '#e35d0a',
          700: '#bc460a',
          800: '#963811',
          900: '#7a2f11',
        },
      },
      backgroundImage: {
        'space-pattern':
          'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)',
        'space-nebula':
          'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'space-galaxy':
          'linear-gradient(45deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        orbit: 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 15px #0ea5e9',
          },
          '100%': {
            boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9',
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
