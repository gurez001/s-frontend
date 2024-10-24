import { california, kepple, neonBlue, nevada, redOrange, shakespeare, stormGrey } from './colors';

export const colorSchemes = {
  dark: {
    palette: {
      action: {
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      },
      background: {
        default: '#090a0b', // Replaced var(--mui-palette-neutral-950)
        defaultChannel: '9 10 11',
        paper: '#134e48', // Replaced var(--mui-palette-neutral-900)
        paperChannel: '19 78 72',
        level1: '#2c3e50', // Replaced var(--mui-palette-neutral-800)
        level2: '#34495e', // Replaced var(--mui-palette-neutral-700)
        level3: '#7f8c8d'  // Replaced var(--mui-palette-neutral-600)
      },
      common: {
        black: '#000000',
        white: '#ffffff'
      },
      divider: '#7f8c8d', // Replaced var(--mui-palette-neutral-700)
      dividerChannel: '50 56 62',
      error: {
        ...redOrange,
        light: redOrange[300],
        main: redOrange[400],
        dark: redOrange[500],
        contrastText: '#000000' // Replaced var(--mui-palette-common-black)
      },
      info: {
        ...shakespeare,
        light: shakespeare[300],
        main: shakespeare[400],
        dark: shakespeare[500],
        contrastText: '#000000' // Replaced var(--mui-palette-common-black)
      },
      neutral: {
        ...nevada
      },
      primary: {
        ...neonBlue,
        light: neonBlue[300],
        main: neonBlue[400],
        dark: neonBlue[500],
        contrastText: '#000000' // Replaced var(--mui-palette-common-black)
      },
      secondary: {
        ...nevada,
        light: nevada[100],
        main: nevada[200],
        dark: nevada[300],
        contrastText: '#000000' // Replaced var(--mui-palette-common-black)
      },
      success: {
        ...kepple,
        light: kepple[300],
        main: kepple[400],
        dark: kepple[500],
        contrastText: '#000000' // Replaced var(--mui-palette-common-black)
      },
      text: {
        primary: '#f0f4f8', // Replaced var(--mui-palette-neutral-100)
        primaryChannel: '240 244 248',
        secondary: '#9fa6ad', // Replaced var(--mui-palette-neutral-400)
        secondaryChannel: '159 166 173',
        disabled: '#7f8c8d'  // Replaced var(--mui-palette-neutral-600)
      },
      warning: {
        ...california,
        light: california[300],
        main: california[400],
        dark: california[500],
        contrastText: '#000000' // Replaced var(--mui-palette-common-black)
      }
    }
  },
  light: {
    palette: {
      action: {
        disabledBackground: 'rgba(0, 0, 0, 0.06)'
      },
      background: {
        default: '#ffffff', // Replaced var(--mui-palette-common-white)
        defaultChannel: '255 255 255',
        paper: '#ffffff', // Replaced var(--mui-palette-common-white)
        paperChannel: '255 255 255',
        level1: '#f2f2f2', // Replaced var(--mui-palette-neutral-50)
        level2: '#e6e6e6', // Replaced var(--mui-palette-neutral-100)
        level3: '#cccccc'  // Replaced var(--mui-palette-neutral-200)
      },
      common: {
        black: '#000000',
        white: '#ffffff'
      },
      divider: '#e6e6e6', // Replaced var(--mui-palette-neutral-200)
      dividerChannel: '220 223 228',
      error: {
        ...redOrange,
        light: redOrange[400],
        main: redOrange[500],
        dark: redOrange[600],
        contrastText: '#ffffff' // Replaced var(--mui-palette-common-white)
      },
      info: {
        ...shakespeare,
        light: shakespeare[400],
        main: shakespeare[500],
        dark: shakespeare[600],
        contrastText: '#ffffff' // Replaced var(--mui-palette-common-white)
      },
      neutral: {
        ...stormGrey
      },
      primary: {
        ...neonBlue,
        light: neonBlue[400],
        main: neonBlue[500],
        dark: neonBlue[600],
        contrastText: '#ffffff' // Replaced var(--mui-palette-common-white)
      },
      secondary: {
        ...nevada,
        light: nevada[600],
        main: nevada[700],
        dark: nevada[800],
        contrastText: '#ffffff' // Replaced var(--mui-palette-common-white)
      },
      success: {
        ...kepple,
        light: kepple[400],
        main: kepple[500],
        dark: kepple[600],
        contrastText: '#ffffff' // Replaced var(--mui-palette-common-white)
      },
      text: {
        primary: '#212636', // Replaced var(--mui-palette-neutral-900)
        primaryChannel: '33 38 54',
        secondary: '#667085', // Replaced var(--mui-palette-neutral-500)
        secondaryChannel: '102 112 133',
        disabled: '#9fa6ad'  // Replaced var(--mui-palette-neutral-400)
      },
      warning: {
        ...california,
        light: california[400],
        main: california[500],
        dark: california[600],
        contrastText: '#ffffff' // Replaced var(--mui-palette-common-white)
      }
    }
  }
};
