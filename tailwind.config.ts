module.exports = {
    theme: {
      extend: {
        colors: {
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
        },
        typography: (theme: any) => ({
          DEFAULT: {
            css: {
              color: '#fff',
              a: {
                color: '#3182ce',
                '&:hover': {
                  color: '#2c5282',
                },
              },
              h1: {
                color: '#fff',
              },
              h2: {
                color: '#fff',
              },
              h3: {
                color: '#fff',
              },
              strong: {
                color: '#fff',
              },
              code: {
                color: '#fff',
              },
              blockquote: {
                color: '#cbd5e0',
              },
              p: {
                marginTop: theme('spacing.6'),
                marginBottom: theme('spacing.6'),
              },
              ul: {
                li: {
                  marginTop: theme('spacing.4'),
                  marginBottom: theme('spacing.4'),
                },
              },
              ol: {
                li: {
                  marginTop: theme('spacing.4'),
                  marginBottom: theme('spacing.4'),
                },
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],

    // Other configurations...
  }