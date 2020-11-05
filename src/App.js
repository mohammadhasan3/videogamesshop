import "./App.css";
import { useState } from "react";
import logo from "./logo3.jpg";
import { TitleHeader, LogoImage, GlobalStyle, ThemeButton } from "./styles";
import GamesList from "./Components/GamesList";
import { ThemeProvider } from "styled-components";
import GameDescription from "./Components/GameDescription";
import games from "./games";

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

  const [game, setGame] = useState(null);

  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  const setView = () => {
    if (game) return <GameDescription game={game} />;
    return <GamesList setGame={setGame} />;
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
      </div>
      <>{setView()}</>
    </ThemeProvider>
  );
}

export default App;
