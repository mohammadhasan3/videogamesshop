import { DetailWrapper, BackButton, DeleteButtonStyled } from "../styles";
import React from "react";
const GameDescription = (props) => {
  const game = props.game;

  const handleDelete = () => {
    props.deleteGame(game.id);
    props.setGame(null);
  };

  return (
    <DetailWrapper>
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
      <p>{game.price} KD</p>
      <BackButton onClick={() => props.setGame()}>Go Back</BackButton>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default GameDescription;
