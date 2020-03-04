function solve(){

   let creator = document.querySelector('#creator');
   let title = document.querySelector('#title');
   let category = document.querySelector('#category');
   let content = document.querySelector('#content');

   let createBtn = document.querySelector('.create');

   let articleWrap = document.querySelector('.site-content main section');

   let archiveList = document.querySelector('.archive-section ul');

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createArticle()
   })

   function createArticle(){

      let article = document.createElement('article');

      // Heading
      let heading = document.createElement('h1');
      heading.textContent = title.value;
      article.appendChild(heading);

      // Category
      let catHolder = document.createElement('p');
      catHolder.textContent = 'Category: ';
      let catContent =document.createElement('strong');
      catContent.textContent = category.value;
      catHolder.appendChild(catContent);
      article.appendChild(catHolder);

      // Author
      let createHolder = document.createElement('p');
      createHolder.textContent = 'Creator: ';
      let creatorContent =document.createElement('strong');
      creatorContent.textContent = creator.value;
      createHolder.appendChild(creatorContent);
      article.appendChild(createHolder);

      // Content
      let actualContent = document.createElement('p');
      actualContent.textContent = content.value;
      article.appendChild(actualContent);

      // Buttons
      let btnWrap = document.createElement('div');
      btnWrap.setAttribute('class', 'buttons');

      let delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.setAttribute('class', 'btn delete');
      btnWrap.appendChild(delBtn);
      delBtn.addEventListener('click', delArticle);

      let archBtn = document.createElement('button');
      archBtn.textContent = 'Archive';
      archBtn.setAttribute('class', 'btn archive');
      btnWrap.appendChild(archBtn);
      article.appendChild(btnWrap);
      archBtn.addEventListener('click', moveToArchive);


      articleWrap.appendChild(article);
   }

   function delArticle() {
      let articleSection = this.parentNode.parentNode.parentNode;
      let thisArticle = this.parentNode.parentNode;
      articleSection.removeChild(thisArticle);
   }

   function moveToArchive() {
      let articleSection = this.parentNode.parentNode.parentNode;

      let thisArticle = this.parentNode.parentNode;
      let currentHeading = thisArticle.querySelector('h1');

      let newLi = document.createElement('li');
      newLi.textContent = currentHeading.textContent;
      archiveList.appendChild(newLi);

      articleSection.removeChild(thisArticle);

      let allArchived = Array.from(archiveList.querySelectorAll('li'));
      let sorted = allArchived.sort((a,b) => a.textContent.localeCompare(b.textContent));
      archiveList.innerHTML = '';
      sorted.forEach((li) => archiveList.appendChild(li));
      
   }

  }
