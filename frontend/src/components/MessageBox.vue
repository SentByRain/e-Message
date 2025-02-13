<script>
import { DateTime } from "luxon";

import { useContactStore } from "../stores/ContactStore";
import { useMessagesStore } from "../stores/MessagesStore";

export default {
  data() {
    return {
      messagesStore: useMessagesStore(),
      contactStore: useContactStore(),
      text: "",
    };
  },
  inject: ["scrollToNewMessage"],
  methods: {
    async sendMessage() {
      if (this.text !== "\n" && this.text !== "") {
        const messageDate = DateTime.local().toISO();

        const newMessage = {
          id: Number(this.contactStore.activeContact.id),
          message: this.text,
          data: messageDate,
        };

        const updatedMessages =
          await this.$requestAPI.request.sendMessageToServer(newMessage);

        const lastMessage = updatedMessages.pop();
        this.messagesStore.addNewMessage(lastMessage);

        this.scrollToNewMessage();

        this.contactStore.pushNewLastMessage(
          lastMessage,
          this.contactStore.activeContact.id
        );
      }
    },
    cleanTextArea() {
      const textArea = document.getElementById("messageBox");
      textArea.value = "";
      this.text = "";
    },
  },
};
</script>

<template>
  <div id="send-box">
    <Textarea
      id="messageBox"
      v-model="text"
      @keyup.enter.exact="
        sendMessage().then(scrollToNewMessage(), cleanTextArea())
      "
      placeholder="Write a message"
      rows="3"
      cols="30"
    />
    <img
      @click="sendMessage().then(scrollToNewMessage(), cleanTextArea())"
      class="send-sign"
      src="\icons\send-sign.svg"
      alt="send-sign"
    />
  </div>
</template>
<style>
#send-box {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 1%;
}

Textarea {
  resize: none;
  border-style: none;
  outline: none;
  box-shadow: none;

  flex-grow: 3;
  overflow-y: scroll;
  scrollbar-width: none;
  max-height: 60px;

  font-size: 0.8rem;
}

Textarea::placeholder {
  font-size: 1rem;
  color: #9c9c9c;
  font-family: "Roboto", sans-serif;
}

Textarea.p-inputtext {
  padding: 0;
}

.send-sign {
  float: right;
  width: 30px;
  height: 30px;
}

.send-sign:hover {
  filter: invert(54%) sepia(8%) saturate(2163%) hue-rotate(215deg)
    brightness(97%) contrast(85%);
  cursor: pointer;
}
</style>
