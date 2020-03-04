function lockedProfile() {
    let btns = document.querySelectorAll('button');


    Array.from(btns).forEach((singleBtn) => {

        singleBtn.addEventListener('click', (e)=>{
            let parrent = singleBtn.parentElement;
            let showHide = parrent.querySelector('div');
            let inpUnlock = parrent.querySelector('input[value="unlock"]');

            if(inpUnlock.checked === true){

                if(showHide.style.display === 'block'){
                    showHide.style.display = 'none';
                    singleBtn.textContent = 'Show more';
                }else {
                    showHide.style.display = 'block';
                    singleBtn.textContent = 'Hide it';
                }
            }

        });

    });
}