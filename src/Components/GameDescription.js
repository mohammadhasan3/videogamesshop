import { DetailWrapper, BackButton, DeleteButtonStyled } from "../styles";
import React from "react";
import { Redirect, useParams } from "react-router-dom";
const GameDescription = (props) => {
  const game = props.game;
  const gameId = useParams().gameSlug;
  const games = props.games.find((game) => game.slug === gameId);

  const handleDelete = () => {
    props.deleteGame(game.id);
    props.setGame(null);
  };

  if (!games) return <Redirect to="/games" />;

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
