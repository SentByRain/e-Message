export default function (instance) {
  return {
    async getProfile() {
      const response = await instance.get("profile");
      return response.data;
    },

    async getChats() {
      const response = await instance.get("chats");
      return response.data;
    },

    async getChatData(contact_id) {
      const response = await instance.get("chat/messages/" + contact_id);
      return response.data.conversation;
    },

    async sendMessageToServer(message) {
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      const response = await instance.post(
        "/chat/message/send/",
        message,
        axiosConfig
      );
      return response.data.conversation;
    },
  };
}
