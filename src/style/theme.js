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

// Chakra-ui Default Theme Import:
import { theme } from "@chakra-ui/core";

import "../Components/App/App.css"

// ----- This is the custom theme for Turtle Mountain Connect -----
const customTheme = {
  // Spreading the theme object to add new key values for custom css
  ...theme,
  // Add a theme.colors object to provide colors for your project. By default these colors can be referenced by the color, borderColor, and backgroundColor, fill, stroke, styles.
  // We recommend adding palette that go from 50 - 900.
  colors: {
    ...theme.colors,
    transparent: "transparent",
    tmarBlack: {
      50: "#f8f0f2",
      100: "#d9d8d8",
      200: "#bfbfbf",
      300: "#a5a5a5",
      400: "#8b8b8b",
      500: "#727272",
      600: "#585858",
      700: "#3f3f3f",
      800: "#272626", // This is our nav bar color
      900: "#130b0d",
    },
    tmarTan: {
      50: "#fef2e1",
      100: "#eedcc2",
      200: "#dfc59e",
      300: "#d1ae7a",
      400: "#c39756", // This is our nav selected button color
      500: "#a97d3c",
      600: "#84622e",
      700: "#5f461f",
      800: "#392a0f",
      900: "#190d00",
    },
    tmarNeoGreen: {
      50: "#e5fff2", // This is our page background color
      100: "#b9fedb",
      200: "#8bfdc2",
      300: "#60fdaa",
      400: "#41fd92",
      500: "#34e479",
      600: "#28b25e",
      700: "#1b7f44",
      800: "#0c4c28",
      900: "#001a0d",
    },
  },
  /*
    ----- Typography -----
    To manage Typography options, the theme object supports the following keys:
      fonts (font families)
      fontSizes
      fontWeights
      lineHeights
      letterSpacings
    */
  fonts: {
    ...theme.fonts,
    tmarBody: "Montserrat', sans-serif",
    tmarHeading: "Merriweather', serif",
    tmarMono: "Menlo, monospace",
  },
  /*
    ----- Breakpoints -----
    To configure the default breakpoints used in responsive array values, add a breakpoints array to your theme.
    These values will be used to generate mobile-first (i.e. min-width) media queries, which can then be used to apply responsive styles.
    */
  /*
     ----- Spacing -----
    The space key allows you to customize the global spacing and sizing scale for your project.
    By default these spacing value can be referenced by the padding, margin, and top, left, right, bottom styles.
    */
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