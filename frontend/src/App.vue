<script>
import ChatBar from "./components/ChatBar.vue";
import Inscription from "./components/Inscription.vue";
import MessengerRegion from "./components/MessengerRegion.vue";
import InfoCard from "./components/InfoCard.vue";

import { useProfileStore } from "./stores/ProfileStore";
import { useContactStore } from "./stores/ContactStore";
import { useMessagesStore } from "./stores/MessagesStore";

import "primeicons/primeicons.css";

export default {
  components: { ChatBar, Inscription, MessengerRegion, InfoCard },

  data() {
    return {
      openInfoCard: "false",
      profileStore: useProfileStore(),
      contactStore: useContactStore(),
      messagesStore: useMessagesStore(),
    };
  },

  async beforeCreate() {
    let chatsFromServer = await this.$requestAPI.request.getChats();
    this.contactStore.addChats(chatsFromServer);
  },

  methods: {
    scrollToNewMessage() {
      const chat = document.getElementById("chat-container");
      this.$nextTick(() => {
        chat.scrollTop = chat.scrollHeight;
      });
    },

    cleanTextArea() {
      const textArea = document.getElementById("messageBox");
      textArea.value = "";
      this.text = "";
    },
    isEmpty(obj) {
      return JSON.stringify(obj) === "{}";
    },
  },
  provide() {
    return {
      //stores
      profileStore: this.profileStore,
      contactStore: this.contactStore,
      messagesStore: this.messagesStore,
      //functions
      scrollToNewMessage: this.scrollToNewMessage,
      isEmpty: this.isEmpty,
    };
  },
};
</script>

<template>
  <ChatBar></ChatBar>
  <Inscription
    v-if="this.isEmpty(this.contactStore.activeContact)"
  ></Inscription>
  <MessengerRegion v-else class="appearance-animation"> </MessengerRegion>

  <InfoCard
    @close-card="contactStore.showContactCard = false"
    v-model:visible="contactStore.showContactCard"
    :imageScr="contactStore.activeContact.avatar"
    :contactName="contactStore.activeContact.name"
  />
</template>

<style>
body,
div,
p {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #e5e5ff;
  font-weight: 400;

  box-sizing: border-box;
}

.appearance-animation {
  animation: appear 0.2s forwards;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
