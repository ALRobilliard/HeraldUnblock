window.addEventListener("load", function () {
  console.log('here');
  const host = this.document.location.host;
  if (host.indexOf('nzherald') > -1)
    handleHerald();
  else if (host.indexOf('thepost') > -1)
    handleThePost();
});

function handleHerald() {
  const containerSelector = getContainerSelector();
  const contentContainer = document.querySelector(containerSelector);
  if (contentContainer) {
    contentContainer.style.display = "none";

    // rebuild all elements
    const childElems = document.querySelector(containerSelector).children;
    const newContentContainer = document.createElement("div");

    for (let element of childElems) {
      switch (element.nodeName.toLowerCase()) {
        case "meta":
          newContentContainer.appendChild(element);
        case "p":
          let newPara = document.createElement("p");
          newPara.innerHTML = element.innerHTML
            .replace(/style=".*?"/g, "")
            .replace(/class=".*?"/g, "");
          newContentContainer.appendChild(newPara);
          break;
        case "div":
          // include only image divs
          if (element.classList.contains("element-image")) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("element", "element-image");
            newDiv.innerHTML = element.innerHTML;
            newContentContainer.appendChild(newDiv);
            break;
          }
      }
    }

    contentContainer.parentElement.append(newContentContainer);

    // hide premium elements.
    const possibleSelectors = [
      ".article-offer",
      ".commenting__count",
      "#commenting-widget",
    ];
    setTimeout(() => {
      for (const selector of possibleSelectors) {
        const offerElems = document.querySelectorAll(selector);
        offerElems.forEach((element) => {
          element.style.display = "none";
        });
      }
    }, 500);
  }
}

function handleThePost() {
  setTimeout(() => {
    // remove top elem gradient
    document.getElementById('subscription-paywall-gradient').classList.remove('piano-gradient--active');
    // removePaywallBanner
    const paywallBanner = document.getElementById('subscription-article-paywall');
    paywallBanner.classList.remove('piano-container--active');
    paywallBanner.style.display = 'none'
  }, 500);
}

/**
 * Returns the query selector param for the content container.
 */
function getContainerSelector() {
  const possibleSelectors = ["#article-content", ".article__content"]; // append new selectors as required.

  for (const selector of possibleSelectors) {
    const result = document.querySelector(selector);
    if (result != null) return selector;
  }
}
