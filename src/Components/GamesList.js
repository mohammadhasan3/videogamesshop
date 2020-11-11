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
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListText className="row">{gameList}</ListText>
    </div>
  );
};

export default GamesList;
