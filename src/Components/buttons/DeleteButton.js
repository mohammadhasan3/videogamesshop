//Stores
import gameStore from "../../stores/gameStore";

//Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ gameId }) => {
  //   const gameId = useParams().gameSlug;

  return (
    <DeleteButtonStyled onClick={() => gameStore.deleteGame(gameId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
