window.addEventListener('load', function() {
  const contentContainer = document.getElementById('article-content');
  if (contentContainer && contentContainer.classList.contains('premium-content')) {
    contentContainer.style.display = 'none';

    // hide offer banner
    const offerElems = document.querySelectorAll('.article-offer');
    offerElems.forEach(element => {
      element.style.display = 'none';
    });

    // rebuild all elements
    const childElems = document.querySelector('#article-content').children;
    const newContentContainer = document.createElement('div');

    for(let element of childElems) {
      if (element.nodeName.toLowerCase() == "p"){
        let newPara = document.createElement('p');
        newPara.innerHTML = element.innerHTML.replace(/style=".*?"/g, '').replace(/class=".*?"/g, '');
        newContentContainer.appendChild(newPara);
      }
    };

    const articleBody = document.getElementById('article-body');
    articleBody.append(newContentContainer);
  }
});