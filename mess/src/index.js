const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8847;

app.use(cors());
app.use(bodyParser.json());

const chatList = [
  {
    name: 'Alice',
    id: 1,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 1, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi Alice! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 1, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 1, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 1, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 1, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, Alice! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 1, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 1, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 1, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 1, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, Alice.', date: '2024-05-28T10:34:00Z' },
      { from: 1, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 1, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 1, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 1, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 1, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, Alice!', date: '2024-05-28T10:54:00Z' },
      { from: 1, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 1, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  },
  {
    name: 'Bob',
    id: 2,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 2, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi Bob! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 2, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 2, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 2, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 2, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, Bob! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 2, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 2, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 2, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 2, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, Bob.', date: '2024-05-28T10:34:00Z' },
      { from: 2, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 2, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 2, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 2, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 2, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, Bob!', date: '2024-05-28T10:54:00Z' },
      { from: 2, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 2, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  },
  {
    name: 'Charlie',
    id: 3,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 3, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi Charlie! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 3, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 3, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 3, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 3, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, Charlie! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 3, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 3, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 3, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 3, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, Charlie.', date: '2024-05-28T10:34:00Z' },
      { from: 3, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 3, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 3, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 3, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 3, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, Charlie!', date: '2024-05-28T10:54:00Z' },
      { from: 3, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 3, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  },
  {
    name: 'Diana',
    id: 4,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 4, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi Diana! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 4, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 4, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 4, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 4, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, Diana! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 4, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 4, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 4, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 4, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, Diana.', date: '2024-05-28T10:34:00Z' },
      { from: 4, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 4, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 4, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 4, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 4, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, Diana!', date: '2024-05-28T10:54:00Z' },
      { from: 4, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 4, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  },
  {
    name: 'Eve',
    id: 5,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 5, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi Eve! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 5, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 5, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 5, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 5, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, Eve! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 5, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 5, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 5, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 5, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, Eve.', date: '2024-05-28T10:34:00Z' },
      { from: 5, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 5, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 5, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 5, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 5, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, Eve!', date: '2024-05-28T10:54:00Z' },
      { from: 5, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 5, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  },
  {
    name: 'Frank',
    id: 6,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 6, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi Frank! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 6, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 6, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 6, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 6, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, Frank! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 6, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 6, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 6, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 6, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, Frank.', date: '2024-05-28T10:34:00Z' },
      { from: 6, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 6, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 6, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 6, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 6, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, Frank!', date: '2024-05-28T10:54:00Z' },
      { from: 6, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 6, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  },
  {
    name: 'George',
    id: 7,
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp',
    conversation: [
      { from: 7, message: 'Hi Tina, how are you?', date: '2024-05-28T10:00:00Z' },
      { from: 20, message: 'Hi George! I am good, how about you?', date: '2024-05-28T10:02:00Z' },
      { from: 7, message: 'I am doing well, thanks! What are you up to?', date: '2024-05-28T10:04:00Z' },
      { from: 20, message: 'Just working on a project. How about you?', date: '2024-05-28T10:06:00Z' },
      { from: 7, message: 'Same here. What project are you working on?', date: '2024-05-28T10:08:00Z' },
      { from: 20, message: 'A new web app. It’s quite challenging.', date: '2024-05-28T10:10:00Z' },
      { from: 7, message: 'Sounds interesting! Need any help?', date: '2024-05-28T10:12:00Z' },
      { from: 20, message: 'Actually, yes. Could you review my code?', date: '2024-05-28T10:14:00Z' },
      { from: 7, message: 'Sure! Send it over.', date: '2024-05-28T10:16:00Z' },
      { from: 20, message: 'Thanks, George! Sending it now.', date: '2024-05-28T10:18:00Z' },
      { from: 7, message: 'Got it. I’ll take a look.', date: '2024-05-28T10:20:00Z' },
      { from: 20, message: 'Awesome, thanks!', date: '2024-05-28T10:22:00Z' },
      { from: 7, message: 'No problem. I’ll get back to you soon.', date: '2024-05-28T10:24:00Z' },
      { from: 20, message: 'Perfect. Appreciate it!', date: '2024-05-28T10:26:00Z' },
      { from: 7, message: 'Just finished reviewing. Looks good overall.', date: '2024-05-28T10:28:00Z' },
      { from: 20, message: 'Great! Any suggestions?', date: '2024-05-28T10:30:00Z' },
      { from: 7, message: 'Yes, I made a few comments. Check them out.', date: '2024-05-28T10:32:00Z' },
      { from: 20, message: 'Will do. Thanks again, George.', date: '2024-05-28T10:34:00Z' },
      { from: 7, message: 'You’re welcome, Tina!', date: '2024-05-28T10:36:00Z' },
      { from: 20, message: 'By the way, how’s your project going?', date: '2024-05-28T10:38:00Z' },
      { from: 7, message: 'It’s going well. Almost done.', date: '2024-05-28T10:40:00Z' },
      { from: 20, message: 'Nice! What’s it about?', date: '2024-05-28T10:42:00Z' },
      { from: 7, message: 'A new feature for our app. Really excited about it.', date: '2024-05-28T10:44:00Z' },
      { from: 20, message: 'Sounds cool! Can’t wait to see it.', date: '2024-05-28T10:46:00Z' },
      { from: 7, message: 'Thanks! I’ll keep you posted.', date: '2024-05-28T10:48:00Z' },
      { from: 20, message: 'Please do. Good luck!', date: '2024-05-28T10:50:00Z' },
      { from: 7, message: 'Thanks, Tina!', date: '2024-05-28T10:52:00Z' },
      { from: 20, message: 'You’re welcome, George!', date: '2024-05-28T10:54:00Z' },
      { from: 7, message: 'Talk to you later.', date: '2024-05-28T10:56:00Z' },
      { from: 20, message: 'Sure, bye!', date: '2024-05-28T10:58:00Z' },
      { from: 7, message: 'Bye!', date: '2024-05-28T11:00:00Z' }
    ]
  }
];

const profile =  {
  name: 'Tina',
    id: 20,
    status: 'In job search',
    avatar: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp'
};
const getProfile = () => {
  return profile;
}


app.get('/profile', (req, res) => {
  return res.json(getProfile())
})

app.get('/chats', (req, res) => {
  res.json(chatList.map(({name, id, avatar, conversation}) => ({name, id, avatar, lastMessage: conversation[conversation.length -1]})));
});

app.get('/chat/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chat = chatList.find(v => v.id === id);
  res.json(chat);
});

app.post('/chat/message/send', (req, res) => {
  const {id, message} = req.body
  const chat = chatList.find(v => v.id === id);
  if (!chat) return res.status(500)
  chat.conversation.push({from: 20, message, date: new Date().toISOString() });
  return res.json(chat)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});