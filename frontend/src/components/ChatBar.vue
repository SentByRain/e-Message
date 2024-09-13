<script>
import Profile from "./Profile.vue";
import SearchBox from "./SearchBox.vue";
import ContactList from "./ContactList.vue";

export default {
  components: { Profile, SearchBox, ContactList },
  props: {},
};
</script>

<template>
  <div id="chat-bar">
    <Profile></Profile>
    <SearchBox></SearchBox>
    <ContactList></ContactList>
  </div>
</template>

<style>
#chat-bar {
  display: flex;
  flex-direction: column;

  background: #271c46;
  color: white;
  float: left;
  min-width: 150px;
  width: 15%;
  height: 100vh;
}
</style>
