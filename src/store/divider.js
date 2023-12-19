import { defineStore } from "pinia";
// import {useFriendsStore} from "./friends";
// import {usePresentsStore} from "./presents";

export const useDividerStore = defineStore("divider", {
  state: () => ({
    dividerList:[],
  }),
  getters: {
	
  },
  actions: {
	addNewDivider(dividerObj){
		
		this.dividerList.push({
      id: new Date().getTime(),
      ...dividerObj,
    });
	}
  },
});
