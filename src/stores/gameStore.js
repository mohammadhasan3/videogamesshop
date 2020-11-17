//Data
import games from "../games";

//Libraries
import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";

class GameStore {
  games = games;

  constructor() {
    makeObservable(this, {
      games: observable,
      createGame: action,
      deleteGame: action,
    });
  }

  createGame = (newGame) => {
    newGame.id = games[games.length - 1].id + 1;
    newGame.slug = slugify(newGame.name);
    this.games.push(newGame);
  };

  deleteGame = (gameId) => {
    this.games = this.games.filter((game) => game.id !== gameId);
    console.log(this.games);
  };
}

const gameStore = new GameStore();
export default gameStore;