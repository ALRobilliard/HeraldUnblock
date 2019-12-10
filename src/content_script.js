window.addEventListener('load', function() {
  const contentContainer = document.getElementById('article-content');
  if (contentContainer && contentContainer.classList.contains('premium-content')) {
    contentContainer.style.display = 'none';

    // rebuild all elements
    const childElems = document.querySelector('#article-content').children;
    const newContentContainer = document.createElement('div');

    for(let element of childElems) {
      switch (element.nodeName.toLowerCase()) {
        case 'meta':
          newContentContainer.appendChild(element);
        case 'p':
          let newPara = document.createElement('p');
          newPara.innerHTML = element.innerHTML.replace(/style=".*?"/g, '').replace(/class=".*?"/g, '');
          newContentContainer.appendChild(newPara);
          break;
        case 'div':
          // include only image divs
          if (element.classList.contains('element-image')) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('element', 'element-image');
            newDiv.innerHTML = element.innerHTML;
            newContentContainer.appendChild(newDiv);
            break;
          }
      }
    };

    const articleBody = document.getElementById('article-body');
    articleBody.append(newContentContainer);

    // hide offer banner
    setTimeout(() => {
      const offerElems = document.querySelectorAll('.article-offer');
      offerElems.forEach(element => {
        element.style.display = 'none';
      });
    }, 500);
  }
});