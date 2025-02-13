import { defineStore } from "pinia";
import { DateTime } from "luxon";

export const useContactStore = defineStore("ContactStore", {
  state: () => ({
    contacts: [],
    activeContact: {},
    showInfoCard: false,
  }),
  actions: {
    addChats(chatsFromServer) {
      chatsFromServer.forEach((element) => {
        const name = element.name;
        const lastMessage = element.lastMessage.message;
        const lastMesageDate = element.lastMessage.date;
        const id = Number(element.id);
        const avatar = element.avatar;

        const time =
          DateTime.fromISO(lastMesageDate).toLocaleString() ==
          DateTime.local().toLocaleString()
            ? DateTime.fromISO(lastMesageDate).toLocaleString(
                DateTime.TIME_24_SIMPLE
              )
            : DateTime.fromISO(lastMesageDate).toLocaleString();

        const contact = {
          id,
          name,
          avatar,
          lastMessage,
          time,
        };
        this.contacts.push(contact);
      });
    },
    //better rename push to update
    pushNewLastMessage(lastMessage, activeContactId) {
      const activeContactIndex = this.contacts.findIndex(
        (contact) => contact.id === Number(activeContactId)
      );
      this.contacts[activeContactIndex].lastMessage = lastMessage.message;
      //мб сделать изменение формата, как сделано выше в addChats?
      this.contacts[activeContactIndex].time = DateTime.fromISO(
        lastMessage.date
      ).toLocaleString(DateTime.TIME_24_SIMPLE);
    },

    updateActiveContact(activeContactId) {
      this.activeContact = this.contacts.find(
        (contact) => contact.id === Number(activeContactId)
      );
    },
  },
});
