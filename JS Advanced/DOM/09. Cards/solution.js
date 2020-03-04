function solve() {
   
   let cardField = document.querySelector('.cards');
   let result = document.querySelector('#result');
   [result1, vs, result2] = Array.from(result.querySelectorAll('span'));
   let historyDiv = document.querySelector('#history');
   let history = '';
   let card1 = 0;
   let card2 = 0;
   let lastCard = '';

   cardField.addEventListener('click',(e)=> {

      
      let currentEl = e.target;
      let isIMG = currentEl.tagName === 'IMG';

      if(isIMG) {
         
         let isWhite = currentEl.src.includes('whiteCard.jpg');

         if(!isWhite) {
            currentEl.setAttribute('src', 'images/whiteCard.jpg');
            
            
            if(currentEl.parentElement.id === 'player1Div') {
               result1.innerHTML = currentEl.name;
               card1 = Number(currentEl.name);

               if(card2) {
                  if(card1>card2) {
                     currentEl.style.border = '2px solid green';
                     lastCard.style.border = '2px solid red';
                  }else {
                     currentEl.style.border = '2px solid red';
                     lastCard.style.border = '2px solid green';
                  }
                  
                  historyDiv.innerHTML+=`[${card1} vs ${card2}] `;
                  lastCard ='';
               }else {

                  lastCard = currentEl;
               }

            }else if (currentEl.parentElement.id === 'player2Div'){
               result2.innerHTML = currentEl.name;
               card2 = Number(currentEl.name);

               if(card1) {

                  if(card1<card2) {
                     currentEl.style.border = '2px solid green';
                     lastCard.style.border = '2px solid red';
                  }else {
                     currentEl.style.border = '2px solid red';
                     lastCard.style.border = '2px solid green';
                  }

                  historyDiv.innerHTML+=`[${card1} vs ${card2}] `;
                  lastCard ='';
               }else {
                  lastCard = currentEl;
               }
            }


            if (card1 && card2) {
               result1.innerHTML = '';
               result2.innerHTML = '';
               card1 = 0;
               card2 = 0;
            }
            
         }
         
      }
      

   })
}