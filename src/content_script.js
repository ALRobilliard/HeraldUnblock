window.addEventListener('load', function() {
  const contentContainer = document.getElementById('article-content');
  if (contentContainer && contentContainer.classList.contains('premium-content')) {
    contentContainer.style.display = 'none';

    // hide offer banner
    const offerElems = document.querySelectorAll('.article-offer');
    offerElems.forEach(element => {
      element.style.display = 'none';
    });

    // rebuild paragraphs
    const paragraphs = document.querySelectorAll('#article-content p');
    const newContentContainer = document.createElement('div');
    paragraphs.forEach(paragraph => {
      let newPara = document.createElement('p');
      newPara.innerText = paragraph.innerText;
      newContentContainer.appendChild(newPara);
    });

    const articleBody = document.getElementById('article-body');
    articleBody.append(newContentContainer);
  }
});