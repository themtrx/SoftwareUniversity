function solve() {
    let input = document.querySelector('input[type="text"]');
    let addBtn = document.querySelector('button[type="button"]');
    let list = document.querySelectorAll('li');

    addBtn.addEventListener('click', () => {

        let inpValule = input.value;

        if(inpValule) {

            let inpFletter = input.value[0].toUpperCase();
            let dbReady = inpFletter + inpValule.substring(1).toLowerCase();
            let listIndex = inpFletter.charCodeAt(0) - 65; //his ascii number - 65 = li index. Where A = 0(65), Z = 90-65;

            if(list[listIndex].innerHTML === '') {
                list[listIndex].innerHTML= dbReady;
            }else {
                list[listIndex].innerHTML+= `, ${dbReady}`;
            }

            input.value = '';
        }

        
    })
    
}