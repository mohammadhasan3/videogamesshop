//Styles
import { DetailWrapper } from "../styles";

//Libraries
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import gameStore from "../stores/gameStore";

//Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const GameDescription = () => {
  const gameSlug = useParams().gameSlug;
  const game = gameStore.games.find((game) => game.slug === gameSlug);

  console.log(game);
  if (!game) return <Redirect to="/games" />;

  return (
    <DetailWrapper>
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
      <p>{game.price} KD</p>
      <UpdateButton game={game}>Update</UpdateButton>
      <DeleteButton gameId={game.id} />
    </DetailWrapper>
  );
};

export default observer(GameDescription);
