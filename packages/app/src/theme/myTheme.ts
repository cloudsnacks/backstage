import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#2b3a42', // Dark ocean blue
      },
      secondary: {
        main: '#3f5167', // Darker sky blue
      },
      error: {
        main: '#5e0b15', // Dark coral red
      },
      warning: {
        main: '#815a22', // Dark sand brown
      },
      info: {
        main: '#1c5d99', // Deep sea blue
      },
      success: {
        main: '#4c7459', // Dark seagrass green
      },
      background: {
        default: '#1e2f3a', // Dark ocean depth blue
        paper: '#1e2f3a', // Dark ocean depth blue
      },
      banner: {
        info: '#1c5d99', // Deep sea blue
        error: '#4c7459', // Dark coral red
        text: '#2b3a42', // Dark ocean blue
        link: '#3f5167', // Darker sky blue
      },
      errorBackground: '#5e0b15', // Dark coral red
      warningBackground: '#815a22', // Dark sand brown
      infoBackground: '#2b3a42', // Dark ocean blue
      navigation: {
        background: '#2b3a42', // Dark ocean blue
        indicator: '#815a22', // Dark sand brown
        color: '#1e2f3a', // Dark ocean depth blue
        selectedColor: '#ffffff', // White
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Arial', // More readable and professional
  pageTheme: {
    home: genPageTheme({ colors: ['#4c7459', '#2b3a42'], shape: shapes.wave }), // Dark coral red to dark ocean blue
    documentation: genPageTheme({
      colors: ['#5e0b15', '#2b3a42'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#5e0b15', '#2b3a42'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#5e0b15', '#2b3a42'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#5e0b15', '#2b3a42'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#5e0b15', '#2b3a42'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#5e0b15', '#2b3a42'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#5e0b15', '#2b3a42'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#5e0b15', '#2b3a42'], shape: shapes.wave }),
  },
});
