window.addEventListener('load', function() {
  // Hide advertisement popup.
  const articleOffer = document.querySelector('.article-offer');
  if (articleOffer) {
    articleOffer.style.display = 'none';
  }

  // Remove max-height.
  const mainSection = document.querySelector('#main');
  if (mainSection) {
    mainSection.style.height = 'unset'
  }

  // Show all hidden elements.
  document.querySelectorAll('.QUnWjUZkTonf')
  .forEach(function(el) { 
    el.classList.remove('QUnWjUZkTonf');
  });

  // Override Stylesheet to remove blur.
  const css = '#article-content.premium-content:before { background-image: none !important }',
    style = document.createElement('style');

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName('head')[0].appendChild(style);
})