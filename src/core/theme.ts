import { CommonThemeEntity, PaletteThemeEntity, ThemeConstantsEntity } from 'polpo/ui';

export const ThemeConstants: ThemeConstantsEntity = {
  fontFamily: 'Inter, sans-serif',
  sectionMinHeight: '810px',
  breakpoints: {
    mobile: '360px',
    mobileL: '480px',
    tablet: '768px',
    laptopS: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '1920px',
    large: '2560px',
  },
  typography: {
    hero: {
      fontSize: '60px',
      lineHeight: '120%',
      defaultWeight: 700,
      weights: {
        bold: 700,
      },
      breakpoints: [],
    },
    header1: {
      fontSize: '48px',
      lineHeight: '120%',
      defaultWeight: 700,
      weights: {
        bold: 700,
      },
      breakpoints: [],
    },
    header2: {
      fontSize: '40px',
      lineHeight: '120%',
      defaultWeight: 700,
      weights: {
        bold: 700,
      },
      breakpoints: [],
    },
    header3: {
      fontSize: '32px',
      lineHeight: '120%',
      defaultWeight: 700,
      weights: {
        bold: 700,
      },
      breakpoints: [],
    },
    header4: {
      fontSize: '20px',
      lineHeight: '120%',
      defaultWeight: 700,
      weights: {
        bold: 700,
        regular: 400,
      },
      breakpoints: [],
    },
    body: {
      fontSize: '16px',
      lineHeight: '140%',
      defaultWeight: 400,
      weights: {
        bold: 700,
        regular: 400,
        light: 300,
      },
      breakpoints: [],
    },
    label: {
      fontSize: '14px',
      lineHeight: '140%',
      defaultWeight: 400,
      weights: {
        bold: 700,
        regular: 400,
        light: 300,
      },
      breakpoints: [],
    },
    small: {
      fontSize: '12px',
      lineHeight: '140%',
      defaultWeight: 400,
      weights: {
        bold: 700,
        regular: 400,
        light: 300,
      },
      breakpoints: [],
    },
  },
};

export const CommonTheme: CommonThemeEntity = {
  black: '#000000',
  gray1: '#191919',
  gray2: '#323232',
  gray3: '#4B4B4B',
  gray4: '#646464',
  gray5: '#4B4B4B',
  gray6: '#969696',
  gray7: '#CCCCCC',
  gray8: '#DEDEDE',
  gray9: '#F0F0F0',
  white: '#FFFFFF',
  info: {
    main: '#0581ff',
    contrast: '#FFFFFF',
    light: '#7bc1ff',
    dark: '#0057b5',
  },
  active: {
    main: '#00B450',
    contrast: '#FFFFFF',
    light: '#3dd581',
    dark: '#029341',
  },
  warning: {
    main: '#FFA300',
    contrast: '#FFFFFF',
    light: '#ffc97a',
    dark: '#a16903',
  },
  alert: {
    main: '#F95F62',
    contrast: '#FFFFFF',
    light: '#ff9c9d',
    dark: '#b1282b',
  },
};

export const DarkTheme: PaletteThemeEntity = {
  background: {
    main: '#181818',
    paper: '#0F0F0F',
    disabled: '#404040',
  },
  text: {
    main: '#9C9C9C',
    light: '#FFFFFF',
    dark: '#515151',
    disabled: '#b6b6b6',
  },
  border: {
    main: '#3a4145',
  },
  primary: {
    main: '#007264',
    contrast: '#FFFFFF',
    light: '#33E1A5',
    dark: '#00574b',
  },
  secondary: {
    main: '#012e64',
    contrast: '#FFFFFF',
    light: '#033f83',
    dark: '#011c42',
  },
  tertiary: {
    main: '#012e64',
    contrast: '#FFFFFF',
    light: '#033f83',
    dark: '#011c42',
  },
};
