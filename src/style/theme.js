// https://chakra-ui.com/theme
// https://system-ui.com/theme/
// https://github.com/chakra-ui/chakra-ui/tree/master/
// https://smart-swatch.netlify.app/
// https://styled-system.com/table/

// ----- Start of default theme colors -----
/*
----- Black & White -----

Black
#000

White
#FFF

----- Gray -----

Gray 50
#F7FAFC

Gray 100
#EDF2F7

Gray 200
#E2E8F0

Gray 300
#CBD5E0

Gray 400
#A0AEC0

Gray 500
#718096

Gray 600
#4A5568

Gray 700
#2D3748

Gray 800
#1A202C

Gray 900
#171923

----- Red -----

Red 50
#FFF5F5

Red 100
#FED7D7

Red 200
#FEB2B2

Red 300
#FC8181

Red 400
#F56565

Red 500
#E53E3E

Red 600
#C53030

Red 700
#9B2C2C

Red 800
#822727

Red 900
#63171B

----- Orange -----

Orange 50
#FFFAF0

Orange 100
#FEEBC8

Orange 200
#FBD38D

Orange 300
#F6AD55

Orange 400
#ED8936

Orange 500
#DD6B20

Orange 600
#C05621

Orange 700
#9C4221

Orange 800
#7B341E

Orange 900
#652B19

----- Yellow -----

Yellow 50
#FFFFF0

Yellow 100
#FEFCBF

Yellow 200
#FAF089

Yellow 300
#F6E05E

Yellow 400
#ECC94B

Yellow 500
#D69E2E

Yellow 600
#B7791F

Yellow 700
#975A16

Yellow 800
#744210

Yellow 900
#5F370E

----- Green -----

Green 50
#F0FFF4

Green 100
#C6F6D5

Green 200
#9AE6B4

Green 300
#68D391

Green 400
#48BB78

Green 500
#38A169

Green 600
#2F855A

Green 700
#276749

Green 800
#22543D

Green 900
#1C4532

----- Teal -----

Teal 50
#E6FFFA

Teal 100
#B2F5EA

Teal 200
#81E6D9

Teal 300
#4FD1C5

Teal 400
#38B2AC

Teal 500
#319795

Teal 600
#2C7A7B

Teal 700
#285E61

Teal 800
#234E52

Teal 900
#1D4044

----- Blue -----

Blue 50
#EBF8FF

Blue 100
#CEEDFF

Blue 200
#90CDF4

Blue 300
#63B3ED

Blue 400
#4299E1

Blue 500
#3182CE

Blue 600
#2A69AC

Blue 700
#1E4E8C

Blue 800
#153E75

Blue 900
#1A365D

----- Cyan -----

Cyan 50
#EDFDFD

Cyan 100
#C4F1F9

Cyan 200
#9DECF9

Cyan 300
#76E4F7

Cyan 400
#0BC5EA

Cyan 500
#00B5D8

Cyan 600
#00A3C4

Cyan 700
#0987A0

Cyan 800
#086F83

Cyan 900
#065666

----- Purple -----

Purple 50
#FAF5FF

Purple 100
#E9D8FD

Purple 200
#D6BCFA

Purple 300
#B794F4

Purple 400
#9F7AEA

Purple 500
#805AD5

Purple 600
#6B46C1

Purple 700
#553C9A

Purple 800
#44337A

Purple 900
#322659

----- Pink -----

Pink 50
#FFF5F7

Pink 100
#FED7E2

Pink 200
#FBB6CE

Pink 300
#F687B3

Pink 400
#ED64A6

Pink 500
#D53F8C

Pink 600
#B83280

Pink 700
#97266D

Pink 800
#702459

Pink 900
#521B41

*/
// ----- End of default theme colors -----

import { theme } from "@chakra-ui/core";

// ----- This is the custom theme for Turtle Mountain Connect -----
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  // Add a theme.colors object to provide colors for your project. By default these colors can be referenced by the color, borderColor, and backgroundColor, fill, stroke, styles.
  // We recommend adding palette that go from 50 - 900.
  // colors: {
  //   transparent: "transparent",
  //   black: "#000",
  //   white: "#fff",
  // },
  /*
    To manage Typography options, the theme object supports the following keys:
      fonts (font families)
      fontSizes
      fontWeights
      lineHeights
      letterSpacings
    */
  // fonts: {
  //   body: "system-ui, sans-serif",
  //   heading: "Georgia, serif",
  //   mono: "Menlo, monospace",
  // },
  // fontSizes: {
  //   xs: "12px",
  //   sm: "14px",
  //   md: "16px",
  //   lg: "18px",
  //   xl: "20px",
  //   "2xl": "24px",
  //   "3xl": "28px",
  //   "4xl": "36px",
  //   "5xl": "48px",
  //   "6xl": "64px",
  // },
  // fontWeights: {
  //   normal: 400,
  //   medium: 500,
  //   bold: 700,
  // },
  // lineHeights: {
  //   normal: "normal",
  //   none: "1",
  //   shorter: "1.25",
  //   short: "1.375",
  //   base: "1.5",
  //   tall: "1.625",
  //   taller: "2",
  // },
  // letterSpacings: {
  //   tighter: "-0.05em",
  //   tight: "-0.025em",
  //   normal: "0",
  //   wide: "0.025em",
  //   wider: "0.05em",
  //   widest: "0.1em",
  // },
  /*
    To configure the default breakpoints used in responsive array values, add a breakpoints array to your theme.
    These values will be used to generate mobile-first (i.e. min-width) media queries, which can then be used to apply responsive styles.
    */
  // breakpoints: ["30em", "48em", "62em", "80em"],
  /*
    The space key allows you to customize the global spacing and sizing scale for your project.
    By default these spacing value can be referenced by the padding, margin, and top, left, right, bottom styles.
    */
  // space: {
  //   px: "1px",
  //   "0": "0",
  //   "1": "0.25rem",
  //   "2": "0.5rem",
  //   "3": "0.75rem",
  //   "4": "1rem",
  //   "5": "1.25rem",
  //   "6": "1.5rem",
  //   "8": "2rem",
  //   "10": "2.5rem",
  //   "12": "3rem",
  //   "16": "4rem",
  //   "20": "5rem",
  //   "24": "6rem",
  //   "32": "8rem",
  //   "40": "10rem",
  //   "48": "12rem",
  //   "56": "14rem",
  //   "64": "16rem",
  // },
  /*
    ----- Sizes -----
    The sizes key allows you to customize the global sizing of components you build for your project.
    By default these spacing value can be referenced by the width, height, and maxWidth, minWidth, maxHeight, minHeight styles.
    ----- Z-Index ----- 
    Chakra provides some zIndex values out of the box to control the stacking order of components.
    ---------------
    ----- Icons -----
    All Chakra icons are stored in the theme object under the icons key.
    */
};

export default customTheme;