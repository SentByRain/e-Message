import { defineStore } from "pinia";

export const useProfileStore = defineStore("ProfileStore", {
  state: () => ({
    profile: {
      type: Object,
      required: true,
    },
  }),
  actions: {
    addProfile(profileFromServer) {
      this.profile = profileFromServer;
    },
  },
});
