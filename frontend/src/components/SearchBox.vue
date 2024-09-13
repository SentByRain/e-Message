<script>
export default {
  data() {
    return {
      contactQuery: "",
      searcboxActive: false,
    };
  },
  inject: ["contactStore"],
  methods: {
    searchSimilarContacts() {
      const lettersInQuery = this.contactQuery.length;
      this.contactStore.contacts.forEach((contact) => {
        const cutContactName = contact.name
          .substring(0, lettersInQuery)
          .toLowerCase();
        if (cutContactName !== this.contactQuery.toLowerCase()) {
          document.querySelector(
            'div[name = "' + contact.id + '"]'
          ).style.display = "none";
        } else {
          document.querySelector(
            'div[name = "' + contact.id + '"]'
          ).style.display = "";
        }
      });
    },
    clearInline() {
      this.contactQuery = "";
      this.searchSimilarContacts();
    },
  },
};
</script>

<template>
  <IconField class="searchbox-container">
    <InputText
      @focus="
        () => {
          this.searcboxActive = true;
        }
      "
      @blur="
        () => {
          this.searcboxActive = false;
          this.clearInline();
        }
      "
      @keyup="searchSimilarContacts()"
      placeholder="Search"
      v-model="contactQuery"
      class="searchbox"
    />

    <transition name="spin-and-zoom">
      <InputIcon
        class="pi pi-times"
        v-show="this.searcboxActive"
        @click="clearInline()"
      />
    </transition>
  </IconField>
</template>

<style>
.searchbox-container {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 40px;
}

.searchbox {
  width: 100%;
  height: 20px;
  color: #745db3;
  font-size: medium;
  outline: none;
  border: none;
  background-color: #391855;
  transform-origin: bottom left;
  transform: skew(-15deg);

  position: relative;
  /* formula for the shift is delta = height/2*tan(90 deg-angle deg) */
  right: calc(32px / 7.46);
  border-radius: 5px;
}

.searchbox:focus {
  box-shadow: none;
}
.searchbox::placeholder,
.pi-times {
  color: #745db3;
}

.searchbox:focus::placeholder {
  color: gray;
}

.p-input-icon {
  right: 1.5rem;
  cursor: pointer;
}

.spin-and-zoom-enter-active {
  animation: spin-and-zoom 200ms;
}

.spin-and-zoom-leave-active {
  animation: spin-and-zoom 200ms reverse;
}

@keyframes spin-and-zoom {
  from {
    transform: rotate(0deg);
    scale: 0;
  }
  to {
    transform: rotate(90deg);
    scale: 1;
  }
}
</style>
