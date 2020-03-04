function solve() {


   
   
   let chatInput = document.getElementById('chat_input');
   let sendBtn = document.getElementById('send');

   function newMessage(text) {
      
      let chat = document.getElementById('chat_messages');
      let sended = document.createElement('div');
      chat.appendChild(sended);

      sended.setAttribute('class', 'message my-message');

      sended.innerHTML = text;
      chatInput.value = '';

   }

   sendBtn.addEventListener('click', function(){
      newMessage(chatInput.value);
   });

}


