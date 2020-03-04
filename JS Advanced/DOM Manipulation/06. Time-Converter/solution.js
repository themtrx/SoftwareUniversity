function attachEventsListeners() {
    let btns = document.querySelectorAll('input[type="button"]');
    let inpAll = document.querySelectorAll('input[type="text"]');

    Array.from(btns).forEach((singleBtn) => {

        singleBtn.addEventListener('click', (e) => {
            let inputID = singleBtn.previousElementSibling.id;
            let inputValue = Number(singleBtn.previousElementSibling.value);
            
            
            switch(inputID) {
                case 'days':{

                    inpAll[1].value = inputValue*24;
                    inpAll[2].value = inputValue*1440;
                    inpAll[3].value = inputValue*86400;

                    break;
                }
                case 'hours': {
                    inpAll[0].value = inputValue/24;
                    inpAll[2].value = inputValue*60;
                    inpAll[3].value = inputValue*3600;
                    break;
                }
                case 'minutes':{
                    inpAll[0].value = inputValue/1440;
                    inpAll[1].value = inputValue/60;
                    inpAll[3].value = inputValue*60;
                    break;
                }
                case 'seconds':{
                    inpAll[0].value = inputValue/86400;
                    inpAll[1].value = inputValue/3600;
                    inpAll[2].value = inputValue/60;
                    break;
                }
                default:
                    break;
            }
            
        })

    })

}