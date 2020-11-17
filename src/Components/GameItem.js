import { GameImage, InfoText, DeleteButtonStyled } from "../styles";
import { Link } from "react-router-dom";

//Stores
import gameStore from "../stores/gameStore";

//Components
import DeleteButton from "./buttons/DeleteButton";

const GameItem = ({ game }) => {
  const handleDelete = () => {
    gameStore.deleteGame(game.id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/games/${game.slug}`}
        className="d-flex justify-content-center"
      >
        <GameImage src={game.image} alt={game.name} />
      </Link>

      <InfoText>{game.name}</InfoText>
      <InfoText>{game.price} KD</InfoText>
      <DeleteButton gameId={game.id} className="d-flex justify-content-center">
        Delete
      </DeleteButton>
    </div>
  );
};

export default GameItem;
