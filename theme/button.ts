// ==================================================================================
// import { defineStyleConfig } from '@chakra-ui/react'

// export default defineStyleConfig({
//   // Styles for the base style
//   baseStyle: {},
//   // Styles for the size variations
//   sizes: {},
//   // Styles for the visual style variations
//   variants: {},
//   // The default `size` or `variant` values
//   defaultProps: {},
// })
// ==================================================================================

import { defineStyleConfig } from "@chakra-ui/react";


// https://github.com/chakra-ui/chakra-ui/tree/v2/packages/theme/src/components

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
