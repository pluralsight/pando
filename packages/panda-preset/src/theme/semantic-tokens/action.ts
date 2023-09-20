import { defineSentiment } from './index'

export const actionTokens = defineSentiment({
  action: {
    bg: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#4A33D1',
            _lightMode: '#3C28B1',
            _darkMode: '#4A33D1',
          },
        },
      },
      hover: {
        value: {
          _inkyBlueTheme: {
            base: '#3C28B1',
            _lightMode: '#30208D',
            _darkMode: '#3C28B1',
          },
        },
      },
      active: {
        value: {
          _inkyBlueTheme: {
            base: '#30208D',
            _lightMode: '#24186A',
            _darkMode: '#30208D',
          },
        },
      },
      100: {
        initial: {
          value: {
            _inkyBlueTheme: {
              base: '#2A2753',
              _lightMode: '#E5E8EB',
              _darkMode: '#2A2753',
            },
          },
        },
        hover: {
          value: {
            _inkyBlueTheme: {
              base: '#343063',
              _lightMode: '#F4F5F6',
              _darkMode: '#343063',
            },
          },
        },
        active: {
          value: {
            _inkyBlueTheme: {
              base: '#24186A',
              _lightMode: '#D1DFEF',
              _darkMode: '#24186A',
            },
          },
        },
      },
    },

    border: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#6855D9',
            _lightMode: '#0969DA',
            _darkMode: '#6855D9',
          },
        },
      },
      focus: {
        value: {
          _inkyBlueTheme: {
            base: '#3895FF',
            _lightMode: '#3895FF',
            _darkMode: '#3895FF',
          },
        },
      },
    },

    navigation: {
      initial: {
        value: {
          _inkyBlueTheme: {
            base: '#3895FF',
            _lightMode: '#0969DA',
            _darkMode: '#3895FF',
          },
        },
      },
      hover: {
        value: {
          _inkyBlueTheme: {
            base: '#3895FF',
            _lightMode: '#0969DA',
            _darkMode: '#3895FF',
          },
        },
      },
      visited: {
        value: {
          _inkyBlueTheme: {
            base: '#B17DD4',
            _lightMode: '#8C40BF',
            _darkMode: '#B17DD4',
          },
        },
      },
    },

    text: {
      100: {
        value: {
          _inkyBlueTheme: {
            base: '#E1DDF7',
            _lightMode: '#F4F7FA',
            _darkMode: '#E1DDF7',
          },
        },
      },
      200: {
        value: {
          _inkyBlueTheme: {
            base: '#A499E8',
            _lightMode: '#24186A',
            _darkMode: '#A499E8',
          },
        },
      },
      300: {
        value: {
          _inkyBlueTheme: {
            base: '#8677E0',
            _lightMode: '#3C28B1',
            _darkMode: '#8677E0',
          },
        },
      },
      inverse: {
        value: {
          _inkyBlueTheme: {
            base: '#E1DDF7',
            _lightMode: '#1A2737',
            _darkMode: '#E1DDF7',
          },
        },
      },
    },
  },
})
