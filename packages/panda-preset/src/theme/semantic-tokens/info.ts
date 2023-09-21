import { defineSentiment } from './index'

export const infoTokens = defineSentiment({
  info: {
    border: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#00A3FF',
            _lightMode: '#00A3FF',
            _darkMode: '#00A3FF',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#003655',
            _lightMode: '#AAE0FF',
            _darkMode: '#003655',
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#D5F0FF',
            _lightMode: '#003655',
            _darkMode: '#D5F0FF',
          },
        },
      },
      100: {
        value: {
          _inkyBlueTheme: {
            base: '#80D1FF',
            _lightMode: '#005180',
            _darkMode: '#80D1FF',
          },
        },
      },
      200: {
        value: {
          _inkyBlueTheme: {
            base: '#2BB2FF',
            _lightMode: '#0088D5',
            _darkMode: '#2BB2FF',
          },
        },
      },
    },
  },
})
