function solution() {
    let sections = Array.from(document.querySelectorAll('.card'));
    let inpGift = sections[0].querySelector('input[type="text"]');
    let addGiftBtn = sections[0].querySelector('button');

    let listOfGiftUl = sections[1].querySelector('ul');
    let listOfSended = sections[2].querySelector('ul');
    let listOfDiscarded = sections[3].querySelector('ul');

    addGiftBtn.addEventListener('click', toListOfGifts);

    function toListOfGifts(){
        
        createElements(inpGift.value);
        let currentItems = Array.from(listOfGiftUl.querySelectorAll('li'));
        let sorted = currentItems.sort((a,b) => a.textContent.localeCompare(b.textContent));
        listOfGiftUl.innerHTML = '';
        sorted.forEach((el) => listOfGiftUl.appendChild(el));
        inpGift.value = '';
    }

    function createElements(name) {

        let newLi = document.createElement('li');
        newLi.textContent = name;
        newLi.setAttribute('class' , 'gift');

        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.setAttribute('id', 'sendButton');
        newLi.appendChild(sendBtn);
        sendBtn.addEventListener('click', sendGift);

        let discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';
        discardBtn.setAttribute('id', 'discardButton');
        newLi.appendChild(discardBtn);
        discardBtn.addEventListener('click', discardGift);

        listOfGiftUl.appendChild(newLi);
    }

    function sendGift(){
        listOfSended.appendChild(this.parentNode);
        this.parentNode.removeChild(this.nextSibling);
        this.parentNode.removeChild(this);
    }

    function discardGift(){
        listOfDiscarded.appendChild(this.parentNode);
        this.parentNode.removeChild(this.previousSibling);
        this.parentNode.removeChild(this);
    }
}