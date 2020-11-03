import games from "../games";
import { ListText } from "../styles";
import GameItem from "./GameItem";

const GamesList = () => {
  const gameList = games.map((game) => <GameItem gameObject={game} />);

  return <ListText>{gameList}</ListText>;
};

export default GamesList;
