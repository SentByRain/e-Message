<template>
  <div :name="user.id" class="profile-card">
    <img
      :name="user.id"
      class="user-picture"
      :src="user.avatar"
      alt="contact"
    />
    <span :name="user.id" class="user-nickname"> {{ user.name }} </span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
