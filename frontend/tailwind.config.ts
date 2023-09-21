import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '320px',
      md: '768px',
      lg: '1000px',
      xl: '1400px',
    },
    fontSize: {
      'desktop-display': ['3.25rem', { lineHeight: '3.6875rem' }],
      'desktop-headline': ['2.3125rem', { lineHeight: '2.75rem' }],
      'desktop-title': ['1.375rem', { lineHeight: '1.75rem' }],
      'desktop-body-large': ['1.125rem', { lineHeight: '1.625rem' }],
      'desktop-body': ['1rem', { lineHeight: '1.5rem' }],
      'desktop-body-small': [
        '0.875rem',
        { lineHeight: '1.25rem', letterSpacing: '0.00625rem' },
      ],
      'desktop-label': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.00625rem',
        },
      ],
      'mobile-display': [`2.25rem`, { lineHeight: '2.75rem' }],
      'mobile-headline': [`1.5625rem`, { lineHeight: '2rem' }],
      'mobile-title': ['1rem', { lineHeight: '1.5rem' }],
      'mobile-body-large': ['1rem', { lineHeight: '1.5rem' }],
      'mobile-body': [
        '0.875rem',
        { lineHeight: '1.25rem', letterSpacing: '0.01563rem' },
      ],
      'mobile-label': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.03125rem',
        },
      ],
      subtitle: [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.03125rem',
        },
      ],
      hyperlink: [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.00938rem',
        },
      ],
      'button-large': [
        '1.375rem',
        {
          lineHeight: '1.5625rem',
        },
      ],
      'button-medium': [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      'button-small': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.00625rem',
        },
      ],
    },
    extend: {
      fontFamily: {
        raleway: 'var(--font-raleway)',
        inter: 'var(--font-inter)',
      },
      margin: {
        xs: '0.5rem',
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '2.5rem',
      },
      gap: {
        xs: '0.5rem',
        s: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      colors: {
        black: '#0B0E14',
        core: {
          primary: '#FF0000',
          secondary: '#E0DF5E',
          tertiary: '#319DE0',
          colarRed: '#E04848',
          steelBlue: '#286A94',
          error: '#FB4176',
          neutral: '#FFFFFF',
          neutralVariant: '#1F2228',
        },

        sys: {
          light: {
            primary: '#C00100',
            onPrimary: '#FFFFFF',
            primaryContainer: '#FFDAD4',
            onPrimaryContainer: '#410000',
            primaryFixed: '#FFDAD4',
            onPrimaryFixed: '#410000',
            primaryFixedDim: '#FFB4A8',
            onPrimaryFixedVariant: '#930100',
            secondary: '#626200',
            onSecondary: '#FFFFFF',
            secondaryContainer: '#E9E866',
            onSecondaryContainer: '#1D1D00',
            secondaryFixed: '#E9E866',
            onSecondaryFixed: '#1D1D00',
            secondaryFixedDim: '#CDCC4D',
            onSecondaryFixedVariant: '#4A4900',
            tertiary: '#006495',
            onTertiary: '#FFFFFF',
            tertiaryContainer: '#CBE6FF',
            onTertiaryContainer: '#001E30',
            tertiaryFixed: '#CBE6FF',
            onTertiaryFixed: '#001E30',
            tertiaryFixedDim: '#90CDFF',
            onTertiaryFixedVariant: '#004B72',
            error: '#BC004C',
            onError: '#FFFFFF',
            errorContainer: '#FFD9DE',
            onErrorContainer: '#400014',
            outline: '#74777F',
            background: '#FAFDFD',
            onBackground: '#191C1D',
            surface: '#F8FAFA',
            onSurface: '#191C1D',
            surfaceVariant: '#E0E2EC',
            onSurfaceVariant: '#43474E',
            inverseSurface: '#2E3132',
            inverseOnSurface: '#EFF1F1',
            inversePrimary: '#FFB4A8',
            shadow: '#000000',
            surfaceTint: '#C00100',
            outlineVariant: '#C4C6CF',
            scrim: '#000000',
            surfaceContainerHighest: '#E1E3E3',
            surfaceContainerHigh: '#E6E8E9',
            surfaceContainer: '#ECEEEF',
            surfaceContainerLow: '#F2F4F4',
            surfaceContainerLowest: '#FFFFFF',
            surfaceBright: '#F8FAFA',
            surfaceDim: '#D8DADB',
          },
          dark: {
            primary: '#FFB4A8',
            onPrimary: '#690100',
            primaryContainer: '#930100',
            onPrimaryContainer: '#FFDAD4',
            primaryFixed: '#FFDAD4',
            onPrimaryFixed: '#410000',
            primaryFixedDim: '#FFB4A8',
            onPrimaryFixedVariant: '#930100',
            secondary: '#CDCC4D',
            onSecondary: '#323200',
            secondaryContainer: '#4A4900',
            onSecondaryContainer: '#E9E866',
            secondaryFixed: '#E9E866',
            onSecondaryFixed: '#1D1D00',
            secondaryFixedDim: '#CDCC4D',
            onSecondaryFixedVariant: '#4A4900',
            tertiary: '#90CDFF',
            onTertiary: '#003450',
            tertiaryContainer: '#004B72',
            onTertiaryContainer: '#CBE6FF',
            tertiaryFixed: '#CBE6FF',
            onTertiaryFixed: '#001E30',
            tertiaryFixedDim: '#90CDFF',
            onTertiaryFixedVariant: '#004B72',
            error: '#FFB2BE',
            onError: '#660026',
            errorContainer: '#900038',
            onErrorContainer: '#FFD9DE',
            outline: '#8E9199',
            background: '#191C1D',
            onBackground: '#E1E3E3',
            surface: '#101415',
            onSurface: '#C4C7C7',
            surfaceVariant: '#43474E',
            onSurfaceVariant: '#C4C6CF',
            inverseSurface: '#E1E3E3',
            inverseOnSurface: '#191C1D',
            inversePrimary: '#C00100',
            shadow: '#000000',
            surfaceTint: '#FFB4A8',
            outlineVariant: '#43474E',
            scrim: '#000000',
            surfaceContainerHighest: '#323536',
            surfaceContainerHigh: '#272B2B',
            surfaceContainer: '#1D2021',
            surfaceContainerLow: '#191C1D',
            surfaceContainerLowest: '#0B0F0F',
            surfaceBright: '#363A3A',
            surfaceDim: '#101415',
          },
        },
        primary: {
          '0': '#000000',
          '5': '#2D0000',
          '10': '#410000',
          '20': '#690100',
          '25': '#7E0100',
          '30': '#930100',
          '35': '#A90100',
          '40': '#C00100',
          default: '#EF0000',
          '60': '#FF5540',
          '70': '#FF8A78',
          '80': '#FFB4A8',
          '90': '#FFDAD4',
          '95': '#FFEDEA',
          '98': '#FFF8F6',
          '99': '#FFFBFF',
          '100': '#FFFFFF',
        },
        secondary: {
          '0': '#000000',
          '5': '#121200',
          '10': '#1D1D00',
          '20': '#323200',
          '25': '#3E3E00',
          '30': '#4A4900',
          '35': '#565500',
          '40': '#626200',
          default: '#7C7B00',
          '60': '#969517',
          '70': '#B1B034',
          '80': '#CDCC4D',
          '90': '#E9E866',
          '95': '#F8F773',
          '98': '#FFFDB8',
          '99': '#FFFBFF',
          '100': '#FFFFFF',
        },
        tertiary: {
          '0': '#000000',
          '5': '#001220',
          '10': '#001E30',
          '20': '#003450',
          '25': '#003F60',
          '30': '#004B72',
          '35': '#005783',
          '40': '#006495',
          default: '#007EBA',
          '60': '#2998DB',
          '70': '#4FB3F8',
          '80': '#90CDFF',
          '90': '#CBE6FF',
          '95': '#E7F2FF',
          '98': '#F7F9FF',
          '99': '#FCFCFF',
          '100': '#FFFFFF',
        },
        error: {
          '0': '#000000',
          '5': '#2C000C',
          '10': '#400014',
          '20': '#660026',
          '25': '#7B002F',
          '30': '#900038',
          '35': '#A60042',
          '40': '#BC004C',
          default: '#E02A63',
          '60': '#FF4E7D',
          '70': '#FF869E',
          '80': '#FFB2BE',
          '90': '#FFD9DE',
          '95': '#FFECEE',
          '98': '#FFF8F7',
          '99': '#FFFBFF',
          '100': '#FFFFFF',
        },
        neutral: {
          '0': '#000000',
          '5': '#0E1212',
          '10': '#191C1D',
          '20': '#2E3132',
          '25': '#393C3D',
          '30': '#444748',
          '35': '#505354',
          '40': '#5C5F5F',
          '50': '#747878',
          '60': '#8E9192',
          '70': '#A9ACAC',
          '80': '#C4C7C7',
          '90': '#E1E3E3',
          '95': '#EFF1F1',
          '98': '#F8FAFA',
          '99': '#FAFDFD',
          '100': '#FFFFFF',
        },
        neutralVariant: {
          '0': '#000000',
          '5': '#0D1117',
          '10': '#181C22',
          '20': '#2D3038',
          '25': '#383B43',
          '30': '#43474E',
          '35': '#4F525A',
          '40': '#5B5E66',
          '50': '#74777F',
          '60': '#8E9199',
          '70': '#A8ABB4',
          '80': '#C4C6CF',
          '90': '#E0E2EC',
          '95': '#EEF0FA',
          '98': '#F9F9FF',
          '99': '#FDFBFF',
          '100': '#FFFFFF',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        highlightGradient: 'linear-gradient(90deg, #F00 50%, #0B0E14 50%)',
      },
    },
  },
  plugins: [],
};
export default config;
