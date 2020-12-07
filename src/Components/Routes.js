//Components
import ShopsList from "./ShopsList";
import ShopDescription from "./ShopDescription";
import GameDescription from "./GameDescription";
import GamesList from "./GamesList";
import Home from "./Home";

//Libraries
import { Route, Switch } from "react-router";

//Stores
import gameStore from "../stores/gameStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/shops/:shopSlug">
        <ShopDescription />
      </Route>
      <Route path="/shops">
        <ShopsList />
      </Route>

      <Route path="/games/:gameSlug">
        <GameDescription />
      </Route>
      <Route path="/games">
        <GamesList games={gameStore.games} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
