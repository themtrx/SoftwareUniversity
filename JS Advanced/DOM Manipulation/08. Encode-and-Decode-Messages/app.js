function encodeAndDecodeMessages() {
    let texts = document.querySelectorAll('textarea');
    let btns = document.querySelectorAll('button');
    let msg = [];

    Array.from(btns).forEach((singleBtn) => {

        singleBtn.addEventListener('click', (e) => {
            let codeThis = texts[0].value;

            if(singleBtn.textContent === 'Encode and send it'){

                let codedArr = codeThis.split('').map((letter) => {
                    let coding = letter.charCodeAt(0) +1
                    return String.fromCharCode(coding);
                });

                msg = [...codedArr]

                texts[1].value = msg.join('');
                texts[0].value = '';
                
            }else if (singleBtn.textContent === 'Decode and read it'){
                let decoded = [...msg].map((letter) => {
                    let decode = letter.charCodeAt(0)-1;
                    return String.fromCharCode(decode);
                });

                msg = [...decoded];

                texts[1].value = msg.join('');
            }

        });

    });


}