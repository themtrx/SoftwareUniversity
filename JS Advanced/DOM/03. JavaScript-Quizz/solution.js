function solve() {
  
  let quiz = document.querySelector('#quizzie');
  let sections = document.querySelectorAll('section');
  let result = document.querySelector('#results');

  const answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userAnswers = 0;
  let sectionIndex = 0;

  quiz.addEventListener('click', (e) =>{

    let clicked = e.target.className;

    if(clicked === 'answer-text') {

      sections[sectionIndex].style.display = 'none';

      let isCorrect = answers.includes(e.target.innerHTML);

      if(isCorrect) {

        userAnswers++
      }

      sectionIndex++;

      if(sectionIndex < sections.length) {
        sections[sectionIndex].style.display = 'block';
      }else {
        let resultText = result.querySelector('h1');
        result.style.display = 'block';
        if(userAnswers=== 3) {
          resultText.innerHTML = "You are recognized as top JavaScript fan!";
        }else {
          resultText.innerHTML = `You have ${userAnswers} right answers`
        }
        
      }

    }
      
  });
}