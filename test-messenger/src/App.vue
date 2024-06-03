<script>

import Contact from './components/Contacts.vue'
import Message from './components/Message.vue'
import {DateTime} from 'luxon';


import { useProfileStore } from './stores/ProfileStore';
import { useContactStore } from './stores/ContactStore';
import { useMessagesStore } from './stores/MessagesStore';

  export default
  {
    el:'Textarea#messageBox',
    components: { Contact, Message },

    data()
    {
      return{
        isContactChosen: false,
        text: '',
        profileId:'',
        activeContactId:'',
    

        profileStore:useProfileStore(),
        contactStore:useContactStore(),
        messagesStore:useMessagesStore(),

        //find active contact image and name
        activeContactPicture: document.querySelector('div#chat-header img.contact-picture'),
        activeContactName: document.querySelector('div#chat-header span.users-nickname')
      }
    },

    async created() 
    {

      let profileFromServer = await this.$requestAPI.request.getProfile();
      this.profileStore.addProfile(profileFromServer);
      this.profileId = this.profileStore.profile[0].id;


      let chatsFromServer = await this.$requestAPI.request.getChats();
      this.contactStore.addChats(chatsFromServer);

    },

    methods:
    {
      async sendMessage()
      {
         if(this.text !== '\n')
        {
          const messageDate = DateTime.local().toISO();

          const newMessage = 
          {
            id: Number(this.activeContactId),
            message: this.text,
            data: messageDate
          }
          
          const updatedMessages = await this.$requestAPI.request.sendMessage(newMessage);

          this.messagesStore.addNewMessage(updatedMessages);
          this.scrollToNewMessage();
   
        }
      },

      scrollToNewMessage()
      {
        const chat = document.getElementById("chat-container");
        this.$nextTick(() => {chat.scrollTop = chat.scrollHeight;});
      },

      cleanTextArea()
      {
        const textArea = document.getElementById('messageBox');
        textArea.value = '';
      },

      async changeContact(event)
      {
        this.isContactChosen = true;


        
        if(typeof(event.target.name) !== 'undefined') //this' true for img tag
        {
          this.activeContactId = event.target.name;
        }
        else
        {
          this.activeContactId = event.target.attributes[0].value; //this' true for div and span
        }
        
        //find image path and name of chosen button
        const chosenContactPicturePath = document.querySelector('img[name = "' + this.activeContactId +'"]').src;
        const chosenContactName = document.querySelector('span[name = "' + this.activeContactId +'"]').innerHTML;
        //set path and name in chat-header
        this.activeContactName = chosenContactName;
        this.activeContactPicture = chosenContactPicturePath;

        //clear chat-container
        let oldMessages = document.querySelectorAll("div.message-container");
        oldMessages.forEach((element) => {element.remove()});


        //request chat messsages
        let messagesFromServer = await this.$requestAPI.request.getChatData(this.activeContactId);
        this.messagesStore.addMessages(messagesFromServer, this.activeContactId);
        this.scrollToNewMessage();
      },
    }
  }
</script>

<template>
  <div id = 'chat-bar'>
    <!-- v-if is used to ignore Contact call untill the profile store gets data  -->
    <div v-if='profileStore.profile[0] !== undefined' id = 'user-profile'>
      <Contact :user="profileStore.profile[0]"/> 
    </div> 
    <div id = 'contact-list'>
      <Contact v-for="(el,index) in contactStore.contacts" :key="index" :user="el" @click = 'changeContact($event)'/>
    </div>
  </div>
  
  <div id = 'messenger-region'> 
    <div id = 'chat-header'>
      <div v-if='isContactChosen === true'  class = 'profile-card disabled'>
        <img class = 'contact-picture' :src="activeContactPicture" alt="Active contact"/> 
        <span class = 'users-nickname'>{{ activeContactName }}</span> 
      </div>
    </div>
    <div id = 'chat-container'>
      <div class = 'message-container' v-for="(el,index) in messagesStore.messages" :key="index" >
        <Message :message = "el" :id="profileId"/> 
      </div> 
    </div>
    <div id = 'send-box'>
      <Textarea id = 'messageBox' v-model="text" @keyup.enter.exact = 'sendMessage(),scrollToNewMessage(), cleanTextArea()' placeholder = 'Write a message' rows="3" cols="30"/> 
      <img @click='sendMessage(), scrollToNewMessage(), cleanTextArea()' class = 'send-sign' src="C:\test_task\test-messenger\icons\send-sign.svg" alt="send-sign"/> 
    </div>
  </div>
  </template>

<style>

body
{
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight:400;
}

#chat-bar
{
  display: grid;
  grid-template-rows: 80px auto;

  background: #271c46;
  color: white;
  float:left;
  min-width: 15%;
  height: 100vh
}



#user-profile
{
  border-bottom: 2px solid #463673;
}

#contact-list
{
  overflow-y: scroll;
  overflow-x: hidden;
}

#chat-header
{
  background: white;
  padding-left: 50px;
  height: 80px;
}

.profile-card
{
  display: flex;
  align-items: center;
  height: 80px;
  max-width: 300px;
}

.profile-card:hover
{
  background-color: #745db3;
  cursor:pointer;
}


.disabled {
  pointer-events: none;
}

.contact-picture
{
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding:5%
}

#messenger-region
{
  display: grid;
  grid-template-rows: 80px auto 80px;
  min-width: 200px;
  height: 100vh
}

#chat-container
{
  background: #e5e5ff;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
}

.message-container
{
  margin-top: 1%;
  display: inline-block;
  width: 100%;
  padding: auto 0;
}

.message-figure
{
  margin: 0 5%;

  min-width: 5%;
  max-width: 60%;

  padding: 5px 10px;

}

.user-design
{
  background: white;
  border-radius: 15px 0 15px 15px;
  float: right;
}

.contact-design
{
  background: #453377;
  border-radius: 0 15px 15px 15px;
  float: left;
}
/* I don't know why, but p has margin */
p.user-text, p.contact-text
{
  margin:5px 0;
  
}

.user-text
{
  color: black;
  text-align: left;
  font-size: small;
  word-wrap: break-word;

}

.contact-text
{
  color: white;
  text-align: left;
  font-size: small;
  word-wrap: break-word;
}



/*contact design*/
.user-picture
{
  object-fit:cover;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding:5%
}

.user-nickname
{
  align-content: center;
}


#send-box
{
  background: white;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: row;
  padding: 0 1%;
}

.send-sign
{
  float: right;
  width: 30px;
  height: 30px
}

.send-sign:hover
{
  filter: invert(54%) sepia(8%) saturate(2163%) hue-rotate(215deg) brightness(97%) contrast(85%);
  cursor:pointer;
}

Textarea
{
  resize: none;
  border-style: none;
  flex-grow: 3;
  outline:none
}


Textarea::placeholder
{
  font-size: 1rem;
  color: #9c9c9c;
  font-family: 'Roboto', sans-serif;
  /* padding-left: 20px; */

}

</style>