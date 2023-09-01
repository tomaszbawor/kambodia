import type { Config } from 'tailwindcss';

// Helper function to generate shades
import chroma from 'chroma-js';

function generateShades(baseColor: string) {
  return {
    '50': chroma(baseColor).brighten(1.5).hex(),
    '100': chroma(baseColor).brighten(1.2).hex(),
    '200': chroma(baseColor).brighten(0.9).hex(),
    '300': chroma(baseColor).brighten(0.6).hex(),
    '400': chroma(baseColor).brighten(0.3).hex(),
    '500': baseColor,
    '600': chroma(baseColor).darken(0.3).hex(),
    '700': chroma(baseColor).darken(0.6).hex(),
    '800': chroma(baseColor).darken(0.9).hex(),
    '900': chroma(baseColor).darken(1.2).hex(),
  };
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kam: {
          primary: {
            dark: generateShades('#352F44'),
            grey: generateShades('#5C5470'),
            lightgray: generateShades('#B9B4C7'),
            beige: generateShades('#FAF0E6'),
          },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
