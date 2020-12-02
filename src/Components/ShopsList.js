import { ListText } from "../styles";
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import shopStore from "../stores/shopStore";
import { observer } from "mobx-react";

const ShopsList = () => {
  const [query, setQuery] = useState("");

  const shopList = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shops) => <ShopItem shop={shops} key={shops.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListText className="row">{shopList}</ListText>
    </div>
  );
};

export default observer(ShopsList);
