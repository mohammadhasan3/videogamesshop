import { GameImage, InfoText, DeleteButtonStyled } from "../styles";
import { Link } from "react-router-dom";

const GameItem = (props) => {
  const game = props.game;

  const handleDelete = () => {
    props.deleteGame(game.id);
  };

  return (
    <div>
      <Link to={`/games/${game.id}`}>
        <GameImage
          src={game.image}
          alt={game.name}
          onClick={() => props.setGame(game)}
        />
      </Link>

      <InfoText>{game.name}</InfoText>
      <InfoText>{game.price} KD</InfoText>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default GameItem;
