import { defineStore } from "pinia";
import {friends} from "@/store/data.js";

export const useFriendsStore = defineStore("friends", {
  state: () => ({
    friendsList: friends,
  }),
  getters: {},
  actions: {
    addNewFriend(friend) {
      this.friendsList.push({
        id: new Date().getTime(),
        ...friend,
      });
    },
    deleteFriend(friendId) {
      this.friendsList = this.friendsList.filter(
        (item) => item.id !== friendId
      );
    },
  },
});
