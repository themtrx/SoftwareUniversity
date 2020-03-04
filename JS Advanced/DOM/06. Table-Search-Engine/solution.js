function solve() {

   let input = document.querySelector('#searchField');
   let searchBtn = document.querySelector('#searchBtn');
   let content = document.querySelectorAll('tbody tr');
   
   searchBtn.addEventListener('click', (e)=> {

      let inpText = input.value.toLowerCase();

      if (inpText) {
         for (const line of content) {
            line.classList.remove('select');
            let lineText = line.innerHTML.toLowerCase();
   
            if(lineText.includes(inpText)){
               line.classList.add('select');
            }
         }
   
         input.value = '';
      }
      
   });
}