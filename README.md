<style>
.title{
font-size:26px; 
font-weight:400;
text-align:center;
color: violet;
}

.text{
font-size:18px;
}
</style>

<div style="display:flex; align-items:center; justify-content:center">
<img src = 'frontend\public\logo-48px.ico' style="display:inline;margin-right:10px;" /> <span style="font-size:35px; font-weight:300;color:violet;display:inline;">e-Message</span>
</div>

# Стэк

<p class ="text">Vue, PrimeVue, Axios, Pinia.</p>

# Описание

<p class ="text">Веб-приложение e-Message служит для обмена текстовыми сообщениями между клиентом и сервером. На стороне клиента реализован интуитивно понятный UI, позволяющий пользователю искать нужные контакты, узнавать информацию о контакте, писать и отправлять сообщения.</p>

# Функционал

<ul class = "text">
    <li>получение списка чатов от сервера,</li>
    <li> поиск нужного чата,</li>
    <li> выбор чата из списка,</li>
    <li> получение сообщений выбранного чата от сервера и вывод сообщений на страницу,</li>
    <li> отправка сообщений пользователя на сервер и получение обновленного списка чата,</li>
    <li> вывод модального окна с информацией о контакте.</li>
</ul>

# Внешний вид

<p  class ="title">Стартовая страница</p>
<p class ="text">После авторизации пользователь попадает на стартовую страницу. Слева находится список чатов с поисковой строкой. Чтобы начать общение нужно выбрать чат. Для быстрого поиска нужного чата можно воспользоваться поисковой строкой.</p>

<img src = 'frontend\pics\searching_chat.gif' style="display:block;width:900px; margin:0 auto;"/>

---

<p class ="title">Чат</p>
<p class ="text">После выбора соответствующий чат появляется в правой части экрана. Окно чата состоит из трех элементов:</p>

<ul class = "text">
    <li>шапка,</li>
    <li>область сообщений,</li>
    <li>поле ввода текста.</li>
</ul>

<img src = 'frontend\pics\chat_chosen.png' />

<p class ="text">При нажатии на шапку появляется модальное окно, содержащее информацию о контакте.</p>

<img src = 'frontend\pics\infoCard_shown.gif' style="display:block;width:900px; margin:0 auto;"/>
<img>
<p class ="text">В области сообщении показываются все сообщения, сохраненные в истории чата.
В поле ввода текста пользователь вводит сообщение, после чего он может отправить его на сервер, нажав клавишу "Enter" или кликнув на иконку отправки сообщений. Отправленное сообщение появится в области сообщений, а также появится в карточке выбранного контакта.</p>

<img src = 'frontend\pics\sending_messages.gif' style="display:block;width:900px; margin:0 auto;"/>
