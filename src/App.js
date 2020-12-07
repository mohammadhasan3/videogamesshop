import "./App.css";
import { useState } from "react";

import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

import { observer } from "mobx-react";

//Components
import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";

//Stores
import gameStore from "./stores/gameStore";
import shopStore from "./stores/shopStore";

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
      {shopStore.loading || gameStore.loading ? <h1>Loadinggg</h1> : <Routes />}
    </ThemeProvider>
  );
}

export default observer(App);
