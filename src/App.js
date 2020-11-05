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
    red: "#ff3232",
  },

  dark: {
    mainColour: "#f0ead6",
    backgroundColour: "black",
    priceColour: "#f0ead6",
    red: "#ff3232",
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

  const [_games, setGames] = useState(games);

  const deleteGame = (gameId) => {
    const updatedGames = _games.filter((game) => game.id !== gameId);
    setGames(updatedGames);
  };

  const setView = () => {
    if (game)
      return (
        <GameDescription
          setGame={setGame}
          game={game}
          games={_games}
          deleteGame={deleteGame}
        />
      );
    return (
      <GamesList setGame={setGame} games={_games} deleteGame={deleteGame} />
    );
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
