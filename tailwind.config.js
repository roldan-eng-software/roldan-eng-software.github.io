/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        hero: ['2.5rem', { lineHeight: '1.2' }],
        h1: ['2rem', { lineHeight: '1.3' }],
        'h1-lg': ['3rem', { lineHeight: '1.2' }],
        h2: ['1.75rem', { lineHeight: '1.35' }],
        'h2-lg': ['2.5rem', { lineHeight: '1.3' }],
        h3: ['1.25rem', { lineHeight: '1.4' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        section: '4rem',
        'section-lg': '5rem',
        'container-mobile': '1.5rem',
        'container-tablet': '1.5rem',
        'container-desktop': '2rem',
        'gap-mobile': '1rem',
        'gap-tablet': '1.5rem',
        'gap-desktop': '2rem',
      },
      minHeight: {
        'safe-screen': 'calc(100vh - env(safe-area-inset-bottom, 0px))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#2563eb',
          'primary-content': '#ffffff',
          secondary: '#7c3aed',
          'secondary-content': '#ffffff',
          accent: '#10b981',
          'accent-content': '#ffffff',
          neutral: '#1f2937',
          'neutral-content': '#f9fafb',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'base-content': '#1f2937',
          info: '#3b82f6',
          'info-content': '#ffffff',
          success: '#22c55e',
          'success-content': '#ffffff',
          warning: '#f59e0b',
          'warning-content': '#ffffff',
          error: '#ef4444',
          'error-content': '#ffffff',
        },
      },
    ],
  },
}
