import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import { GlobalStyle, ThemeButton } from "./styles";
import GamesList from "./Components/GamesList";
import { ThemeProvider } from "styled-components";
import logo from "./logo3.jpg";
import GameDescription from "./Components/GameDescription";
import games from "./games";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavBar from "./Components/NavBar";

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

      <NavBar toggleTheme={toggleTheme} themeText={themeText} idx={idx} />

      <Switch>
        <Route path="/games/:gameSlug">
          <GameDescription
            setGame={setGame}
            game={game}
            games={_games}
            deleteGame={deleteGame}
          />
        </Route>
        <Route path="/games">
          <GamesList setGame={setGame} games={_games} deleteGame={deleteGame} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
