<script>
import "/src/assets/users.css";

import { useProfileStore } from "../stores/ProfileStore";

export default {
  data() {
    return {
      profileStore: useProfileStore(),
      contactQuery: "",
      searcboxActive: false,
    };
  },

  async beforeCreate() {
    let profileFromServer = await this.$requestAPI.request.getProfile();
    this.profileStore.addProfile(profileFromServer);
  },
};
</script>

<template>
  <div class="user-card">
    <img
      class="user-picture"
      :src="this.profileStore.profile.avatar"
      alt="my profile"
    />
    <div class="profile-info">
      <span>
        {{ this.profileStore.profile.name }}
      </span>
      <span class="status">
        {{ this.profileStore.profile.status }}
      </span>
    </div>
  </div>
</template>
