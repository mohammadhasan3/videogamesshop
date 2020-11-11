import { GameImage, InfoText, DeleteButtonStyled } from "../styles";
import { Link } from "react-router-dom";

const GameItem = (props) => {
  const game = props.game;

  const handleDelete = () => {
    props.deleteGame(game.id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/games/${game.slug}`}
        className="d-flex justify-content-center"
      >
        <GameImage
          src={game.image}
          alt={game.name}
          onClick={() => props.setGame(game)}
        />
      </Link>

      <InfoText>{game.name}</InfoText>
      <InfoText>{game.price} KD</InfoText>
      <DeleteButtonStyled
        onClick={handleDelete}
        className="d-flex justify-content-center"
      >
        Delete
      </DeleteButtonStyled>
    </div>
  );
};

export default GameItem;
