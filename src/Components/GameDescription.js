import { DetailWrapper } from "../styles";
import React from "react";

const GameDescription = (props) => {
  const game = props.game;
  return (
    <DetailWrapper>
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
      <p>{game.price} KD</p>
    </DetailWrapper>
  );
};

export default GameDescription;
