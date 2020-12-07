import { observable, makeAutoObservable } from "mobx";
import instance from "./instance";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
