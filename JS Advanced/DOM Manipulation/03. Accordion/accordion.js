function toggle() {
    let btn = document.querySelector('.button');
    let extra = document.querySelector('#extra');
    
    if(extra.style.display === 'block') {
        extra.style.display = 'none';
        btn.textContent = 'More';
    }else {
        extra.style.display = 'block';
        btn.textContent = 'Less';
    }
    
}