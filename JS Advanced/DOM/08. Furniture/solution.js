function solve() {

  let buttons = document.getElementsByTagName('button');
  
  let textArea = document.querySelectorAll('textarea');
  let table = document.querySelector('.table tbody');
  let inCartNames = [];
  let total = 0;
  let avgDec = 0;
  count = 0
  
  Array.from(buttons).forEach(btn => {

    btn.addEventListener('click', (e)=>{

      if(btn.innerHTML === 'Generate') {
        generate();
      }else if (btn.innerHTML === 'Buy') {
        buy();
      }
      
    });

  });

  
  function generate() {

    if (textArea[0].value) {

      let inpJson = JSON.parse(textArea[0].value);

      inpJson.forEach((furniture) => {
        table.innerHTML += `<tr><td><img src=${furniture.img}></td><td><p>${furniture.name}</p><td><p>${furniture.price}</p></td><td><p>${furniture.decFactor}</p></td><td><input type="checkbox"/></td></tr>`;
      
      });

    }
    

  }

  function buy (){
    let trElm = Array.from(document.getElementsByTagName('tr'));
    
    for(let i=2; i<trElm.length; i++) {

      if(trElm[i].children[4].children[0].checked) {
        
        inCartNames.push(trElm[i].children[1].textContent);
        total +=Number(trElm[i].children[2].textContent);
        avgDec+= Number(trElm[i].children[3].textContent);
         count++;
      }
    }

    textArea[1].value = `Bought furniture: ${inCartNames.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${avgDec/ count}`;
    
  }
}