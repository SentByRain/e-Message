<script>
import "/src/assets/users.css";
import { useContactStore } from "../stores/ContactStore";

export default {
  data() {
    return {
      contactStore: useContactStore(),
    };
  },
  inject: ["isEmpty"],
};
</script>
<template>
  <div id="chat-header" @click="this.contactStore.showInfoCard = true">
    <div v-if="!isEmpty(this.contactStore.activeContact)" class="user-card">
      <img
        class="user-picture"
        :src="this.contactStore.activeContact.avatar"
        alt="Active contact"
      />
      <span>{{ this.contactStore.activeContact.name }}</span>
    </div>
  </div>
</template>

<style>
#chat-header {
  background: white;
  padding-left: 50px;
  height: 80px;
  cursor: pointer;
}
</style>
