import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import { GlobalStyle } from "./styles";
import GamesList from "./Components/GamesList";
import { ThemeProvider } from "styled-components";
import gameStore from "./stores/gameStore";
import GameDescription from "./Components/GameDescription";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";
import ShopsList from "./Components/ShopsList";
import ShopDescription from "./Components/ShopDescription";

const theme = {
  light: {
    mainColour: "#000033",
    backgroundColour: "#00B2EE",
    priceColour: "#000033",
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

      <NavBar toggleTheme={toggleTheme} themeText={themeText} idx={idx} />

      <Switch>
        <Route path="/shops/:shopSlug">
          <ShopDescription />
        </Route>
        <Route path="/shops">
          <ShopsList />
        </Route>

        <Route path="/games/:gameSlug">
          <GameDescription />
        </Route>
        <Route path="/games">
          <GamesList games={gameStore.games} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default observer(App);
