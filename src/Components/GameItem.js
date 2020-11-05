import { GameImage, InfoText, DeleteButtonStyled } from "../styles";

const GameItem = (props) => {
  const game = props.game;

  const handleDelete = () => {
    props.deleteGame(game.id);
  };

  return (
    <div>
      <GameImage
        src={game.image}
        alt={game.name}
        onClick={() => props.setGame(game)}
      />
      <InfoText>{game.name}</InfoText>
      <InfoText>{game.price} KD</InfoText>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default GameItem;
