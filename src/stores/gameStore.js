//Libraries
import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import instance from "./instance";

class GameStore {
  games = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      games: observable,
      loading: observable,
      createGame: action,
      deleteGame: action,
      updateGame: action,
      fetchGames: action,
    });
  }

  fetchGames = async () => {
    try {
      const response = await instance.get("/games");
      this.games = response.data;
      this.loading = false;
    } catch (error) {
      console.error("GameStore -> fetchGames -> error", error);
    }
  };

  getGameById = (gameId) => this.games.find((game) => game.id === gameId);

  createGame = async (newGame, shop) => {
    // newGame.id = this.games[this.games.length - 1].id + 1;
    // newGame.slug = slugify(newGame.name);
    // this.games.push(newGame);

    try {
      const formData = new FormData();
      for (const key in newGame) formData.append(key, newGame[key]);
      const res = await instance.post(`/shops/${shop.id}/games`, formData);
      this.games.push(res.data);
      shop.games.push({ id: res.data.id });
    } catch (error) {
      console.error("GameStore -> createGame -> error", error);
    }
  };

  deleteGame = async (gameId) => {
    // this.games = this.games.filter((game) => game.id !== gameId);
    // console.log(this.games);
    try {
      await instance.delete(`/games/${gameId}`);
      this.games = this.games.filter((game) => game.id !== gameId);
    } catch (error) {
      console.error("CookieStore -> deleteCookie -> error", error);
    }
  };

  updateGame = async (updatedGame) => {
    // const game = this.games.find((game) => game.id === updatedGame.id);
    // for (const key in game) game[key] = updatedGame[key];
    // game.slug = slugify(game.name);
    try {
      const formData = new FormData();
      for (const key in updatedGame) formData.append(key, updatedGame[key]);
      await instance.put(`/games/${updatedGame.id}`, updatedGame);

      const game = this.games.find((game) => game.id === updatedGame.id);

      for (const key in game) game[key] = updatedGame[key];
    } catch (error) {
      console.error("GameStore -> updateGame -> error", error);
    }
  };
}

const gameStore = new GameStore();
gameStore.fetchGames();
export default gameStore;
