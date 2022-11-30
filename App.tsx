import Navigation from "./src/navigation/navigation";
import {Auth} from "@services/auth/auth";
import {ThemeProvider} from "styled-components/native";
import {useColorScheme} from "@hooks/useColorScheme/useColorScheme";

export default function App() {
  const isDark = useColorScheme();

  return (
    <ThemeProvider theme={isDark ? {
      darkNotBlack: "#15151b",
      white: "#ffffff",
      grey: "#b9bbbe",
      disabled: "#5c5d60",
      notQuiteBlack: "#27272d",
      blarple: "#252530",
      danger: "#ed4245",
      green: "#3ba55d",
      purple: "#6563ee",
      black: "#000000"
    } : {
      darkNotBlack: "#ffffff",
      white: "#000000",
      grey: "#b9bbbe",
      disabled: "#5c5d60",
      notQuiteBlack: "#27272d",
      blarple: "#252530",
      danger: "#ed4245",
      green: "#3ba55d",
      purple: "#6563ee",
      black: "#ffffff"
    }}>
      <Auth>
          <Navigation/>
      </Auth>
    </ThemeProvider>
  );
}
