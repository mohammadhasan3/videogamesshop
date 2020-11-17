import { GameImage, InfoText } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const GameItem = ({ game }) => {
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
      <UpdateButton game={game}>Update</UpdateButton>
      <DeleteButton gameId={game.id} className="d-flex justify-content-center">
        Delete
      </DeleteButton>
    </div>
  );
};

export default observer(GameItem);
