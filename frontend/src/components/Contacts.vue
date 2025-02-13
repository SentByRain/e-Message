<script>
import "/src/assets/users.css";
import { useContactStore } from "../stores/ContactStore";

export default {
  data() {
    return {
      contactStore: useContactStore(),
    };
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
    activeId: {
      type: Number,
    },
  },
};
</script>

<template>
  <div
    :name="contact.id"
    :style="{
      backgroundColor: contact.id === this.activeId ? '#745db3' : '',
    }"
    class="user-card contact"
  >
    <img class="user-picture" :src="contact.avatar" alt="contact" />
    <div :name="contact.id" class="message-info">
      <span> {{ contact.name }} </span>
      <span class="last-message">
        {{ contact.lastMessage }}
      </span>
      <div class="date-container">
        <span class="message-date">{{ contact.time }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.contact:hover {
  background-color: #745db3;
  cursor: pointer;
}

.date-container {
  display: grid;

  align-content: center;
  justify-items: end;
}

.message-date {
  color: #bababa;
  font-size: smaller;
  margin-right: 8px;
}
</style>
