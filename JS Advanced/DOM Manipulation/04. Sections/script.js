function create(words) {

   let content = document.querySelector('#content');
   
   for (const divEl of words) {
      
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = divEl;
      newP.style.display = 'none';
      newDiv.addEventListener('click', (e)=> newP.style.display = 'block')
      newDiv.appendChild(newP);
      content.appendChild(newDiv);
   }

}