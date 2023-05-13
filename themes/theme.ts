import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

export const tokens = {
  grey: {
    100: "#737373",
    200: "#666666",
    300: "#595959",
    400: "#4D4D4D",
    500: "#404040",
    600: "#333333",
    700: "#262626",
    800: "#191919",
    900: "#0D0D0D",
  },
};

declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    display1: false;
    display2: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    body3: false;
    body4: false;
    body5: false;

    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    headlineLarge: true;
    headlineMedium: true;
    headlineSmall: true;
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#feece3",
          100: "#fdc6ac",
          200: "#fba175",
          300: "#fa7b3e",
          400: "#f85507",
          500: "#c14205",
          600: "#8a2f04",
          700: "#531c02",
          800: "#531c02",
          900: "#1c0901",
        },
      },
    },
  },
  components: {
    JoyTypography: {
      defaultProps: {
        level: "bodyLarge",
        levelMapping: {
          displayLarge: "h1",
          displayMedium: "h2",
          displaySmall: "h3",
          headlineLarge: "h2",
          headlineMedium: "h3",
          headlineSmall: "h4",
          titleLarge: "h3",
          titleMedium: "h4",
          titleSmall: "div",
          labelLarge: "span",
          labelMedium: "span",
          labelSmall: "span",
          bodyLarge: "p",
          bodyMedium: "p",
          bodySmall: "p",
        },
      },
    },
  },
  fontFamily: {
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  typography: {
    // @ts-ignore
    display1: undefined,
    display2: undefined,
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    body1: undefined,
    body2: undefined,
    body3: undefined,
    body4: undefined,
    body5: undefined,

    displayLarge: {
      fontSize: "57px",
      lineHeight: "64px",
      letterSpacing: "-0.25px",
    },
    displayMedium: {
      fontSize: "45px",
      lineHeight: "52px",
    },
    displaySmall: {
      fontSize: "36px",
      lineHeight: "44px",
    },
    headlineLarge: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    headlineMedium: {
      fontSize: "28px",
      lineHeight: "36px",
    },
    headlineSmall: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    titleLarge: {
      fontSize: "22px",
      lineHeight: "28px",
    },
    titleMedium: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      letterSpacing: "0.1px",
    },
    titleSmall: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "500",
      letterSpacing: "0.1px",
    },
    labelLarge: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "500",
      letterSpacing: "0.1px",
    },
    labelMedium: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
    labelSmall: {
      fontSize: "11px",
      lineHeight: "16px",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
    bodyLarge: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    bodyMedium: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    bodySmall: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
  },
});
