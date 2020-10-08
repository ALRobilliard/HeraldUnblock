window.addEventListener("load", function () {
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

    // hide offer banner
    setTimeout(() => {
      const offerElems = document.querySelectorAll(".article-offer");
      offerElems.forEach((element) => {
        element.style.display = "none";
      });
    }, 500);
  }
});

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
