import { defineStore } from "pinia";

export const useProfileStore = defineStore("ProfileStore", {
  state: () => ({
    profile: [],
  }),
  actions: {
    addProfile(profileFromServer) {
      this.profile.push(profileFromServer);
    },
  },
});
