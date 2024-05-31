<script>

import Contact from './components/Contacts.vue'
import Message from './components/Message.vue'
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

  export default
  {
    el:'Textarea#messageBox',
    components: { Contact, Message },

    data()
    {
      return{
        messages: [],
        text: '',
        time:'',
        
        user: 
        {
            //id: 991024124,
            name:'User Chel',
            source:'./icons/user.jpg'
        },

        usersContacts:
        [
          {
            id: 991024124,
            name:'Druk Chela',
            source:'./icons/another guy.jpg'
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
          {
            id: 12312373,
            name:'John Chel',
            source: './icons/cool guy.jpg',
          },
        ]
      }
    },
    methods:
    {
      sendMessage()
      {
        // const messageDate = DateTime.local().toLocaleString();
        // console.log(messageDate);

        // this.$nextTick(() =>{messageTime = DateTime.local().toLocaleString(DateTime.TIME_24_SIMPLE)});
        // console.log(messageTime);

          if(this.text !== '\n')
        {
          const messageTime = DateTime.local().toLocaleString(DateTime.TIME_24_SIMPLE);

          this.messages.push({
            text: this.text,
            time: messageTime
          });
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

      changeContact(event)
      {
        let buttonClikedName;
        
        if(typeof(event.target.name) !== 'undefined') //this true for img tag
        {
          buttonClikedName = event.target.name;
        }
        else
        {
          buttonClikedName = event.target.attributes[0].value; 
        }

        //find image path and name of chosen button
        const chosenContactPicturePath = document.querySelector('img[name = "' + buttonClikedName +'"]').src;
        const chosenContactName = document.querySelector('span[name = "' + buttonClikedName +'"]').innerHTML;

        //find active contact image and name
        const activeContactPicture = document.querySelector('div#chat-header img.contact-picture');
        const activeContactName = document.querySelector('div#chat-header span.users-nickname');

        activeContactName.innerHTML = chosenContactName;
        activeContactPicture.src = chosenContactPicturePath;

      },
    }
  }
</script>

<template>
  <div id = 'chat-bar'>
    <div id = 'user-profile'>
      <Contact :user="user"/>
    </div> 
    <div id = 'contact-list'>
      <Contact v-for="(el,index) in usersContacts" :key="index" :user="el" @click = 'changeContact($event)'/>
    </div>
  </div>
  
  <div id = 'messenger-region'> 
    <div id = 'chat-header'>
      <!-- think what there should be in the beginning -->
      <div class = 'profile-card'>
        <img class = 'contact-picture' src="C:\test_task\test-messenger\icons\cool guy.jpg" alt="user"/> 
        <span class = 'users-nickname'> John Chel</span> 
      </div>
    </div>
    <div id = 'chat-container'>
      <div class = 'message-container'><div class = 'message-figure user-design'><p class = 'user-text'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis dolorem, ex voluptate odio sed delectus iusto possimus, soluta porro, beatae nihil aperiam aut officia veniam assumenda optio quidem quo!</p></div></div>
      <div class = 'message-container'><div class = 'message-figure contact-design'><p class = 'contact-text'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis dolorem, ex voluptate odio sed delectus iusto possimus, soluta porro, beatae nihil aperiam aut officia veniam assumenda optio quidem quo!</p></div></div>
      <div class = 'message-container' v-for="(el,index) in messages" :key="index">
        <Message :message = "el" ref="message" />
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
p.user-text
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
/* #text
{
  overflow-wrap:normal;
}  */

.contact-text
{
  color: white;
  text-align: left;
  font-size: small;
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