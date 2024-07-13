import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Menu } from "./menu";

// refer docs for better customization idea - https://github.com/chakra-ui/chakra-ui/tree/v2/packages/theme

// https://github.com/chakra-ui/chakra-ui/blob/v2/packages/theme/src/utils/is-chakra-theme.ts

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
        margin: "0px",
        padding: "0px",
        "@media screen and (max-width: 800px)": {
          overflowX: "hidden",
        },
      },
      body: {
        overflowX: "hidden",
      },
      "&::-webkit-scrollbar": {
        "background-color": "#F5F5F5",
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        width: "6px",
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
        "background-color": "#F5F5F5",
      },
      "&::-webkit-scrollbar-thumb": {
        "background-color": "#555",
        borderRadius: "24px",
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  components: {
    Button,
    Menu
  }
});
