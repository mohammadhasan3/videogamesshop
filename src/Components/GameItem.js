import { GameImage, InfoText } from "../styles";

const GameItem = (props) => {
  return (
    <div>
      <GameImage src={props.gameObject.image} alt={props.gameObject.name} />
      <InfoText>{props.gameObject.name}</InfoText>
      <InfoText>{props.gameObject.price} KD</InfoText>
    </div>
  );
};

export default GameItem;
