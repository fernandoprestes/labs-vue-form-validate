import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from '@unocss/preset-icons';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  theme: {
    container: {
      center: true,
    },

    colors: {
      primary: {
        '50': '#ecfdf3',
        '100': '#d1fae1',
        '200': '#a7f3c9',
        '300': '#6ee7ac',
        '400': '#34d38b',
        '500': '#0fa968',
        '600': '#05965c',
        '700': '#04784c',
        '800': '#065f3e',
        '900': '#064e34',
      },
    },
  },

  transformers: [transformerVariantGroup()],

  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Roboto', 'sans'],
        mono: 'DM Mono',
        hand: ['Dancing Script', 'cursive'],
      },
    }),

    presetTypography(),
    presetIcons(),
    presetRemToPx(),
  ],
});
