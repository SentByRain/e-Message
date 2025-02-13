<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="message.from == id" class="message-figure user-design">
    <p class="user-text">
      {{ message.message }}
      <span class="message-time user-text"> {{ message.time }}</span>
    </p>
  </div>
  <div v-else class="message-figure contact-design">
    <p class="contact-text">
      {{ message.message }}
      <span class="message-time contact-text"> {{ message.time }}</span>
    </p>
  </div>
</template>

<style>
.message-figure {
  margin: 0 5%;

  min-width: 5%;
  max-width: 60%;

  padding: 5px 10px;
}

.user-design {
  background: white;
  border-radius: 15px 0 15px 15px;
  float: right;
}

.contact-design {
  background: #453377;
  border-radius: 0 15px 15px 15px;
  float: left;
}

.user-text {
  color: black;
  text-align: left;
  font-size: small;
  word-wrap: break-word;
}

.contact-text {
  color: white;
  text-align: left;
  font-size: small;
}

.message-time {
  margin: 10px 0 0 5px;
  float: right;
}

p.user-text,
p.contact-text {
  margin: 5px 0;
}
</style>
