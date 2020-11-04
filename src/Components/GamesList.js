import games from "../games";
import { ListText } from "../styles";
import GameItem from "./GameItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const GamesList = () => {
  const [query, setQuery] = useState("");

  const gameList = games
    .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
    .map((game) => <GameItem gameObject={game} key={game.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListText>{gameList}</ListText>
    </>
  );
};

export default GamesList;
