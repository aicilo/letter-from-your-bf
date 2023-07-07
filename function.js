const headlines = [
  {
    type: "animated",
    text: "Hello, Si Jayson nga pala to.. yung bf mo. remember?, Miss na miss na kasi kita e. Baka naman pwedeng kausapin mo na ako..,Sorry nadala lang talaga ako ng stress diko sinasadya yung mga nasabi ko., Pero kung hindi ka pa okay at ayaw mo pa ako kausapin okay lang... Wala naman akong ibang magagawa kundi maghintay. Kahit galit ka sa akin wag ka pa din magpapabaya ahh!, Kumaen ka wag papalipas at mag iingat ka palagi. Mahal na mahal kita.",
  },
];

const headlineContainer = document.querySelector(".headline");
const animation = "typing"; //{typing, scale, fallingLetters, slidingLetters, scalingLetters, jelly, fade}
const animationOption = "cursorB"; // {cursorA, cursorB} - applicable only in "typing"
const fadeDirection = "right"; // {default, up, down, left, right} - applicable only in "fade"

init();

function init() {
  for (headline of headlines) {
    if (headline.type === "static") displayStaticText(headline.text);
    if (headline.type === "animated") displayAnimatedText(headline.text);
  }
}

function displayStaticText(text) {
  const node = document.createElement("div");
  node.classList.add("title-section");
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  headlineContainer.appendChild(node);
}

function displayAnimatedText(text) {
  const node = document.createElement("div");
  node.classList.add("title-section", "animate-text");
  headlineContainer.appendChild(node);
  animationText(node, text);
}

async function animationText(node, text) {
  const words = text.split(",");
  // Typing
  if (animation === "typing") {
    const typingContainer = document.createElement("span");
    typingContainer.classList.add("typing");
    const cursorContainer = document.createElement("span");
    if (animationOption === "cursorA") {
      cursorContainer.classList.add("cursor-A");
    }
    if (animationOption === "cursorB") {
      cursorContainer.classList.add("cursor-B");
    }
    node.appendChild(typingContainer);
    node.appendChild(cursorContainer);
    typingAnimation(typingContainer, words);
  }
  // Scale
  if (animation === "scale") {
    const scaleContainer = document.createElement("span");
    scaleContainer.classList.add("scale");
    node.appendChild(scaleContainer);
    scaleAnimation(scaleContainer, words);
  }
  // Falling Letters
  if (animation === "fallingLetters") {
    const fallingLettersContainer = document.createElement("span");
    fallingLettersContainer.classList.add("falling-letters");
    node.appendChild(fallingLettersContainer);
    fallingLettersAnimation(fallingLettersContainer, words);
  }
  // Sliding Letters
  if (animation === "slidingLetters") {
    const slidingLettersContainer = document.createElement("span");
    slidingLettersContainer.classList.add("sliding-letters");
    node.appendChild(slidingLettersContainer);
    slidingLettersAnimation(slidingLettersContainer, words);
  }
  // Scaling Letters
  if (animation === "scalingLetters") {
    const scalingLettersContainer = document.createElement("span");
    scalingLettersContainer.classList.add("sliding-letters");
    node.appendChild(scalingLettersContainer);
    scalingLettersAnimation(scalingLettersContainer, words);
  }
  // Jelly
  if (animation === "jelly") {
    const jellyContainer = document.createElement("span");
    jellyContainer.classList.add("jelly");
    node.appendChild(jellyContainer);
    jellyAnimation(jellyContainer, words);
  }
  // Fade
  if (animation === "fade") {
    const fadeContainer = document.createElement("span");
    fadeContainer.classList.add("fade");
    node.appendChild(fadeContainer);
    fadeAnimation(fadeContainer, words);
  }
}
// Typing
async function typingAnimation(container, words) {
  for (const word of words) {
    // await delay();
    for (const letter of word) {
      await delay(150);
      container.insertAdjacentText("beforeend", letter);
    }
    await delay(3000);
    // for (let index in word) {
    //   await delay();
    //   let reverseLetters = word.slice(0, word.length - index);
    //   container.textContent = reverseLetters;
    // }
    // await delay();
    container.textContent = "";
  }
  typingAnimation(container, words);
}
// Scale
async function scaleAnimation(container, words) {
  for (const word of words) {
    await delay();
    container.classList.add("scale-in");
    container.textContent = word;
    await delay(2000);
    container.classList.remove("scale-in");
    await delay(1000);
  }
  scaleAnimation(container, words);
}
// Falling Letters
async function fallingLettersAnimation(container, words) {
  for (const word of words) {
    await delay();
    for (const letter of word) {
      await delay(100);
      let letterContainer = document.createElement("span");
      letterContainer.classList.add("falling-letters-in");
      letterContainer.textContent = letter;
      container.appendChild(letterContainer);
    }
    await delay(3000);
    for (const letterContainer of container.children) {
      letterContainer.classList.remove("falling-letters-in");
      letterContainer.classList.add("falling-letters-out");
    }
    await delay(200);
    while (container.firstElementChild) {
      container.firstElementChild.remove();
    }
  }
  fallingLettersAnimation(container, words);
}
// Sliding Letters
async function slidingLettersAnimation(container, words) {
  for (const word of words) {
    await delay();
    for (const letter of word) {
      await delay(100);
      let letterContainer = document.createElement("span");
      letterContainer.classList.add("sliding-letters-in");
      letterContainer.textContent = letter;
      container.appendChild(letterContainer);
    }
    await delay(3000);
    for (const letterContainer of container.children) {
      letterContainer.classList.remove("sliding-letters-in");
      letterContainer.classList.add("sliding-letters-out");
    }
    await delay(1000);
    while (container.firstElementChild) {
      container.firstElementChild.remove();
    }
  }
  slidingLettersAnimation(container, words);
}
// Scaling Letters
async function scalingLettersAnimation(container, words) {
  for (const word of words) {
    for (const letter of word) {
      await delay(200);
      let letterContainer = document.createElement("span");
      letterContainer.classList.add("scaling-letters-in");
      letterContainer.textContent = letter;
      container.appendChild(letterContainer);
    }
    await delay(5000);
    for (const letterContainer of container.children) {
      letterContainer.classList.remove("scaling-letters-in");
      letterContainer.classList.add("scaling-letters-out");
    }
    await delay(400);
    while (container.firstElementChild) {
      container.firstElementChild.remove();
    }
    // await delay(100);
  }
  scalingLettersAnimation(container, words);
}
// Jelly
async function jellyAnimation(container, words) {
  for (const word of words) {
    let wordContainer = document.createElement("span");
    container.appendChild(wordContainer);
    wordContainer.classList.add("jelly-in");
    wordContainer.textContent = word;
    await delay(1000);
    wordContainer.classList.remove("jelly-in");
    await delay(1200);
    wordContainer.classList.add("jelly-out");
    await delay(1000);
    container.firstElementChild.remove();
  }
  jellyAnimation(container, words);
}
// Fade
async function fadeAnimation(container, words) {
  for (const word of words) {
    container.textContent = word;

    if (fadeDirection == undefined || fadeDirection == "default") {
      container.classList.add("fade-in");
      await delay(1000);
      container.classList.remove("fade-in");
      await delay(2000);
      container.classList.add("fade-out");
      await delay(1000);
      container.classList.remove("fade-out");
    }
    if (fadeDirection == "up") {
      container.classList.add("fade-up-in");
      await delay(1000);
      container.classList.remove("fade-up-in");
      await delay(2000);
      container.classList.add("fade-up-out");
      await delay(1000);
      container.classList.remove("fade-up-out");
    }
    if (fadeDirection == "down") {
      container.classList.add("fade-down-in");
      await delay(1000);
      container.classList.remove("fade-down-in");
      await delay(2000);
      container.classList.add("fade-down-out");
      await delay(1000);
      container.classList.remove("fade-down-out");
    }
    if (fadeDirection == "right") {
      container.classList.add("fade-right-in");
      await delay(1000);
      container.classList.remove("fade-right-in");
      await delay(2000);
      container.classList.add("fade-right-out");
      await delay(1000);
      container.classList.remove("fade-right-out");
    }
    if (fadeDirection == "left") {
      container.classList.add("fade-left-in");
      await delay(1000);
      container.classList.remove("fade-left-in");
      await delay(2000);
      container.classList.add("fade-left-out");
      await delay(1000);
      container.classList.remove("fade-left-out");
    }
  }
  fadeAnimation(container, words);
}

function delay(ms) {
  if (ms === undefined) ms = 200;
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
