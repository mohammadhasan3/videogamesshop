import { GameImage, InfoText } from "../styles";

const GameItem = (props) => {
  const gameObject = props.gameObject;
  return (
    <div>
      <GameImage
        src={gameObject.image}
        alt={gameObject.name}
        onClick={() => props.setGame(gameObject)}
      />
      <InfoText>{gameObject.name}</InfoText>
      <InfoText>{gameObject.price} KD</InfoText>
    </div>
  );
};

export default GameItem;
