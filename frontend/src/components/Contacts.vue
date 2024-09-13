<script>
import "/src/assets/users.css";

export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div :name="contact.id" class="user-card contact">
    <img
      :name="contact.id"
      class="user-picture"
      :src="contact.avatar"
      alt="contact"
    />
    <div :name="contact.id" class="message-info">
      <span :name="contact.id"> {{ contact.name }} </span>
      <span :name="contact.id" class="last-message">
        {{ contact.lastMessage }}
      </span>
      <div :name="contact.id" class="date-container">
        <span :name="contact.id" class="message-date">{{ contact.time }}</span>
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
