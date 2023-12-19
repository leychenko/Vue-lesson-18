import { defineStore } from "pinia";
import { presents } from "@/store/data.js";

export const usePresentsStore = defineStore("presents", {
  state: () => ({
    presentsList: presents,
  }),
  getters: {},
  actions: {
    addNewPresent(present) {
      this.presentsList.push({
        id: new Date().getTime(),
        ...present,
      });
    },
    deletePresent(presentId) {
      this.presentsList = this.presentsList.filter(
        (item) => item.id !== presentId
      );
    },
  },
});
