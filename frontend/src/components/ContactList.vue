<script>
import Contact from "./Contacts.vue";

export default {
  components: { Contact },
  data() {
    return {
      activeContactId: null,
    };
  },
  inject: ["contactStore", "messagesStore", "scrollToNewMessage"],
  methods: {
    deactivateContact() {
      if (this.activeContactId !== null) {
        document.querySelector(
          'div[name = "' + this.activeContactId + '"]'
        ).style.backgroundColor = "";
      }
    },
    activateContact() {
      document.querySelector(
        'div[name = "' + this.activeContactId + '"]'
      ).style.backgroundColor = "#745db3";
    },

    async changeContact(event) {
      if (typeof event.target.name !== "undefined") {
        //this' true for img tag
        this.activeContactId = event.target.name;
      } else {
        this.activeContactId = event.target.attributes[0].value; //this' true for div and span
      }
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
      v-for="(el, index) in contactStore.contacts"
      :key="index"
      :contact="el"
      @click="deactivateContact(), changeContact($event), activateContact()"
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
