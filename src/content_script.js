window.addEventListener('load', function() {
  // Remove gradient blur.
  const articleBlur = document.querySelector('#article-content.premium-content:before');
  if (articleBlur) {
    articleBlur.style.backgroundImage = 'none';
  }

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

  // Show all hidden <p> tags.
  document.querySelectorAll('.paywall')
  .forEach(function(el) { 
    el.style.display = 'block'
  });
})