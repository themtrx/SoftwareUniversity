// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){

    let msgArea = document.querySelector('#inputSection textarea');
    let inputName = document.querySelector('#inputSection div input[type="username"]');
    let sendBtn = document.querySelector('#inputSection div button');

    let pendingParent = document.querySelector('#outputSection #pendingQuestions');
    let openParent = document.querySelector('#outputSection #openQuestions')
    
    sendBtn.addEventListener('click', askQuestion);

    function askQuestion () {

        let pendingWrap = document.createElement('div');
        pendingWrap.setAttribute('class', 'pendingQuestion');
        pendingParent.appendChild(pendingWrap);

        let userImg = document.createElement('img');
        userImg.setAttribute('src', './images/user.png');
        userImg.setAttribute('width', 32);
        userImg.setAttribute('height', 32);
        pendingWrap.appendChild(userImg);

        let userName = document.createElement('span');
        let actualName = inputName.value?inputName.value:'Anonymous';
        userName.textContent = actualName;
        pendingWrap.appendChild(userName);

        let pendingMsg = document.createElement('p');
        pendingMsg.textContent = msgArea.value;
        pendingWrap.appendChild(pendingMsg);

        let buttonParent = document.createElement('div');
        buttonParent.setAttribute('class', 'actions');
        pendingWrap.appendChild(buttonParent);

        let btnArchive = document.createElement('button');
        btnArchive.setAttribute('class', 'archive');
        btnArchive.textContent = 'Archive';
        buttonParent.appendChild(btnArchive);

        btnArchive.addEventListener('click', archiveQuestion);

        let btnOpen = document.createElement('button');
        btnOpen.setAttribute('class', 'open');
        btnOpen.textContent = 'Open';
        buttonParent.appendChild(btnOpen);

        btnOpen.addEventListener('click', openQuestion);

        msgArea.value = '';
        inputName.value = '';
    }

    function archiveQuestion () {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    }

    function openQuestion() {
        let wholeQuestion = this.parentNode.parentNode;
        wholeQuestion.setAttribute('class', 'openQuestion');

        let actionDiv = this.parentNode;
        let actionButtons = Array.from(wholeQuestion.querySelectorAll('button'));


        
        for (const btn of actionButtons) {
            actionDiv.removeChild(btn)
        }

        let replyBtn = document.createElement('button');
        replyBtn.setAttribute('class', 'reply');
        replyBtn.textContent = 'Reply';
        actionDiv.appendChild(replyBtn);

        let replySection = document.createElement('div');
        replySection.setAttribute('class', 'replySection');
        replySection.setAttribute('style', 'display: none;');
        wholeQuestion.appendChild(replySection);

        let replyInput = document.createElement('input');
        replyInput.setAttribute('class', 'replyInput');
        replyInput.setAttribute('type', 'text');
        replyInput.setAttribute('placeholder', 'Reply to this question here...');
        replySection.appendChild(replyInput);

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('class', 'replyButton');
        sendBtn.textContent = 'Send';
        replySection.appendChild(sendBtn);

        sendBtn.addEventListener('click', replyQuestion);

        let replyList = document.createElement('ol');
        replyList.setAttribute('class', 'reply');
        replyList.setAttribute('type', '1');
        replySection.appendChild(replyList);

        replyBtn.addEventListener('click', () => {

            if(replySection.style.display === 'block'){
                replySection.style.display = 'none';
                replyBtn.textContent = 'Reply'
            }else {
                replySection.style.display = 'block';
                replyBtn.textContent = 'Back'
            }

        });

        openParent.appendChild(wholeQuestion);

    }

    function replyQuestion(){

        let answerList = this.parentNode.querySelector('ol');
        let answerInput = this.parentNode.querySelector('input[type="text"]');

        let answerElement = document.createElement('li');
        answerElement.textContent = answerInput.value;
        answerList.appendChild(answerElement);
        answerInput.value = '';
    }
}