<script>
import Contact from "./Contacts.vue";

import { useContactStore } from "../stores/ContactStore";
import { useMessagesStore } from "../stores/MessagesStore";

export default {
  components: { Contact },
  data() {
    return {
      contactStore: useContactStore(),
      messagesStore: useMessagesStore(),
      activeContactId: null,
    };
  },
  inject: ["scrollToNewMessage"],
  methods: {
    async changeContact(event) {
      //prevent rerender
      if (this.activeContactId === event.currentTarget.attributes[0].value) {
        return;
      }
      this.activeContactId = event.currentTarget.attributes[0].value;
      this.contactStore.updateActiveContact(this.activeContactId);

      //clear chat-container
      let oldMessages = document.querySelectorAll("div.message-container");
      oldMessages.forEach((element) => {
        element.remove();
      });

      //request chat messsages
      let messagesFromServer = await this.$requestAPI.request.getChatData(
        this.activeContactId
      );
      this.messagesStore.addMessages(messagesFromServer, this.activeContactId);
      this.scrollToNewMessage();
      document.getElementById("messageBox").focus();
    },
  },
};
</script>

<template>
  <ScrollPanel class="contact-scrollbar">
    <Contact
      v-for="el in contactStore.contacts"
      :key="el.id"
      :contact="el"
      :activeId="Number(this.activeContactId)"
      @click="changeContact($event)"
    />
  </ScrollPanel>
</template>

<style>
.contact-scrollbar {
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.p-scrollpanel .p-scrollpanel-bar {
  background-color: rgba(70, 54, 115, 0.9);
  border: 0 none;
}

.p-scrollpanel-bar-y {
  width: 8px;
}
</style>
