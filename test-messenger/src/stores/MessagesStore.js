import { defineStore } from "pinia"; 
import {DateTime} from 'luxon';

export const useMessagesStore = defineStore('MessagesStore',
{
    state: () => ({
        messages:[]
        
    }),
    actions:
    {
        addMessages(messagesFromServer)
        {
            messagesFromServer.forEach((element) => {
                this.addTime(element);
                this.messages.push(element);
              });
        },
        addTime(message)
        {
            const messageDate = DateTime.fromISO(message.date);
            const messageTime = messageDate.toLocaleString(DateTime.TIME_24_SIMPLE);
            message.time = messageTime;
        },
        addNewMessage(messagesFromServer)
        {
            const newMessage = messagesFromServer.pop();
            this.addTime(newMessage);
            this.messages.push(newMessage);
        }

    }

});