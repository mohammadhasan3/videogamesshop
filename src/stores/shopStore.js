//Libraries
import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ShopStore {
  shops = [];

  constructor() {
    makeObservable(this, {
      shops: observable,
      createShop: action,
      deleteShop: action,
      updateShop: action,
      fetchShops: action,
    });
  }

  fetchShops = async () => {
    try {
      const response = await axios.get("http://localhost:8000/shops");
      this.shops = response.data;
    } catch (error) {
      console.error("ShopStore -> fetchShops -> error", error);
    }
  };

  createShop = async (newShop) => {
    // newShop.id = this.shops[this.shops.length - 1].id + 1;
    // newShop.slug = slugify(newShop.name);
    // this.shops.push(newShop);

    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await axios.post("http://localhost:8000/shops", formData);
      this.shops.push(res.data);
    } catch (error) {
      console.error("ShopStore -> createShop -> error", error);
    }
  };

  deleteShop = async (shopId) => {
    // this.shops = this.shops.filter((shop) => shop.id !== shopId);
    // console.log(this.shops);
    try {
      await axios.delete(`http://localhost:8000/shops/${shopId}`);
      this.shops = this.shops.filter((shop) => shop.id !== shopId);
    } catch (error) {
      console.error("CookieStore -> deleteCookie -> error", error);
    }
  };

  updateShop = async (updatedShop) => {
    // const shop = this.shops.find((shop) => shop.id === updatedShop.id);
    // for (const key in shop) shop[key] = updatedShop[key];
    // shop.slug = slugify(shop.name);
    try {
      const formData = new FormData();
      for (const key in updatedShop) formData.append(key, updatedShop[key]);
      await axios.put(
        `http://localhost:8000/shops/${updatedShop.id}`,
        updatedShop
      );

      const shop = this.shops.find((shop) => shop.id === updatedShop.id);

      for (const key in shop) shop[key] = updatedShop[key];
    } catch (error) {
      console.error("ShopStore -> updateShop -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
