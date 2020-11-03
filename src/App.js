import "./App.css";
import logo from "./logo.png";
import { TitleHeader, LogoImage, ListText } from "./styles";
import GamesList from "./Components/GamesList";

function App() {
  return (
    <div>
      <div>
        <TitleHeader>
          Your number one destination for all things gaming
        </TitleHeader>

        <LogoImage src={logo} alt="Company Logo" />
      </div>

      <ListText>
        <GamesList />
      </ListText>
    </div>
  );
}

export default App;
