import { defineSentiment } from './index'

export const warningTokens = defineSentiment({
  warning: {
    border: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#FFBA0D',
            _lightMode: '#FFBA0D',
            _darkMode: '#FFBA0D',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#6B4C00',
            _lightMode: '#FFEDC0',
            _darkMode: '#6B4C00',
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#FFF6E0',
            _lightMode: '#352600',
            _darkMode: '#FFF6E0',
          },
        },
      },
      100: {
        value: {
          _inkyBlueTheme: {
            base: '#FFE4A1',
            _lightMode: '#A17300',
            _darkMode: '#FFE4A1',
          },
        },
      },
      200: {
        value: {
          _inkyBlueTheme: {
            base: '#FFD262',
            _lightMode: '#D69900',
            _darkMode: '#FFD262',
          },
        },
      },
    },
  },
})
