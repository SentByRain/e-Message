<script>
import Message from "./Message.vue";

export default {
  components: { Message },
  inject: ["messagesStore", "profileStore"],
};
</script>

<template>
  <div id="chat-container">
    <div
      class="message-container"
      v-for="(el, index) in messagesStore.messages"
      :key="index"
    >
      <Message :message="el" :id="this.profileStore.profile.id" />
    </div>
  </div>
</template>

<style>
#chat-container {
  background: #e5e5ff;
  color: white;

  overflow-y: scroll;
  overflow-x: hidden;

  scrollbar-color: #745db3 white;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

.message-container {
  margin: 0.5% 0;
  display: inline-block;
  width: 100%;
  padding: auto 0;
}
</style>
