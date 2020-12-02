//Styles
import { DetailWrapper } from "../styles";

//Libraries
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import shopStore from "../stores/shopStore";

//Components

import AddButton from "./buttons/AddButton";
import GamesList from "./GamesList";
import gameStore from "../stores/gameStore";

const ShopDescription = () => {
  const shopSlug = useParams().shopSlug;
  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);

  console.log(shop);
  if (!shop) return <Redirect to="/shops" />;
  const games = shop.games.map((game) => gameStore.getGameById(game.id));

  return (
    <>
      <DetailWrapper>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} />

        {/* <UpdateButton shop={shop}>Update</UpdateButton>
      <DeleteButton shopId={shop.id} /> */}
      </DetailWrapper>
      <GamesList games={games} />
      <AddButton shop={shop} />
    </>
  );
};

export default observer(ShopDescription);
