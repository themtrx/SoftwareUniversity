function solve() {
   
   let shopingCart = document.querySelectorAll('.add-product');
   let textArea = document.querySelector('textarea');
   let checkout = document.querySelector('.checkout');
   let cart = {};


   for (let i = 0; i < shopingCart.length; i++) {
      const eachProduct = shopingCart[i];

      eachProduct.addEventListener('click', (e)=> {

         let name = document.querySelector(`body > div > div:nth-child(${i+2}) > div.product-details > div`).textContent;
         let price = document.querySelector(`body > div > div:nth-child(${i+2}) > div.product-line-price`).textContent;
         
         textArea.value += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`

         if(!cart[name]) {
            cart[name] = 0;
         }

         cart[name]+=Number(price);

      });
   }

   checkout.addEventListener('click', (e)=> {

      let cartProducts = Object.keys(cart).join(', ');
      let totalPrice = Object.values(cart).reduce((a,b) => a+b,0);

      textArea.value += `You bought ${cartProducts} for ${totalPrice.toFixed(2)}.`;

      disBtn();
   })

   function disBtn () {
      
      let buttons = Array.from(document.querySelectorAll('button'));
       buttons.forEach(button => button.disabled = true);
   }
}
