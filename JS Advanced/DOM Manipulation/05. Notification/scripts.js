function notify(message) {
    let msgWrap = document.querySelector('#notification');

    msgWrap.textContent = message;
    msgWrap.style.display = 'block'
    setTimeout(()=>{msgWrap.style.display = 'none'},2000)

}