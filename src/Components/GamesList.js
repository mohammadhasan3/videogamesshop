import { ListText } from "../styles";
import GameItem from "./GameItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const GamesList = (props) => {
  const [query, setQuery] = useState("");

  const gameList = props.games
    .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
    .map((game) => (
      <GameItem
        game={game}
        key={game.id}
        setGame={props.setGame}
        deleteGame={props.deleteGame}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListText>{gameList}</ListText>
    </>
  );
};

export default GamesList;
