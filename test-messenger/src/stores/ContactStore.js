import { defineStore } from "pinia";

export const useContactStore = defineStore("ContactStore", {
  state: () => ({
    contacts: [],
  }),
  actions: {
    addChats(chatsFromServer) {
      chatsFromServer.forEach((element) => {
        this.contacts.push(element);
      });
    },
  },
});
