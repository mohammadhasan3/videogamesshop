import { ListText } from "../styles";
import GameItem from "./GameItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddButton from "./buttons/AddButton";
import gameStore from "../stores/gameStore";
import { observer } from "mobx-react";

const GamesList = () => {
  const [query, setQuery] = useState("");

  const gameList = gameStore.games
    .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
    .map((games) => <GameItem game={games} key={games.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListText className="row">{gameList}</ListText>
    </div>
  );
};

export default observer(GamesList);
