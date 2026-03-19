import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      50: "#E6F6FF",
      100: "#BAE3FF",
      200: "#7CC4FA",
      300: "#47A3F3",
      400: "#2186EB",
      500: "#0967D2",
      600: "#0552B5",
      700: "#03449E",
      800: "#01337D",
      900: "#002159",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    IconButton: {
      baseStyle: {
        borderRadius: "full",
      },
    },
  },
  styles: {
    global: (props: { colorMode: "light" | "dark" }) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.50" : "gray.900",
        color: props.colorMode === "light" ? "gray.900" : "white",
      },
    }),
  },
});

export default theme;
