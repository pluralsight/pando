const tokens = {
  'borders.none': {
    value: 'none',
    variable: 'var(--pando-borders-none)',
  },
  'easings.default': {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    variable: 'var(--pando-easings-default)',
  },
  'easings.linear': {
    value: 'linear',
    variable: 'var(--pando-easings-linear)',
  },
  'easings.in': {
    value: 'cubic-bezier(0.4, 0, 1, 1)',
    variable: 'var(--pando-easings-in)',
  },
  'easings.out': {
    value: 'cubic-bezier(0, 0, 0.2, 1)',
    variable: 'var(--pando-easings-out)',
  },
  'easings.in-out': {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    variable: 'var(--pando-easings-in-out)',
  },
  'durations.fastest': {
    value: '50ms',
    variable: 'var(--pando-durations-fastest)',
  },
  'durations.faster': {
    value: '100ms',
    variable: 'var(--pando-durations-faster)',
  },
  'durations.fast': {
    value: '150ms',
    variable: 'var(--pando-durations-fast)',
  },
  'durations.normal': {
    value: '200ms',
    variable: 'var(--pando-durations-normal)',
  },
  'durations.slow': {
    value: '300ms',
    variable: 'var(--pando-durations-slow)',
  },
  'durations.slower': {
    value: '400ms',
    variable: 'var(--pando-durations-slower)',
  },
  'durations.slowest': {
    value: '500ms',
    variable: 'var(--pando-durations-slowest)',
  },
  'radii.xs': {
    value: '0.125rem',
    variable: 'var(--pando-radii-xs)',
  },
  'radii.sm': {
    value: '0.25rem',
    variable: 'var(--pando-radii-sm)',
  },
  'radii.md': {
    value: '0.375rem',
    variable: 'var(--pando-radii-md)',
  },
  'radii.lg': {
    value: '0.5rem',
    variable: 'var(--pando-radii-lg)',
  },
  'radii.xl': {
    value: '0.75rem',
    variable: 'var(--pando-radii-xl)',
  },
  'radii.2xl': {
    value: '1rem',
    variable: 'var(--pando-radii-2xl)',
  },
  'radii.3xl': {
    value: '1.5rem',
    variable: 'var(--pando-radii-3xl)',
  },
  'radii.full': {
    value: '9999px',
    variable: 'var(--pando-radii-full)',
  },
  'fontWeights.thin': {
    value: '100',
    variable: 'var(--pando-font-weights-thin)',
  },
  'fontWeights.extralight': {
    value: '200',
    variable: 'var(--pando-font-weights-extralight)',
  },
  'fontWeights.light': {
    value: '300',
    variable: 'var(--pando-font-weights-light)',
  },
  'fontWeights.normal': {
    value: '400',
    variable: 'var(--pando-font-weights-normal)',
  },
  'fontWeights.medium': {
    value: '500',
    variable: 'var(--pando-font-weights-medium)',
  },
  'fontWeights.semibold': {
    value: '600',
    variable: 'var(--pando-font-weights-semibold)',
  },
  'fontWeights.bold': {
    value: '700',
    variable: 'var(--pando-font-weights-bold)',
  },
  'fontWeights.extrabold': {
    value: '800',
    variable: 'var(--pando-font-weights-extrabold)',
  },
  'fontWeights.black': {
    value: '900',
    variable: 'var(--pando-font-weights-black)',
  },
  'lineHeights.none': {
    value: '1',
    variable: 'var(--pando-line-heights-none)',
  },
  'lineHeights.tight': {
    value: '1.25',
    variable: 'var(--pando-line-heights-tight)',
  },
  'lineHeights.snug': {
    value: '1.375',
    variable: 'var(--pando-line-heights-snug)',
  },
  'lineHeights.normal': {
    value: '1.5',
    variable: 'var(--pando-line-heights-normal)',
  },
  'lineHeights.relaxed': {
    value: '1.625',
    variable: 'var(--pando-line-heights-relaxed)',
  },
  'lineHeights.loose': {
    value: '2',
    variable: 'var(--pando-line-heights-loose)',
  },
  'letterSpacings.tighter': {
    value: '-0.05em',
    variable: 'var(--pando-letter-spacings-tighter)',
  },
  'letterSpacings.tight': {
    value: '-0.025em',
    variable: 'var(--pando-letter-spacings-tight)',
  },
  'letterSpacings.normal': {
    value: '0em',
    variable: 'var(--pando-letter-spacings-normal)',
  },
  'letterSpacings.wide': {
    value: '0.025em',
    variable: 'var(--pando-letter-spacings-wide)',
  },
  'letterSpacings.wider': {
    value: '0.05em',
    variable: 'var(--pando-letter-spacings-wider)',
  },
  'letterSpacings.widest': {
    value: '0.1em',
    variable: 'var(--pando-letter-spacings-widest)',
  },
  'fontSizes.2xs': {
    value: '0.5rem',
    variable: 'var(--pando-font-sizes-2xs)',
  },
  'fontSizes.xs': {
    value: '0.75rem',
    variable: 'var(--pando-font-sizes-xs)',
  },
  'fontSizes.sm': {
    value: '0.875rem',
    variable: 'var(--pando-font-sizes-sm)',
  },
  'fontSizes.md': {
    value: '1rem',
    variable: 'var(--pando-font-sizes-md)',
  },
  'fontSizes.lg': {
    value: '1.125rem',
    variable: 'var(--pando-font-sizes-lg)',
  },
  'fontSizes.xl': {
    value: '1.25rem',
    variable: 'var(--pando-font-sizes-xl)',
  },
  'fontSizes.2xl': {
    value: '1.5rem',
    variable: 'var(--pando-font-sizes-2xl)',
  },
  'fontSizes.3xl': {
    value: '1.875rem',
    variable: 'var(--pando-font-sizes-3xl)',
  },
  'fontSizes.4xl': {
    value: '2.25rem',
    variable: 'var(--pando-font-sizes-4xl)',
  },
  'fontSizes.5xl': {
    value: '3rem',
    variable: 'var(--pando-font-sizes-5xl)',
  },
  'fontSizes.6xl': {
    value: '3.75rem',
    variable: 'var(--pando-font-sizes-6xl)',
  },
  'fontSizes.7xl': {
    value: '4.5rem',
    variable: 'var(--pando-font-sizes-7xl)',
  },
  'fontSizes.8xl': {
    value: '6rem',
    variable: 'var(--pando-font-sizes-8xl)',
  },
  'fontSizes.9xl': {
    value: '8rem',
    variable: 'var(--pando-font-sizes-9xl)',
  },
  'shadows.xs': {
    value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    variable: 'var(--pando-shadows-xs)',
  },
  'shadows.sm': {
    value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    variable: 'var(--pando-shadows-sm)',
  },
  'shadows.md': {
    value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    variable: 'var(--pando-shadows-md)',
  },
  'shadows.lg': {
    value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    variable: 'var(--pando-shadows-lg)',
  },
  'shadows.xl': {
    value:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    variable: 'var(--pando-shadows-xl)',
  },
  'shadows.2xl': {
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    variable: 'var(--pando-shadows-2xl)',
  },
  'shadows.inner': {
    value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    variable: 'var(--pando-shadows-inner)',
  },
  'colors.current': {
    value: 'currentColor',
    variable: 'var(--pando-colors-current)',
  },
  'colors.black': {
    value: '#000',
    variable: 'var(--pando-colors-black)',
  },
  'colors.white': {
    value: '#fff',
    variable: 'var(--pando-colors-white)',
  },
  'colors.transparent': {
    value: 'rgb(0 0 0 / 0)',
    variable: 'var(--pando-colors-transparent)',
  },
  'colors.rose.50': {
    value: '#fff1f2',
    variable: 'var(--pando-colors-rose-50)',
  },
  'colors.rose.100': {
    value: '#ffe4e6',
    variable: 'var(--pando-colors-rose-100)',
  },
  'colors.rose.200': {
    value: '#fecdd3',
    variable: 'var(--pando-colors-rose-200)',
  },
  'colors.rose.300': {
    value: '#fda4af',
    variable: 'var(--pando-colors-rose-300)',
  },
  'colors.rose.400': {
    value: '#fb7185',
    variable: 'var(--pando-colors-rose-400)',
  },
  'colors.rose.500': {
    value: '#f43f5e',
    variable: 'var(--pando-colors-rose-500)',
  },
  'colors.rose.600': {
    value: '#e11d48',
    variable: 'var(--pando-colors-rose-600)',
  },
  'colors.rose.700': {
    value: '#be123c',
    variable: 'var(--pando-colors-rose-700)',
  },
  'colors.rose.800': {
    value: '#9f1239',
    variable: 'var(--pando-colors-rose-800)',
  },
  'colors.rose.900': {
    value: '#881337',
    variable: 'var(--pando-colors-rose-900)',
  },
  'colors.rose.950': {
    value: '#4c0519',
    variable: 'var(--pando-colors-rose-950)',
  },
  'colors.pink.50': {
    value: '#fdf2f8',
    variable: 'var(--pando-colors-pink-50)',
  },
  'colors.pink.100': {
    value: '#fce7f3',
    variable: 'var(--pando-colors-pink-100)',
  },
  'colors.pink.200': {
    value: '#fbcfe8',
    variable: 'var(--pando-colors-pink-200)',
  },
  'colors.pink.300': {
    value: '#f9a8d4',
    variable: 'var(--pando-colors-pink-300)',
  },
  'colors.pink.400': {
    value: '#f472b6',
    variable: 'var(--pando-colors-pink-400)',
  },
  'colors.pink.500': {
    value: '#ec4899',
    variable: 'var(--pando-colors-pink-500)',
  },
  'colors.pink.600': {
    value: '#db2777',
    variable: 'var(--pando-colors-pink-600)',
  },
  'colors.pink.700': {
    value: '#be185d',
    variable: 'var(--pando-colors-pink-700)',
  },
  'colors.pink.800': {
    value: '#9d174d',
    variable: 'var(--pando-colors-pink-800)',
  },
  'colors.pink.900': {
    value: '#831843',
    variable: 'var(--pando-colors-pink-900)',
  },
  'colors.pink.950': {
    value: '#500724',
    variable: 'var(--pando-colors-pink-950)',
  },
  'colors.fuchsia.50': {
    value: '#fdf4ff',
    variable: 'var(--pando-colors-fuchsia-50)',
  },
  'colors.fuchsia.100': {
    value: '#fae8ff',
    variable: 'var(--pando-colors-fuchsia-100)',
  },
  'colors.fuchsia.200': {
    value: '#f5d0fe',
    variable: 'var(--pando-colors-fuchsia-200)',
  },
  'colors.fuchsia.300': {
    value: '#f0abfc',
    variable: 'var(--pando-colors-fuchsia-300)',
  },
  'colors.fuchsia.400': {
    value: '#e879f9',
    variable: 'var(--pando-colors-fuchsia-400)',
  },
  'colors.fuchsia.500': {
    value: '#d946ef',
    variable: 'var(--pando-colors-fuchsia-500)',
  },
  'colors.fuchsia.600': {
    value: '#c026d3',
    variable: 'var(--pando-colors-fuchsia-600)',
  },
  'colors.fuchsia.700': {
    value: '#a21caf',
    variable: 'var(--pando-colors-fuchsia-700)',
  },
  'colors.fuchsia.800': {
    value: '#86198f',
    variable: 'var(--pando-colors-fuchsia-800)',
  },
  'colors.fuchsia.900': {
    value: '#701a75',
    variable: 'var(--pando-colors-fuchsia-900)',
  },
  'colors.fuchsia.950': {
    value: '#4a044e',
    variable: 'var(--pando-colors-fuchsia-950)',
  },
  'colors.purple.50': {
    value: '#faf5ff',
    variable: 'var(--pando-colors-purple-50)',
  },
  'colors.purple.100': {
    value: '#f3e8ff',
    variable: 'var(--pando-colors-purple-100)',
  },
  'colors.purple.200': {
    value: '#e9d5ff',
    variable: 'var(--pando-colors-purple-200)',
  },
  'colors.purple.300': {
    value: '#d8b4fe',
    variable: 'var(--pando-colors-purple-300)',
  },
  'colors.purple.400': {
    value: '#c084fc',
    variable: 'var(--pando-colors-purple-400)',
  },
  'colors.purple.500': {
    value: '#a855f7',
    variable: 'var(--pando-colors-purple-500)',
  },
  'colors.purple.600': {
    value: '#9333ea',
    variable: 'var(--pando-colors-purple-600)',
  },
  'colors.purple.700': {
    value: '#7e22ce',
    variable: 'var(--pando-colors-purple-700)',
  },
  'colors.purple.800': {
    value: '#6b21a8',
    variable: 'var(--pando-colors-purple-800)',
  },
  'colors.purple.900': {
    value: '#581c87',
    variable: 'var(--pando-colors-purple-900)',
  },
  'colors.purple.950': {
    value: '#3b0764',
    variable: 'var(--pando-colors-purple-950)',
  },
  'colors.violet.50': {
    value: '#f5f3ff',
    variable: 'var(--pando-colors-violet-50)',
  },
  'colors.violet.100': {
    value: '#ede9fe',
    variable: 'var(--pando-colors-violet-100)',
  },
  'colors.violet.200': {
    value: '#ddd6fe',
    variable: 'var(--pando-colors-violet-200)',
  },
  'colors.violet.300': {
    value: '#c4b5fd',
    variable: 'var(--pando-colors-violet-300)',
  },
  'colors.violet.400': {
    value: '#a78bfa',
    variable: 'var(--pando-colors-violet-400)',
  },
  'colors.violet.500': {
    value: '#8b5cf6',
    variable: 'var(--pando-colors-violet-500)',
  },
  'colors.violet.600': {
    value: '#7c3aed',
    variable: 'var(--pando-colors-violet-600)',
  },
  'colors.violet.700': {
    value: '#6d28d9',
    variable: 'var(--pando-colors-violet-700)',
  },
  'colors.violet.800': {
    value: '#5b21b6',
    variable: 'var(--pando-colors-violet-800)',
  },
  'colors.violet.900': {
    value: '#4c1d95',
    variable: 'var(--pando-colors-violet-900)',
  },
  'colors.violet.950': {
    value: '#2e1065',
    variable: 'var(--pando-colors-violet-950)',
  },
  'colors.indigo.50': {
    value: '#eef2ff',
    variable: 'var(--pando-colors-indigo-50)',
  },
  'colors.indigo.100': {
    value: '#e0e7ff',
    variable: 'var(--pando-colors-indigo-100)',
  },
  'colors.indigo.200': {
    value: '#c7d2fe',
    variable: 'var(--pando-colors-indigo-200)',
  },
  'colors.indigo.300': {
    value: '#a5b4fc',
    variable: 'var(--pando-colors-indigo-300)',
  },
  'colors.indigo.400': {
    value: '#818cf8',
    variable: 'var(--pando-colors-indigo-400)',
  },
  'colors.indigo.500': {
    value: '#6366f1',
    variable: 'var(--pando-colors-indigo-500)',
  },
  'colors.indigo.600': {
    value: '#4f46e5',
    variable: 'var(--pando-colors-indigo-600)',
  },
  'colors.indigo.700': {
    value: '#4338ca',
    variable: 'var(--pando-colors-indigo-700)',
  },
  'colors.indigo.800': {
    value: '#3730a3',
    variable: 'var(--pando-colors-indigo-800)',
  },
  'colors.indigo.900': {
    value: '#312e81',
    variable: 'var(--pando-colors-indigo-900)',
  },
  'colors.indigo.950': {
    value: '#1e1b4b',
    variable: 'var(--pando-colors-indigo-950)',
  },
  'colors.blue.50': {
    value: '#eff6ff',
    variable: 'var(--pando-colors-blue-50)',
  },
  'colors.blue.100': {
    value: '#dbeafe',
    variable: 'var(--pando-colors-blue-100)',
  },
  'colors.blue.200': {
    value: '#bfdbfe',
    variable: 'var(--pando-colors-blue-200)',
  },
  'colors.blue.300': {
    value: '#93c5fd',
    variable: 'var(--pando-colors-blue-300)',
  },
  'colors.blue.400': {
    value: '#60a5fa',
    variable: 'var(--pando-colors-blue-400)',
  },
  'colors.blue.500': {
    value: '#3b82f6',
    variable: 'var(--pando-colors-blue-500)',
  },
  'colors.blue.600': {
    value: '#2563eb',
    variable: 'var(--pando-colors-blue-600)',
  },
  'colors.blue.700': {
    value: '#1d4ed8',
    variable: 'var(--pando-colors-blue-700)',
  },
  'colors.blue.800': {
    value: '#1e40af',
    variable: 'var(--pando-colors-blue-800)',
  },
  'colors.blue.900': {
    value: '#1e3a8a',
    variable: 'var(--pando-colors-blue-900)',
  },
  'colors.blue.950': {
    value: '#172554',
    variable: 'var(--pando-colors-blue-950)',
  },
  'colors.sky.50': {
    value: '#f0f9ff',
    variable: 'var(--pando-colors-sky-50)',
  },
  'colors.sky.100': {
    value: '#e0f2fe',
    variable: 'var(--pando-colors-sky-100)',
  },
  'colors.sky.200': {
    value: '#bae6fd',
    variable: 'var(--pando-colors-sky-200)',
  },
  'colors.sky.300': {
    value: '#7dd3fc',
    variable: 'var(--pando-colors-sky-300)',
  },
  'colors.sky.400': {
    value: '#38bdf8',
    variable: 'var(--pando-colors-sky-400)',
  },
  'colors.sky.500': {
    value: '#0ea5e9',
    variable: 'var(--pando-colors-sky-500)',
  },
  'colors.sky.600': {
    value: '#0284c7',
    variable: 'var(--pando-colors-sky-600)',
  },
  'colors.sky.700': {
    value: '#0369a1',
    variable: 'var(--pando-colors-sky-700)',
  },
  'colors.sky.800': {
    value: '#075985',
    variable: 'var(--pando-colors-sky-800)',
  },
  'colors.sky.900': {
    value: '#0c4a6e',
    variable: 'var(--pando-colors-sky-900)',
  },
  'colors.sky.950': {
    value: '#082f49',
    variable: 'var(--pando-colors-sky-950)',
  },
  'colors.cyan.50': {
    value: '#ecfeff',
    variable: 'var(--pando-colors-cyan-50)',
  },
  'colors.cyan.100': {
    value: '#cffafe',
    variable: 'var(--pando-colors-cyan-100)',
  },
  'colors.cyan.200': {
    value: '#a5f3fc',
    variable: 'var(--pando-colors-cyan-200)',
  },
  'colors.cyan.300': {
    value: '#67e8f9',
    variable: 'var(--pando-colors-cyan-300)',
  },
  'colors.cyan.400': {
    value: '#22d3ee',
    variable: 'var(--pando-colors-cyan-400)',
  },
  'colors.cyan.500': {
    value: '#06b6d4',
    variable: 'var(--pando-colors-cyan-500)',
  },
  'colors.cyan.600': {
    value: '#0891b2',
    variable: 'var(--pando-colors-cyan-600)',
  },
  'colors.cyan.700': {
    value: '#0e7490',
    variable: 'var(--pando-colors-cyan-700)',
  },
  'colors.cyan.800': {
    value: '#155e75',
    variable: 'var(--pando-colors-cyan-800)',
  },
  'colors.cyan.900': {
    value: '#164e63',
    variable: 'var(--pando-colors-cyan-900)',
  },
  'colors.cyan.950': {
    value: '#083344',
    variable: 'var(--pando-colors-cyan-950)',
  },
  'colors.teal.50': {
    value: '#f0fdfa',
    variable: 'var(--pando-colors-teal-50)',
  },
  'colors.teal.100': {
    value: '#ccfbf1',
    variable: 'var(--pando-colors-teal-100)',
  },
  'colors.teal.200': {
    value: '#99f6e4',
    variable: 'var(--pando-colors-teal-200)',
  },
  'colors.teal.300': {
    value: '#5eead4',
    variable: 'var(--pando-colors-teal-300)',
  },
  'colors.teal.400': {
    value: '#2dd4bf',
    variable: 'var(--pando-colors-teal-400)',
  },
  'colors.teal.500': {
    value: '#14b8a6',
    variable: 'var(--pando-colors-teal-500)',
  },
  'colors.teal.600': {
    value: '#0d9488',
    variable: 'var(--pando-colors-teal-600)',
  },
  'colors.teal.700': {
    value: '#0f766e',
    variable: 'var(--pando-colors-teal-700)',
  },
  'colors.teal.800': {
    value: '#115e59',
    variable: 'var(--pando-colors-teal-800)',
  },
  'colors.teal.900': {
    value: '#134e4a',
    variable: 'var(--pando-colors-teal-900)',
  },
  'colors.teal.950': {
    value: '#042f2e',
    variable: 'var(--pando-colors-teal-950)',
  },
  'colors.emerald.50': {
    value: '#ecfdf5',
    variable: 'var(--pando-colors-emerald-50)',
  },
  'colors.emerald.100': {
    value: '#d1fae5',
    variable: 'var(--pando-colors-emerald-100)',
  },
  'colors.emerald.200': {
    value: '#a7f3d0',
    variable: 'var(--pando-colors-emerald-200)',
  },
  'colors.emerald.300': {
    value: '#6ee7b7',
    variable: 'var(--pando-colors-emerald-300)',
  },
  'colors.emerald.400': {
    value: '#34d399',
    variable: 'var(--pando-colors-emerald-400)',
  },
  'colors.emerald.500': {
    value: '#10b981',
    variable: 'var(--pando-colors-emerald-500)',
  },
  'colors.emerald.600': {
    value: '#059669',
    variable: 'var(--pando-colors-emerald-600)',
  },
  'colors.emerald.700': {
    value: '#047857',
    variable: 'var(--pando-colors-emerald-700)',
  },
  'colors.emerald.800': {
    value: '#065f46',
    variable: 'var(--pando-colors-emerald-800)',
  },
  'colors.emerald.900': {
    value: '#064e3b',
    variable: 'var(--pando-colors-emerald-900)',
  },
  'colors.emerald.950': {
    value: '#022c22',
    variable: 'var(--pando-colors-emerald-950)',
  },
  'colors.green.50': {
    value: '#f0fdf4',
    variable: 'var(--pando-colors-green-50)',
  },
  'colors.green.100': {
    value: '#dcfce7',
    variable: 'var(--pando-colors-green-100)',
  },
  'colors.green.200': {
    value: '#bbf7d0',
    variable: 'var(--pando-colors-green-200)',
  },
  'colors.green.300': {
    value: '#86efac',
    variable: 'var(--pando-colors-green-300)',
  },
  'colors.green.400': {
    value: '#4ade80',
    variable: 'var(--pando-colors-green-400)',
  },
  'colors.green.500': {
    value: '#22c55e',
    variable: 'var(--pando-colors-green-500)',
  },
  'colors.green.600': {
    value: '#16a34a',
    variable: 'var(--pando-colors-green-600)',
  },
  'colors.green.700': {
    value: '#15803d',
    variable: 'var(--pando-colors-green-700)',
  },
  'colors.green.800': {
    value: '#166534',
    variable: 'var(--pando-colors-green-800)',
  },
  'colors.green.900': {
    value: '#14532d',
    variable: 'var(--pando-colors-green-900)',
  },
  'colors.green.950': {
    value: '#052e16',
    variable: 'var(--pando-colors-green-950)',
  },
  'colors.lime.50': {
    value: '#f7fee7',
    variable: 'var(--pando-colors-lime-50)',
  },
  'colors.lime.100': {
    value: '#ecfccb',
    variable: 'var(--pando-colors-lime-100)',
  },
  'colors.lime.200': {
    value: '#d9f99d',
    variable: 'var(--pando-colors-lime-200)',
  },
  'colors.lime.300': {
    value: '#bef264',
    variable: 'var(--pando-colors-lime-300)',
  },
  'colors.lime.400': {
    value: '#a3e635',
    variable: 'var(--pando-colors-lime-400)',
  },
  'colors.lime.500': {
    value: '#84cc16',
    variable: 'var(--pando-colors-lime-500)',
  },
  'colors.lime.600': {
    value: '#65a30d',
    variable: 'var(--pando-colors-lime-600)',
  },
  'colors.lime.700': {
    value: '#4d7c0f',
    variable: 'var(--pando-colors-lime-700)',
  },
  'colors.lime.800': {
    value: '#3f6212',
    variable: 'var(--pando-colors-lime-800)',
  },
  'colors.lime.900': {
    value: '#365314',
    variable: 'var(--pando-colors-lime-900)',
  },
  'colors.lime.950': {
    value: '#1a2e05',
    variable: 'var(--pando-colors-lime-950)',
  },
  'colors.yellow.50': {
    value: '#fefce8',
    variable: 'var(--pando-colors-yellow-50)',
  },
  'colors.yellow.100': {
    value: '#fef9c3',
    variable: 'var(--pando-colors-yellow-100)',
  },
  'colors.yellow.200': {
    value: '#fef08a',
    variable: 'var(--pando-colors-yellow-200)',
  },
  'colors.yellow.300': {
    value: '#fde047',
    variable: 'var(--pando-colors-yellow-300)',
  },
  'colors.yellow.400': {
    value: '#facc15',
    variable: 'var(--pando-colors-yellow-400)',
  },
  'colors.yellow.500': {
    value: '#eab308',
    variable: 'var(--pando-colors-yellow-500)',
  },
  'colors.yellow.600': {
    value: '#ca8a04',
    variable: 'var(--pando-colors-yellow-600)',
  },
  'colors.yellow.700': {
    value: '#a16207',
    variable: 'var(--pando-colors-yellow-700)',
  },
  'colors.yellow.800': {
    value: '#854d0e',
    variable: 'var(--pando-colors-yellow-800)',
  },
  'colors.yellow.900': {
    value: '#713f12',
    variable: 'var(--pando-colors-yellow-900)',
  },
  'colors.yellow.950': {
    value: '#422006',
    variable: 'var(--pando-colors-yellow-950)',
  },
  'colors.amber.50': {
    value: '#fffbeb',
    variable: 'var(--pando-colors-amber-50)',
  },
  'colors.amber.100': {
    value: '#fef3c7',
    variable: 'var(--pando-colors-amber-100)',
  },
  'colors.amber.200': {
    value: '#fde68a',
    variable: 'var(--pando-colors-amber-200)',
  },
  'colors.amber.300': {
    value: '#fcd34d',
    variable: 'var(--pando-colors-amber-300)',
  },
  'colors.amber.400': {
    value: '#fbbf24',
    variable: 'var(--pando-colors-amber-400)',
  },
  'colors.amber.500': {
    value: '#f59e0b',
    variable: 'var(--pando-colors-amber-500)',
  },
  'colors.amber.600': {
    value: '#d97706',
    variable: 'var(--pando-colors-amber-600)',
  },
  'colors.amber.700': {
    value: '#b45309',
    variable: 'var(--pando-colors-amber-700)',
  },
  'colors.amber.800': {
    value: '#92400e',
    variable: 'var(--pando-colors-amber-800)',
  },
  'colors.amber.900': {
    value: '#78350f',
    variable: 'var(--pando-colors-amber-900)',
  },
  'colors.amber.950': {
    value: '#451a03',
    variable: 'var(--pando-colors-amber-950)',
  },
  'colors.orange.50': {
    value: '#fff7ed',
    variable: 'var(--pando-colors-orange-50)',
  },
  'colors.orange.100': {
    value: '#ffedd5',
    variable: 'var(--pando-colors-orange-100)',
  },
  'colors.orange.200': {
    value: '#fed7aa',
    variable: 'var(--pando-colors-orange-200)',
  },
  'colors.orange.300': {
    value: '#fdba74',
    variable: 'var(--pando-colors-orange-300)',
  },
  'colors.orange.400': {
    value: '#fb923c',
    variable: 'var(--pando-colors-orange-400)',
  },
  'colors.orange.500': {
    value: '#f97316',
    variable: 'var(--pando-colors-orange-500)',
  },
  'colors.orange.600': {
    value: '#ea580c',
    variable: 'var(--pando-colors-orange-600)',
  },
  'colors.orange.700': {
    value: '#c2410c',
    variable: 'var(--pando-colors-orange-700)',
  },
  'colors.orange.800': {
    value: '#9a3412',
    variable: 'var(--pando-colors-orange-800)',
  },
  'colors.orange.900': {
    value: '#7c2d12',
    variable: 'var(--pando-colors-orange-900)',
  },
  'colors.orange.950': {
    value: '#431407',
    variable: 'var(--pando-colors-orange-950)',
  },
  'colors.red.50': {
    value: '#fef2f2',
    variable: 'var(--pando-colors-red-50)',
  },
  'colors.red.100': {
    value: '#fee2e2',
    variable: 'var(--pando-colors-red-100)',
  },
  'colors.red.200': {
    value: '#fecaca',
    variable: 'var(--pando-colors-red-200)',
  },
  'colors.red.300': {
    value: '#fca5a5',
    variable: 'var(--pando-colors-red-300)',
  },
  'colors.red.400': {
    value: '#f87171',
    variable: 'var(--pando-colors-red-400)',
  },
  'colors.red.500': {
    value: '#ef4444',
    variable: 'var(--pando-colors-red-500)',
  },
  'colors.red.600': {
    value: '#dc2626',
    variable: 'var(--pando-colors-red-600)',
  },
  'colors.red.700': {
    value: '#b91c1c',
    variable: 'var(--pando-colors-red-700)',
  },
  'colors.red.800': {
    value: '#991b1b',
    variable: 'var(--pando-colors-red-800)',
  },
  'colors.red.900': {
    value: '#7f1d1d',
    variable: 'var(--pando-colors-red-900)',
  },
  'colors.red.950': {
    value: '#450a0a',
    variable: 'var(--pando-colors-red-950)',
  },
  'colors.neutral.50': {
    value: '#fafafa',
    variable: 'var(--pando-colors-neutral-50)',
  },
  'colors.neutral.100': {
    value: '#f5f5f5',
    variable: 'var(--pando-colors-neutral-100)',
  },
  'colors.neutral.200': {
    value: '#e5e5e5',
    variable: 'var(--pando-colors-neutral-200)',
  },
  'colors.neutral.300': {
    value: '#d4d4d4',
    variable: 'var(--pando-colors-neutral-300)',
  },
  'colors.neutral.400': {
    value: '#a3a3a3',
    variable: 'var(--pando-colors-neutral-400)',
  },
  'colors.neutral.500': {
    value: '#737373',
    variable: 'var(--pando-colors-neutral-500)',
  },
  'colors.neutral.600': {
    value: '#525252',
    variable: 'var(--pando-colors-neutral-600)',
  },
  'colors.neutral.700': {
    value: '#404040',
    variable: 'var(--pando-colors-neutral-700)',
  },
  'colors.neutral.800': {
    value: '#262626',
    variable: 'var(--pando-colors-neutral-800)',
  },
  'colors.neutral.900': {
    value: '#171717',
    variable: 'var(--pando-colors-neutral-900)',
  },
  'colors.neutral.950': {
    value: '#0a0a0a',
    variable: 'var(--pando-colors-neutral-950)',
  },
  'colors.stone.50': {
    value: '#fafaf9',
    variable: 'var(--pando-colors-stone-50)',
  },
  'colors.stone.100': {
    value: '#f5f5f4',
    variable: 'var(--pando-colors-stone-100)',
  },
  'colors.stone.200': {
    value: '#e7e5e4',
    variable: 'var(--pando-colors-stone-200)',
  },
  'colors.stone.300': {
    value: '#d6d3d1',
    variable: 'var(--pando-colors-stone-300)',
  },
  'colors.stone.400': {
    value: '#a8a29e',
    variable: 'var(--pando-colors-stone-400)',
  },
  'colors.stone.500': {
    value: '#78716c',
    variable: 'var(--pando-colors-stone-500)',
  },
  'colors.stone.600': {
    value: '#57534e',
    variable: 'var(--pando-colors-stone-600)',
  },
  'colors.stone.700': {
    value: '#44403c',
    variable: 'var(--pando-colors-stone-700)',
  },
  'colors.stone.800': {
    value: '#292524',
    variable: 'var(--pando-colors-stone-800)',
  },
  'colors.stone.900': {
    value: '#1c1917',
    variable: 'var(--pando-colors-stone-900)',
  },
  'colors.stone.950': {
    value: '#0c0a09',
    variable: 'var(--pando-colors-stone-950)',
  },
  'colors.zinc.50': {
    value: '#fafafa',
    variable: 'var(--pando-colors-zinc-50)',
  },
  'colors.zinc.100': {
    value: '#f4f4f5',
    variable: 'var(--pando-colors-zinc-100)',
  },
  'colors.zinc.200': {
    value: '#e4e4e7',
    variable: 'var(--pando-colors-zinc-200)',
  },
  'colors.zinc.300': {
    value: '#d4d4d8',
    variable: 'var(--pando-colors-zinc-300)',
  },
  'colors.zinc.400': {
    value: '#a1a1aa',
    variable: 'var(--pando-colors-zinc-400)',
  },
  'colors.zinc.500': {
    value: '#71717a',
    variable: 'var(--pando-colors-zinc-500)',
  },
  'colors.zinc.600': {
    value: '#52525b',
    variable: 'var(--pando-colors-zinc-600)',
  },
  'colors.zinc.700': {
    value: '#3f3f46',
    variable: 'var(--pando-colors-zinc-700)',
  },
  'colors.zinc.800': {
    value: '#27272a',
    variable: 'var(--pando-colors-zinc-800)',
  },
  'colors.zinc.900': {
    value: '#18181b',
    variable: 'var(--pando-colors-zinc-900)',
  },
  'colors.zinc.950': {
    value: '#09090b',
    variable: 'var(--pando-colors-zinc-950)',
  },
  'colors.gray.50': {
    value: '#f9fafb',
    variable: 'var(--pando-colors-gray-50)',
  },
  'colors.gray.100': {
    value: '#f3f4f6',
    variable: 'var(--pando-colors-gray-100)',
  },
  'colors.gray.200': {
    value: '#e5e7eb',
    variable: 'var(--pando-colors-gray-200)',
  },
  'colors.gray.300': {
    value: '#d1d5db',
    variable: 'var(--pando-colors-gray-300)',
  },
  'colors.gray.400': {
    value: '#9ca3af',
    variable: 'var(--pando-colors-gray-400)',
  },
  'colors.gray.500': {
    value: '#6b7280',
    variable: 'var(--pando-colors-gray-500)',
  },
  'colors.gray.600': {
    value: '#4b5563',
    variable: 'var(--pando-colors-gray-600)',
  },
  'colors.gray.700': {
    value: '#374151',
    variable: 'var(--pando-colors-gray-700)',
  },
  'colors.gray.800': {
    value: '#1f2937',
    variable: 'var(--pando-colors-gray-800)',
  },
  'colors.gray.900': {
    value: '#111827',
    variable: 'var(--pando-colors-gray-900)',
  },
  'colors.gray.950': {
    value: '#030712',
    variable: 'var(--pando-colors-gray-950)',
  },
  'colors.slate.50': {
    value: '#f8fafc',
    variable: 'var(--pando-colors-slate-50)',
  },
  'colors.slate.100': {
    value: '#f1f5f9',
    variable: 'var(--pando-colors-slate-100)',
  },
  'colors.slate.200': {
    value: '#e2e8f0',
    variable: 'var(--pando-colors-slate-200)',
  },
  'colors.slate.300': {
    value: '#cbd5e1',
    variable: 'var(--pando-colors-slate-300)',
  },
  'colors.slate.400': {
    value: '#94a3b8',
    variable: 'var(--pando-colors-slate-400)',
  },
  'colors.slate.500': {
    value: '#64748b',
    variable: 'var(--pando-colors-slate-500)',
  },
  'colors.slate.600': {
    value: '#475569',
    variable: 'var(--pando-colors-slate-600)',
  },
  'colors.slate.700': {
    value: '#334155',
    variable: 'var(--pando-colors-slate-700)',
  },
  'colors.slate.800': {
    value: '#1e293b',
    variable: 'var(--pando-colors-slate-800)',
  },
  'colors.slate.900': {
    value: '#0f172a',
    variable: 'var(--pando-colors-slate-900)',
  },
  'colors.slate.950': {
    value: '#020617',
    variable: 'var(--pando-colors-slate-950)',
  },
  'blurs.sm': {
    value: '4px',
    variable: 'var(--pando-blurs-sm)',
  },
  'blurs.base': {
    value: '8px',
    variable: 'var(--pando-blurs-base)',
  },
  'blurs.md': {
    value: '12px',
    variable: 'var(--pando-blurs-md)',
  },
  'blurs.lg': {
    value: '16px',
    variable: 'var(--pando-blurs-lg)',
  },
  'blurs.xl': {
    value: '24px',
    variable: 'var(--pando-blurs-xl)',
  },
  'blurs.2xl': {
    value: '40px',
    variable: 'var(--pando-blurs-2xl)',
  },
  'blurs.3xl': {
    value: '64px',
    variable: 'var(--pando-blurs-3xl)',
  },
  'spacing.0': {
    value: '0rem',
    variable: 'var(--pando-spacing-0)',
  },
  'spacing.1': {
    value: '0.25rem',
    variable: 'var(--pando-spacing-1)',
  },
  'spacing.2': {
    value: '0.5rem',
    variable: 'var(--pando-spacing-2)',
  },
  'spacing.3': {
    value: '0.75rem',
    variable: 'var(--pando-spacing-3)',
  },
  'spacing.4': {
    value: '1rem',
    variable: 'var(--pando-spacing-4)',
  },
  'spacing.5': {
    value: '1.25rem',
    variable: 'var(--pando-spacing-5)',
  },
  'spacing.6': {
    value: '1.5rem',
    variable: 'var(--pando-spacing-6)',
  },
  'spacing.7': {
    value: '1.75rem',
    variable: 'var(--pando-spacing-7)',
  },
  'spacing.8': {
    value: '2rem',
    variable: 'var(--pando-spacing-8)',
  },
  'spacing.9': {
    value: '2.25rem',
    variable: 'var(--pando-spacing-9)',
  },
  'spacing.10': {
    value: '2.5rem',
    variable: 'var(--pando-spacing-10)',
  },
  'spacing.11': {
    value: '2.75rem',
    variable: 'var(--pando-spacing-11)',
  },
  'spacing.12': {
    value: '3rem',
    variable: 'var(--pando-spacing-12)',
  },
  'spacing.14': {
    value: '3.5rem',
    variable: 'var(--pando-spacing-14)',
  },
  'spacing.16': {
    value: '4rem',
    variable: 'var(--pando-spacing-16)',
  },
  'spacing.20': {
    value: '5rem',
    variable: 'var(--pando-spacing-20)',
  },
  'spacing.24': {
    value: '6rem',
    variable: 'var(--pando-spacing-24)',
  },
  'spacing.28': {
    value: '7rem',
    variable: 'var(--pando-spacing-28)',
  },
  'spacing.32': {
    value: '8rem',
    variable: 'var(--pando-spacing-32)',
  },
  'spacing.36': {
    value: '9rem',
    variable: 'var(--pando-spacing-36)',
  },
  'spacing.40': {
    value: '10rem',
    variable: 'var(--pando-spacing-40)',
  },
  'spacing.44': {
    value: '11rem',
    variable: 'var(--pando-spacing-44)',
  },
  'spacing.48': {
    value: '12rem',
    variable: 'var(--pando-spacing-48)',
  },
  'spacing.52': {
    value: '13rem',
    variable: 'var(--pando-spacing-52)',
  },
  'spacing.56': {
    value: '14rem',
    variable: 'var(--pando-spacing-56)',
  },
  'spacing.60': {
    value: '15rem',
    variable: 'var(--pando-spacing-60)',
  },
  'spacing.64': {
    value: '16rem',
    variable: 'var(--pando-spacing-64)',
  },
  'spacing.72': {
    value: '18rem',
    variable: 'var(--pando-spacing-72)',
  },
  'spacing.80': {
    value: '20rem',
    variable: 'var(--pando-spacing-80)',
  },
  'spacing.96': {
    value: '24rem',
    variable: 'var(--pando-spacing-96)',
  },
  'spacing.0.5': {
    value: '0.125rem',
    variable: 'var(--pando-spacing-0\\.5)',
  },
  'spacing.1.5': {
    value: '0.375rem',
    variable: 'var(--pando-spacing-1\\.5)',
  },
  'spacing.2.5': {
    value: '0.625rem',
    variable: 'var(--pando-spacing-2\\.5)',
  },
  'spacing.3.5': {
    value: '0.875rem',
    variable: 'var(--pando-spacing-3\\.5)',
  },
  'sizes.0': {
    value: '0rem',
    variable: 'var(--pando-sizes-0)',
  },
  'sizes.1': {
    value: '0.25rem',
    variable: 'var(--pando-sizes-1)',
  },
  'sizes.2': {
    value: '0.5rem',
    variable: 'var(--pando-sizes-2)',
  },
  'sizes.3': {
    value: '0.75rem',
    variable: 'var(--pando-sizes-3)',
  },
  'sizes.4': {
    value: '1rem',
    variable: 'var(--pando-sizes-4)',
  },
  'sizes.5': {
    value: '1.25rem',
    variable: 'var(--pando-sizes-5)',
  },
  'sizes.6': {
    value: '1.5rem',
    variable: 'var(--pando-sizes-6)',
  },
  'sizes.7': {
    value: '1.75rem',
    variable: 'var(--pando-sizes-7)',
  },
  'sizes.8': {
    value: '2rem',
    variable: 'var(--pando-sizes-8)',
  },
  'sizes.9': {
    value: '2.25rem',
    variable: 'var(--pando-sizes-9)',
  },
  'sizes.10': {
    value: '2.5rem',
    variable: 'var(--pando-sizes-10)',
  },
  'sizes.11': {
    value: '2.75rem',
    variable: 'var(--pando-sizes-11)',
  },
  'sizes.12': {
    value: '3rem',
    variable: 'var(--pando-sizes-12)',
  },
  'sizes.14': {
    value: '3.5rem',
    variable: 'var(--pando-sizes-14)',
  },
  'sizes.16': {
    value: '4rem',
    variable: 'var(--pando-sizes-16)',
  },
  'sizes.20': {
    value: '5rem',
    variable: 'var(--pando-sizes-20)',
  },
  'sizes.24': {
    value: '6rem',
    variable: 'var(--pando-sizes-24)',
  },
  'sizes.28': {
    value: '7rem',
    variable: 'var(--pando-sizes-28)',
  },
  'sizes.32': {
    value: '8rem',
    variable: 'var(--pando-sizes-32)',
  },
  'sizes.36': {
    value: '9rem',
    variable: 'var(--pando-sizes-36)',
  },
  'sizes.40': {
    value: '10rem',
    variable: 'var(--pando-sizes-40)',
  },
  'sizes.44': {
    value: '11rem',
    variable: 'var(--pando-sizes-44)',
  },
  'sizes.48': {
    value: '12rem',
    variable: 'var(--pando-sizes-48)',
  },
  'sizes.52': {
    value: '13rem',
    variable: 'var(--pando-sizes-52)',
  },
  'sizes.56': {
    value: '14rem',
    variable: 'var(--pando-sizes-56)',
  },
  'sizes.60': {
    value: '15rem',
    variable: 'var(--pando-sizes-60)',
  },
  'sizes.64': {
    value: '16rem',
    variable: 'var(--pando-sizes-64)',
  },
  'sizes.72': {
    value: '18rem',
    variable: 'var(--pando-sizes-72)',
  },
  'sizes.80': {
    value: '20rem',
    variable: 'var(--pando-sizes-80)',
  },
  'sizes.96': {
    value: '24rem',
    variable: 'var(--pando-sizes-96)',
  },
  'sizes.0.5': {
    value: '0.125rem',
    variable: 'var(--pando-sizes-0\\.5)',
  },
  'sizes.1.5': {
    value: '0.375rem',
    variable: 'var(--pando-sizes-1\\.5)',
  },
  'sizes.2.5': {
    value: '0.625rem',
    variable: 'var(--pando-sizes-2\\.5)',
  },
  'sizes.3.5': {
    value: '0.875rem',
    variable: 'var(--pando-sizes-3\\.5)',
  },
  'sizes.xs': {
    value: '20rem',
    variable: 'var(--pando-sizes-xs)',
  },
  'sizes.sm': {
    value: '24rem',
    variable: 'var(--pando-sizes-sm)',
  },
  'sizes.md': {
    value: '28rem',
    variable: 'var(--pando-sizes-md)',
  },
  'sizes.lg': {
    value: '32rem',
    variable: 'var(--pando-sizes-lg)',
  },
  'sizes.xl': {
    value: '36rem',
    variable: 'var(--pando-sizes-xl)',
  },
  'sizes.2xl': {
    value: '42rem',
    variable: 'var(--pando-sizes-2xl)',
  },
  'sizes.3xl': {
    value: '48rem',
    variable: 'var(--pando-sizes-3xl)',
  },
  'sizes.4xl': {
    value: '56rem',
    variable: 'var(--pando-sizes-4xl)',
  },
  'sizes.5xl': {
    value: '64rem',
    variable: 'var(--pando-sizes-5xl)',
  },
  'sizes.6xl': {
    value: '72rem',
    variable: 'var(--pando-sizes-6xl)',
  },
  'sizes.7xl': {
    value: '80rem',
    variable: 'var(--pando-sizes-7xl)',
  },
  'sizes.8xl': {
    value: '90rem',
    variable: 'var(--pando-sizes-8xl)',
  },
  'sizes.prose': {
    value: '65ch',
    variable: 'var(--pando-sizes-prose)',
  },
  'sizes.full': {
    value: '100%',
    variable: 'var(--pando-sizes-full)',
  },
  'sizes.min': {
    value: 'min-content',
    variable: 'var(--pando-sizes-min)',
  },
  'sizes.max': {
    value: 'max-content',
    variable: 'var(--pando-sizes-max)',
  },
  'sizes.fit': {
    value: 'fit-content',
    variable: 'var(--pando-sizes-fit)',
  },
  'sizes.breakpoint-sm': {
    value: '640px',
    variable: 'var(--pando-sizes-breakpoint-sm)',
  },
  'sizes.breakpoint-md': {
    value: '768px',
    variable: 'var(--pando-sizes-breakpoint-md)',
  },
  'sizes.breakpoint-lg': {
    value: '1024px',
    variable: 'var(--pando-sizes-breakpoint-lg)',
  },
  'sizes.breakpoint-xl': {
    value: '1280px',
    variable: 'var(--pando-sizes-breakpoint-xl)',
  },
  'sizes.breakpoint-2xl': {
    value: '1536px',
    variable: 'var(--pando-sizes-breakpoint-2xl)',
  },
  'animations.spin': {
    value: 'spin 1s linear infinite',
    variable: 'var(--pando-animations-spin)',
  },
  'animations.ping': {
    value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    variable: 'var(--pando-animations-ping)',
  },
  'animations.pulse': {
    value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    variable: 'var(--pando-animations-pulse)',
  },
  'animations.bounce': {
    value: 'bounce 1s infinite',
    variable: 'var(--pando-animations-bounce)',
  },
  'fonts.serif': {
    value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    variable: 'var(--pando-fonts-serif)',
  },
  'fonts.display': {
    value: 'var(--font-pando)',
    variable: 'var(--pando-fonts-display)',
  },
  'fonts.sans': {
    value: 'var(--font-pando)',
    variable: 'var(--pando-fonts-sans)',
  },
  'fonts.mono': {
    value: 'var(--font-pando-mono)',
    variable: 'var(--pando-fonts-mono)',
  },
  'fonts.monoStrong': {
    value: 'var(--font-pando-mono-strong)',
    variable: 'var(--pando-fonts-mono-strong)',
  },
  'zIndex.hide': {
    value: -1,
    variable: 'var(--pando-z-index-hide)',
  },
  'zIndex.base': {
    value: 0,
    variable: 'var(--pando-z-index-base)',
  },
  'zIndex.decorator': {
    value: 50,
    variable: 'var(--pando-z-index-decorator)',
  },
  'zIndex.dropdown': {
    value: 1000,
    variable: 'var(--pando-z-index-dropdown)',
  },
  'zIndex.sticky': {
    value: 1200,
    variable: 'var(--pando-z-index-sticky)',
  },
  'zIndex.banner': {
    value: 1300,
    variable: 'var(--pando-z-index-banner)',
  },
  'zIndex.overlay': {
    value: 1400,
    variable: 'var(--pando-z-index-overlay)',
  },
  'zIndex.modal': {
    value: 1500,
    variable: 'var(--pando-z-index-modal)',
  },
  'zIndex.popover': {
    value: 1600,
    variable: 'var(--pando-z-index-popover)',
  },
  'zIndex.toast': {
    value: 1700,
    variable: 'var(--pando-z-index-toast)',
  },
  'zIndex.tooltip': {
    value: 1800,
    variable: 'var(--pando-z-index-tooltip)',
  },
  'breakpoints.sm': {
    value: '640px',
    variable: 'var(--pando-breakpoints-sm)',
  },
  'breakpoints.md': {
    value: '768px',
    variable: 'var(--pando-breakpoints-md)',
  },
  'breakpoints.lg': {
    value: '1024px',
    variable: 'var(--pando-breakpoints-lg)',
  },
  'breakpoints.xl': {
    value: '1280px',
    variable: 'var(--pando-breakpoints-xl)',
  },
  'breakpoints.2xl': {
    value: '1536px',
    variable: 'var(--pando-breakpoints-2xl)',
  },
  'colors.neutral.bg.initial': {
    value: 'var(--pando-colors-neutral-bg-initial)',
    variable: 'var(--pando-colors-neutral-bg-initial)',
  },
  'colors.neutral.bg.active': {
    value: 'var(--pando-colors-neutral-bg-active)',
    variable: 'var(--pando-colors-neutral-bg-active)',
  },
  'colors.neutral.bg.hover': {
    value: 'var(--pando-colors-neutral-bg-hover)',
    variable: 'var(--pando-colors-neutral-bg-hover)',
  },
  'colors.neutral.border.100': {
    value: 'var(--pando-colors-neutral-border-100)',
    variable: 'var(--pando-colors-neutral-border-100)',
  },
  'colors.neutral.border.200': {
    value: 'var(--pando-colors-neutral-border-200)',
    variable: 'var(--pando-colors-neutral-border-200)',
  },
  'colors.neutral.border.initial': {
    value: 'var(--pando-colors-neutral-border-initial)',
    variable: 'var(--pando-colors-neutral-border-initial)',
  },
  'colors.neutral.surface.100': {
    value: 'var(--pando-colors-neutral-surface-100)',
    variable: 'var(--pando-colors-neutral-surface-100)',
  },
  'colors.neutral.surface.200': {
    value: 'var(--pando-colors-neutral-surface-200)',
    variable: 'var(--pando-colors-neutral-surface-200)',
  },
  'colors.neutral.surface.300': {
    value: 'var(--pando-colors-neutral-surface-300)',
    variable: 'var(--pando-colors-neutral-surface-300)',
  },
  'colors.neutral.surface.initial': {
    value: 'var(--pando-colors-neutral-surface-initial)',
    variable: 'var(--pando-colors-neutral-surface-initial)',
  },
  'colors.neutral.surface.inverse': {
    value: 'var(--pando-colors-neutral-surface-inverse)',
    variable: 'var(--pando-colors-neutral-surface-inverse)',
  },
  'colors.neutral.text.100': {
    value: 'var(--pando-colors-neutral-text-100)',
    variable: 'var(--pando-colors-neutral-text-100)',
  },
  'colors.neutral.text.200': {
    value: 'var(--pando-colors-neutral-text-200)',
    variable: 'var(--pando-colors-neutral-text-200)',
  },
  'colors.neutral.text.300': {
    value: 'var(--pando-colors-neutral-text-300)',
    variable: 'var(--pando-colors-neutral-text-300)',
  },
  'colors.neutral.text.initial': {
    value: 'var(--pando-colors-neutral-text-initial)',
    variable: 'var(--pando-colors-neutral-text-initial)',
  },
  'colors.neutral.text.inverse': {
    value: 'var(--pando-colors-neutral-text-inverse)',
    variable: 'var(--pando-colors-neutral-text-inverse)',
  },
  'colors.action.bg.100.initial': {
    value: 'var(--pando-colors-action-bg-100-initial)',
    variable: 'var(--pando-colors-action-bg-100-initial)',
  },
  'colors.action.bg.100.hover': {
    value: 'var(--pando-colors-action-bg-100-hover)',
    variable: 'var(--pando-colors-action-bg-100-hover)',
  },
  'colors.action.bg.100.active': {
    value: 'var(--pando-colors-action-bg-100-active)',
    variable: 'var(--pando-colors-action-bg-100-active)',
  },
  'colors.action.bg.initial': {
    value: 'var(--pando-colors-action-bg-initial)',
    variable: 'var(--pando-colors-action-bg-initial)',
  },
  'colors.action.bg.hover': {
    value: 'var(--pando-colors-action-bg-hover)',
    variable: 'var(--pando-colors-action-bg-hover)',
  },
  'colors.action.bg.active': {
    value: 'var(--pando-colors-action-bg-active)',
    variable: 'var(--pando-colors-action-bg-active)',
  },
  'colors.action.border.initial': {
    value: 'var(--pando-colors-action-border-initial)',
    variable: 'var(--pando-colors-action-border-initial)',
  },
  'colors.action.border.focus': {
    value: 'var(--pando-colors-action-border-focus)',
    variable: 'var(--pando-colors-action-border-focus)',
  },
  'colors.action.navigation.initial': {
    value: 'var(--pando-colors-action-navigation-initial)',
    variable: 'var(--pando-colors-action-navigation-initial)',
  },
  'colors.action.navigation.hover': {
    value: 'var(--pando-colors-action-navigation-hover)',
    variable: 'var(--pando-colors-action-navigation-hover)',
  },
  'colors.action.navigation.visited': {
    value: 'var(--pando-colors-action-navigation-visited)',
    variable: 'var(--pando-colors-action-navigation-visited)',
  },
  'colors.action.text.100': {
    value: 'var(--pando-colors-action-text-100)',
    variable: 'var(--pando-colors-action-text-100)',
  },
  'colors.action.text.200': {
    value: 'var(--pando-colors-action-text-200)',
    variable: 'var(--pando-colors-action-text-200)',
  },
  'colors.action.text.initial': {
    value: 'var(--pando-colors-action-text-initial)',
    variable: 'var(--pando-colors-action-text-initial)',
  },
  'colors.action.text.inverse': {
    value: 'var(--pando-colors-action-text-inverse)',
    variable: 'var(--pando-colors-action-text-inverse)',
  },
  'colors.info.border.initial': {
    value: 'var(--pando-colors-info-border-initial)',
    variable: 'var(--pando-colors-info-border-initial)',
  },
  'colors.info.surface.initial': {
    value: 'var(--pando-colors-info-surface-initial)',
    variable: 'var(--pando-colors-info-surface-initial)',
  },
  'colors.info.text.100': {
    value: 'var(--pando-colors-info-text-100)',
    variable: 'var(--pando-colors-info-text-100)',
  },
  'colors.info.text.200': {
    value: 'var(--pando-colors-info-text-200)',
    variable: 'var(--pando-colors-info-text-200)',
  },
  'colors.info.text.initial': {
    value: 'var(--pando-colors-info-text-initial)',
    variable: 'var(--pando-colors-info-text-initial)',
  },
  'colors.success.border.initial': {
    value: 'var(--pando-colors-success-border-initial)',
    variable: 'var(--pando-colors-success-border-initial)',
  },
  'colors.success.surface.initial': {
    value: 'var(--pando-colors-success-surface-initial)',
    variable: 'var(--pando-colors-success-surface-initial)',
  },
  'colors.success.text.100': {
    value: 'var(--pando-colors-success-text-100)',
    variable: 'var(--pando-colors-success-text-100)',
  },
  'colors.success.text.200': {
    value: 'var(--pando-colors-success-text-200)',
    variable: 'var(--pando-colors-success-text-200)',
  },
  'colors.success.text.initial': {
    value: 'var(--pando-colors-success-text-initial)',
    variable: 'var(--pando-colors-success-text-initial)',
  },
  'colors.warning.border.initial': {
    value: 'var(--pando-colors-warning-border-initial)',
    variable: 'var(--pando-colors-warning-border-initial)',
  },
  'colors.warning.surface.initial': {
    value: 'var(--pando-colors-warning-surface-initial)',
    variable: 'var(--pando-colors-warning-surface-initial)',
  },
  'colors.warning.text.100': {
    value: 'var(--pando-colors-warning-text-100)',
    variable: 'var(--pando-colors-warning-text-100)',
  },
  'colors.warning.text.200': {
    value: 'var(--pando-colors-warning-text-200)',
    variable: 'var(--pando-colors-warning-text-200)',
  },
  'colors.warning.text.initial': {
    value: 'var(--pando-colors-warning-text-initial)',
    variable: 'var(--pando-colors-warning-text-initial)',
  },
  'colors.danger.bg.initial': {
    value: 'var(--pando-colors-danger-bg-initial)',
    variable: 'var(--pando-colors-danger-bg-initial)',
  },
  'colors.danger.bg.hover': {
    value: 'var(--pando-colors-danger-bg-hover)',
    variable: 'var(--pando-colors-danger-bg-hover)',
  },
  'colors.danger.bg.active': {
    value: 'var(--pando-colors-danger-bg-active)',
    variable: 'var(--pando-colors-danger-bg-active)',
  },
  'colors.danger.border.initial': {
    value: 'var(--pando-colors-danger-border-initial)',
    variable: 'var(--pando-colors-danger-border-initial)',
  },
  'colors.danger.surface.initial': {
    value: 'var(--pando-colors-danger-surface-initial)',
    variable: 'var(--pando-colors-danger-surface-initial)',
  },
  'colors.danger.text.100': {
    value: 'var(--pando-colors-danger-text-100)',
    variable: 'var(--pando-colors-danger-text-100)',
  },
  'colors.danger.text.200': {
    value: 'var(--pando-colors-danger-text-200)',
    variable: 'var(--pando-colors-danger-text-200)',
  },
  'colors.danger.text.initial': {
    value: 'var(--pando-colors-danger-text-initial)',
    variable: 'var(--pando-colors-danger-text-initial)',
  },
  'colors.danger.text.inverse': {
    value: 'var(--pando-colors-danger-text-inverse)',
    variable: 'var(--pando-colors-danger-text-inverse)',
  },
  'spacing.-1': {
    value: 'calc(var(--pando-spacing-1) * -1)',
    variable: 'var(--pando-spacing-1)',
  },
  'spacing.-2': {
    value: 'calc(var(--pando-spacing-2) * -1)',
    variable: 'var(--pando-spacing-2)',
  },
  'spacing.-3': {
    value: 'calc(var(--pando-spacing-3) * -1)',
    variable: 'var(--pando-spacing-3)',
  },
  'spacing.-4': {
    value: 'calc(var(--pando-spacing-4) * -1)',
    variable: 'var(--pando-spacing-4)',
  },
  'spacing.-5': {
    value: 'calc(var(--pando-spacing-5) * -1)',
    variable: 'var(--pando-spacing-5)',
  },
  'spacing.-6': {
    value: 'calc(var(--pando-spacing-6) * -1)',
    variable: 'var(--pando-spacing-6)',
  },
  'spacing.-7': {
    value: 'calc(var(--pando-spacing-7) * -1)',
    variable: 'var(--pando-spacing-7)',
  },
  'spacing.-8': {
    value: 'calc(var(--pando-spacing-8) * -1)',
    variable: 'var(--pando-spacing-8)',
  },
  'spacing.-9': {
    value: 'calc(var(--pando-spacing-9) * -1)',
    variable: 'var(--pando-spacing-9)',
  },
  'spacing.-10': {
    value: 'calc(var(--pando-spacing-10) * -1)',
    variable: 'var(--pando-spacing-10)',
  },
  'spacing.-11': {
    value: 'calc(var(--pando-spacing-11) * -1)',
    variable: 'var(--pando-spacing-11)',
  },
  'spacing.-12': {
    value: 'calc(var(--pando-spacing-12) * -1)',
    variable: 'var(--pando-spacing-12)',
  },
  'spacing.-14': {
    value: 'calc(var(--pando-spacing-14) * -1)',
    variable: 'var(--pando-spacing-14)',
  },
  'spacing.-16': {
    value: 'calc(var(--pando-spacing-16) * -1)',
    variable: 'var(--pando-spacing-16)',
  },
  'spacing.-20': {
    value: 'calc(var(--pando-spacing-20) * -1)',
    variable: 'var(--pando-spacing-20)',
  },
  'spacing.-24': {
    value: 'calc(var(--pando-spacing-24) * -1)',
    variable: 'var(--pando-spacing-24)',
  },
  'spacing.-28': {
    value: 'calc(var(--pando-spacing-28) * -1)',
    variable: 'var(--pando-spacing-28)',
  },
  'spacing.-32': {
    value: 'calc(var(--pando-spacing-32) * -1)',
    variable: 'var(--pando-spacing-32)',
  },
  'spacing.-36': {
    value: 'calc(var(--pando-spacing-36) * -1)',
    variable: 'var(--pando-spacing-36)',
  },
  'spacing.-40': {
    value: 'calc(var(--pando-spacing-40) * -1)',
    variable: 'var(--pando-spacing-40)',
  },
  'spacing.-44': {
    value: 'calc(var(--pando-spacing-44) * -1)',
    variable: 'var(--pando-spacing-44)',
  },
  'spacing.-48': {
    value: 'calc(var(--pando-spacing-48) * -1)',
    variable: 'var(--pando-spacing-48)',
  },
  'spacing.-52': {
    value: 'calc(var(--pando-spacing-52) * -1)',
    variable: 'var(--pando-spacing-52)',
  },
  'spacing.-56': {
    value: 'calc(var(--pando-spacing-56) * -1)',
    variable: 'var(--pando-spacing-56)',
  },
  'spacing.-60': {
    value: 'calc(var(--pando-spacing-60) * -1)',
    variable: 'var(--pando-spacing-60)',
  },
  'spacing.-64': {
    value: 'calc(var(--pando-spacing-64) * -1)',
    variable: 'var(--pando-spacing-64)',
  },
  'spacing.-72': {
    value: 'calc(var(--pando-spacing-72) * -1)',
    variable: 'var(--pando-spacing-72)',
  },
  'spacing.-80': {
    value: 'calc(var(--pando-spacing-80) * -1)',
    variable: 'var(--pando-spacing-80)',
  },
  'spacing.-96': {
    value: 'calc(var(--pando-spacing-96) * -1)',
    variable: 'var(--pando-spacing-96)',
  },
  'spacing.-0.5': {
    value: 'calc(var(--pando-spacing-0\\.5) * -1)',
    variable: 'var(--pando-spacing-0\\.5)',
  },
  'spacing.-1.5': {
    value: 'calc(var(--pando-spacing-1\\.5) * -1)',
    variable: 'var(--pando-spacing-1\\.5)',
  },
  'spacing.-2.5': {
    value: 'calc(var(--pando-spacing-2\\.5) * -1)',
    variable: 'var(--pando-spacing-2\\.5)',
  },
  'spacing.-3.5': {
    value: 'calc(var(--pando-spacing-3\\.5) * -1)',
    variable: 'var(--pando-spacing-3\\.5)',
  },
  'colors.colorPalette': {
    value: 'var(--pando-colors-color-palette)',
    variable: 'var(--pando-colors-color-palette)',
  },
  'colors.colorPalette.50': {
    value: 'var(--pando-colors-color-palette-50)',
    variable: 'var(--pando-colors-color-palette-50)',
  },
  'colors.colorPalette.100': {
    value: 'var(--pando-colors-color-palette-100)',
    variable: 'var(--pando-colors-color-palette-100)',
  },
  'colors.colorPalette.200': {
    value: 'var(--pando-colors-color-palette-200)',
    variable: 'var(--pando-colors-color-palette-200)',
  },
  'colors.colorPalette.300': {
    value: 'var(--pando-colors-color-palette-300)',
    variable: 'var(--pando-colors-color-palette-300)',
  },
  'colors.colorPalette.400': {
    value: 'var(--pando-colors-color-palette-400)',
    variable: 'var(--pando-colors-color-palette-400)',
  },
  'colors.colorPalette.500': {
    value: 'var(--pando-colors-color-palette-500)',
    variable: 'var(--pando-colors-color-palette-500)',
  },
  'colors.colorPalette.600': {
    value: 'var(--pando-colors-color-palette-600)',
    variable: 'var(--pando-colors-color-palette-600)',
  },
  'colors.colorPalette.700': {
    value: 'var(--pando-colors-color-palette-700)',
    variable: 'var(--pando-colors-color-palette-700)',
  },
  'colors.colorPalette.800': {
    value: 'var(--pando-colors-color-palette-800)',
    variable: 'var(--pando-colors-color-palette-800)',
  },
  'colors.colorPalette.900': {
    value: 'var(--pando-colors-color-palette-900)',
    variable: 'var(--pando-colors-color-palette-900)',
  },
  'colors.colorPalette.950': {
    value: 'var(--pando-colors-color-palette-950)',
    variable: 'var(--pando-colors-color-palette-950)',
  },
  'colors.colorPalette.bg.initial': {
    value: 'var(--pando-colors-color-palette-bg-initial)',
    variable: 'var(--pando-colors-color-palette-bg-initial)',
  },
  'colors.colorPalette.initial': {
    value: 'var(--pando-colors-color-palette-initial)',
    variable: 'var(--pando-colors-color-palette-initial)',
  },
  'colors.colorPalette.bg.active': {
    value: 'var(--pando-colors-color-palette-bg-active)',
    variable: 'var(--pando-colors-color-palette-bg-active)',
  },
  'colors.colorPalette.active': {
    value: 'var(--pando-colors-color-palette-active)',
    variable: 'var(--pando-colors-color-palette-active)',
  },
  'colors.colorPalette.bg.hover': {
    value: 'var(--pando-colors-color-palette-bg-hover)',
    variable: 'var(--pando-colors-color-palette-bg-hover)',
  },
  'colors.colorPalette.hover': {
    value: 'var(--pando-colors-color-palette-hover)',
    variable: 'var(--pando-colors-color-palette-hover)',
  },
  'colors.colorPalette.border.100': {
    value: 'var(--pando-colors-color-palette-border-100)',
    variable: 'var(--pando-colors-color-palette-border-100)',
  },
  'colors.colorPalette.border.200': {
    value: 'var(--pando-colors-color-palette-border-200)',
    variable: 'var(--pando-colors-color-palette-border-200)',
  },
  'colors.colorPalette.border.initial': {
    value: 'var(--pando-colors-color-palette-border-initial)',
    variable: 'var(--pando-colors-color-palette-border-initial)',
  },
  'colors.colorPalette.surface.100': {
    value: 'var(--pando-colors-color-palette-surface-100)',
    variable: 'var(--pando-colors-color-palette-surface-100)',
  },
  'colors.colorPalette.surface.200': {
    value: 'var(--pando-colors-color-palette-surface-200)',
    variable: 'var(--pando-colors-color-palette-surface-200)',
  },
  'colors.colorPalette.surface.300': {
    value: 'var(--pando-colors-color-palette-surface-300)',
    variable: 'var(--pando-colors-color-palette-surface-300)',
  },
  'colors.colorPalette.surface.initial': {
    value: 'var(--pando-colors-color-palette-surface-initial)',
    variable: 'var(--pando-colors-color-palette-surface-initial)',
  },
  'colors.colorPalette.surface.inverse': {
    value: 'var(--pando-colors-color-palette-surface-inverse)',
    variable: 'var(--pando-colors-color-palette-surface-inverse)',
  },
  'colors.colorPalette.inverse': {
    value: 'var(--pando-colors-color-palette-inverse)',
    variable: 'var(--pando-colors-color-palette-inverse)',
  },
  'colors.colorPalette.text.100': {
    value: 'var(--pando-colors-color-palette-text-100)',
    variable: 'var(--pando-colors-color-palette-text-100)',
  },
  'colors.colorPalette.text.200': {
    value: 'var(--pando-colors-color-palette-text-200)',
    variable: 'var(--pando-colors-color-palette-text-200)',
  },
  'colors.colorPalette.text.300': {
    value: 'var(--pando-colors-color-palette-text-300)',
    variable: 'var(--pando-colors-color-palette-text-300)',
  },
  'colors.colorPalette.text.initial': {
    value: 'var(--pando-colors-color-palette-text-initial)',
    variable: 'var(--pando-colors-color-palette-text-initial)',
  },
  'colors.colorPalette.text.inverse': {
    value: 'var(--pando-colors-color-palette-text-inverse)',
    variable: 'var(--pando-colors-color-palette-text-inverse)',
  },
  'colors.colorPalette.bg.100.initial': {
    value: 'var(--pando-colors-color-palette-bg-100-initial)',
    variable: 'var(--pando-colors-color-palette-bg-100-initial)',
  },
  'colors.colorPalette.100.initial': {
    value: 'var(--pando-colors-color-palette-100-initial)',
    variable: 'var(--pando-colors-color-palette-100-initial)',
  },
  'colors.colorPalette.bg.100.hover': {
    value: 'var(--pando-colors-color-palette-bg-100-hover)',
    variable: 'var(--pando-colors-color-palette-bg-100-hover)',
  },
  'colors.colorPalette.100.hover': {
    value: 'var(--pando-colors-color-palette-100-hover)',
    variable: 'var(--pando-colors-color-palette-100-hover)',
  },
  'colors.colorPalette.bg.100.active': {
    value: 'var(--pando-colors-color-palette-bg-100-active)',
    variable: 'var(--pando-colors-color-palette-bg-100-active)',
  },
  'colors.colorPalette.100.active': {
    value: 'var(--pando-colors-color-palette-100-active)',
    variable: 'var(--pando-colors-color-palette-100-active)',
  },
  'colors.colorPalette.border.focus': {
    value: 'var(--pando-colors-color-palette-border-focus)',
    variable: 'var(--pando-colors-color-palette-border-focus)',
  },
  'colors.colorPalette.focus': {
    value: 'var(--pando-colors-color-palette-focus)',
    variable: 'var(--pando-colors-color-palette-focus)',
  },
  'colors.colorPalette.navigation.initial': {
    value: 'var(--pando-colors-color-palette-navigation-initial)',
    variable: 'var(--pando-colors-color-palette-navigation-initial)',
  },
  'colors.colorPalette.navigation.hover': {
    value: 'var(--pando-colors-color-palette-navigation-hover)',
    variable: 'var(--pando-colors-color-palette-navigation-hover)',
  },
  'colors.colorPalette.navigation.visited': {
    value: 'var(--pando-colors-color-palette-navigation-visited)',
    variable: 'var(--pando-colors-color-palette-navigation-visited)',
  },
  'colors.colorPalette.visited': {
    value: 'var(--pando-colors-color-palette-visited)',
    variable: 'var(--pando-colors-color-palette-visited)',
  },
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar
