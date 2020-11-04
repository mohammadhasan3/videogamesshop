import "./App.css";
import { useState } from "react";
import logo from "./logo3.jpg";
import { TitleHeader, LogoImage, GlobalStyle, ThemeButton } from "./styles";
import GamesList from "./Components/GamesList";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColour: "#121929",
    backgroundColour: "#ede6d6",
    priceColour: "#D2691E",
  },

  dark: {
    mainColour: "#fff",
    backgroundColour: "black",
    priceColour: "Eggshell",
  },
};

function App() {
  const themeText = ["Light Mode", "Dark Mode"];

  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  let idx = 2;
  if (themeMode === "light") {
    idx = 1;
  } else {
    idx = 0;
  }

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{themeText[idx]} </ThemeButton>
      <div>
        <div>
          <TitleHeader>
            Your number one destination for all things gaming
          </TitleHeader>

          <LogoImage src={logo} alt="Company Logo" />
        </div>

        <GamesList />
      </div>
    </ThemeProvider>
  );
}

export default App;
