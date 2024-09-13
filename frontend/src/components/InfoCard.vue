<script>
export default {
  data() {
    return {
      notificationOn: false,
    };
  },
  props: {
    contactName: {
      type: String,
      required: true,
    },
    imageScr: {
      type: String,
      required: true,
    },
  },

  methods: {
    switchSlider() {
      const slider = document.querySelector(".p-inputswitch-input");
      slider.ariaChecked = this.notificationOn;
    },
    closeCard() {
      this.$emit("closeCard");
    },
    activateMessageArea() {
      document.getElementById("messageBox").focus();
    },
  },
};
</script>

<template>
  <Dialog name="info-card" modal header="Information" class="card-background">
    <div class="card-line-contact">
      <img class="line-contact-icon" :src="imageScr" alt="contact" />
      <span class="line-content line-content-contact">{{ contactName }}</span>
      <!-- need to add that info at backend -->
      <span class="last-seen">Visited 28.05.2024</span>
    </div>

    <div class="card-line">
      <InputIcon class="pi pi-phone line-icon" />
      <a class="card-number">+7(999)999-99-99</a>
      <span class="line-description"> Phone number</span>
    </div>
    <div class="card-line">
      <InputIcon class="pi pi-info-circle line-icon" />
      <span class="card-status">Cool as a cucumber</span>
      <span class="line-description">About me</span>
    </div>
    <div class="card-line">
      <InputIcon class="pi pi-bell line-icon" />
      <span class="line-content">Notification</span>
      <InputSwitch v-model="this.notificationOn" @click="switchSlider()" />
    </div>
    <Button
      label="Write a message"
      text
      class="card-button"
      @click="closeCard(), activateMessageArea()"
    ></Button>
  </Dialog>
</template>

<style>
.p-dialog-header,
.p-dialog-header-icon,
.p-dialog-content,
.card-background {
  color: white;
  background-color: #271c46;
}

.p-dialog-header {
  width: 100%;
  height: 70px;
  padding: 20px 15px 20px 30px;
  border-radius: 10px;
  text-align: left;
}

.p-dialog-content {
  width: 100%;
  color: white;
  border-radius: 10px;
  padding: 0;
}

.card-background {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  border-radius: 15px;
  align-items: center;
}

.card-line {
  display: grid;
  grid-template-columns: 40px 4fr 1fr;
  grid-template-areas:
    "icon content"
    "icon description";
  padding: 5% 10%;
  align-items: center;
  min-height: 50px;
  width: 100%;

  border-bottom: 8px solid #3b1f61;
}

.card-line-contact {
  display: grid;
  grid-template-areas:
    "icon content"
    "icon description";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  min-height: 50px;
  width: 100%;
}

.line-icon {
  grid-area: icon;
  color: white;
  position: initial;
  margin-right: 3%;
}

.line-contact-icon {
  grid-area: icon;
  object-fit: cover;
  border-radius: 50%;
  height: 80px;
  aspect-ratio: 1;
  justify-self: center;
}

.line-content {
  grid-area: content;
}

.line-content-contact {
  align-self: self-end;
}

.line-description,
.last-seen {
  grid-area: description;
  font-size: 14px;
  color: gray;
}

.last-seen {
  align-self: self-start;
}

.card-button {
  height: 60px;
  width: 100%;
  padding-left: 40px;
  text-align: start;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
}
</style>
