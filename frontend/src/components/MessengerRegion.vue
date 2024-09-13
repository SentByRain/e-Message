<script>
import Header from "./Header.vue";
import ChatRegion from "./ChatRegion.vue";
import MessageBox from "./MessageBox.vue";

export default {
  components: { Header, ChatRegion, MessageBox },
  props: {},
};
</script>

<template>
  <div id="messenger-region">
    <Header></Header>
    <ChatRegion></ChatRegion>
    <MessageBox></MessageBox>
  </div>
</template>

<style>
#messenger-region {
  display: grid;
  grid-template-rows: 80px auto 80px;
  min-width: 200px;
  height: 100vh;
}
</style>
