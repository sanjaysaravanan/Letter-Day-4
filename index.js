/* 
  id: element identifier
  tagName: tag-name
  text: string
  displayAtOnce: boolean
*/

const array = [
  {
    text: "Letter Four",
    tagName: "h3",
    displayAtOnce: false,
  },
  {
    text: "मुझसे भी ज्यादा तुम्हारी जरूरत है",
    tagName: "h3",
    displayAtOnce: false,
  },
  {
    text: "Hey My Dear",
    tagName: "p",
    displayAtOnce: false,
    isParent: true,
    children: [
      {
        text: "Hey My Dear",
        tagName: "span",
        displayAtOnce: false,
      },
      {
        text: "&#10084;",
        tagName: "b",
        displayAtOnce: true,
        color: "red",
      },
    ],
  },
  {
    text: "God creating a family for others,",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Father, Mother, Two or Three kids",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Mother caring for the entire family without any expectation.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Father working hard for the entire family without any expectation.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Kids fighting & creating strong bond with eachother.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Simple but soulfull & Meaningfull relationships that people generally get.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "More Soulfull & Meaningfull reasons for life.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "God creating family for Me,",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Gave good education, skills, health, wealth.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "But took all the beautifull realtionships away.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Made Me long for a simple/minimalistic beautifull life.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Made Me go crazy on searching soulfull relationships.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "I had no reason for life except the Goal of educating & up-bringing some people with the skills & knowledge I possess.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "After a long time God showed mercy on Me,",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "He gave Me a soulfull reason/realtionship for life.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "He gave Me My Love ( My Doll ). After a long time reason/soul for My life.",
    tagName: "p",
    displayAtOnce: false,
    isParent: true,
    children: [
      {
        text: "He gave Me",
        tagName: "span",
        displayAtOnce: false,
      },
      {
        text: " &#10084;",
        tagName: "b",
        displayAtOnce: true,
        color: "red",
      },
      {
        text: "( My Doll ). After a long time reason/soul for My life.",
        tagName: "span",
        displayAtOnce: false,
      },
    ],
  },
  {
    text: "Even in this, fortunately or unfornately He gave Me a fear,",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Fear of Hurting You<b>(Only Reason/Soul)</b>",
    tagName: "p",
    displayAtOnce: true,
  },
  {
    text: "Fear of Fighting with You<b>(Only Reason/Soul)</b>",
    tagName: "p",
    displayAtOnce: true,
  },
  {
    text: "Fear of having conflicts You<b>(Only Reason/Soul)</b>",
    tagName: "p",
    displayAtOnce: true,
  },
  {
    text: "Fear of Missing You<b>(Only Reason/Soul)</b>",
    tagName: "p",
    displayAtOnce: true,
  },
  {
    text: "This may be small things in a relationship, but for Me this relationship is what all I got.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "So, taking steps to avoid figths/conflicts with so much consciousness that I should not get into any of the fears.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "In the fear of Missing You somwhere I might loose Me.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "My Love I want You, even if it is at the cost of Me losing My own-self.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "Yea, You heared it right I need U( You & Me ) more than Me.",
    tagName: "p",
    displayAtOnce: false,
  },
  {
    text: "You My Love is all I got.",
    tagName: "p",
    displayAtOnce: false,
    isParent: true,
    children: [
      {
        text: "You My ",
        tagName: "span",
        displayAtOnce: false,
      },
      {
        text: "&#10084;",
        tagName: "b",
        displayAtOnce: true,
        color: "red",
      },
      {
        text: " is all I got.",
        tagName: "span",
        displayAtOnce: false,
      },
    ],
  },
  {
    text: "From Your Nerdy Husband Who",
    tagName: "div",
    displayAtOnce: false,
  },
  {
    text: "Needs U( You & Me )",
    tagName: "b",
    displayAtOnce: false,
  },
  {
    text: "",
    tagName: "h1",
    displayAtOnce: false,
  },
  {
    text: "To My Dear",
    tagName: "div",
    isParent: true,
    children: [
      {
        text: "To My Dear",
        tagName: "span",
        displayAtOnce: false,
      },
      {
        text: " &#10084;",
        tagName: "span",
        displayAtOnce: true,
        color: "red",
      },
    ],
  },
  {
    text: "Wife",
    tagName: "b",
    displayAtOnce: false,
    color: "red",
  },
  {
    text: "",
    tagName: "h1",
    displayAtOnce: false,
  },
  {
    text: "பின் குறிப்பு:",
    tagName: "b",
    displayAtOnce: false,
    color: "red",
  },

  {
    text: "Really sorry for worrying about others in Our relationship.",
    tagName: "div",
    displayAtOnce: false,
  },
  {
    text: "",
    tagName: "h6",
    displayAtOnce: false,
  },
  {
    text: `
I am wrote this for Us( You & Me ) & not because of any specific actions.
`,
    tagName: "div",
    displayAtOnce: false,
  },
  {
    text: "Oi, let's stop our overthinking & Enjoy Love",
    tagName: "div",
    displayAtOnce: false,
  },
];
async function displayTextOneLetterAtATime(
  text,
  outputElement,
  displayAtOnce = false
) {
  if (displayAtOnce) {
    outputElement.innerHTML = text;
    return new Promise((resolve) => {
      resolve();
    });
  }
  let index = 0;
  const resolvePromise = new Promise((resolve) => {
    displayNextLetter(resolve);
  });
  function displayNextLetter(resolve) {
    if (index < text.length) {
      outputElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => displayNextLetter(resolve), 100); // Adjust the delay (in milliseconds) between letters
    } else {
      resolve();
    }
  }
  return resolvePromise;
}

let i = 0;
const doOperation = async () => {
  while (i < array.length) {
    const {
      text,
      id,
      tagName,
      displayAtOnce,
      isParent = false,
      children = [],
    } = array[i];
    const element = document.createElement(tagName);
    const mainBody = document.getElementById('main');
    mainBody.append(element);
    if (isParent) {
      let j = 0;
      while (j < children.length) {
        const { text, tagName, displayAtOnce, color } = children[j];
        const innerElement = document.createElement(tagName);
        innerElement.style.color = color;
        element.append(innerElement);
        await displayTextOneLetterAtATime(text, innerElement, displayAtOnce);
        j++;
      }
    } else {
      await displayTextOneLetterAtATime(text, element, displayAtOnce);
    }
    i++;
  }
};

doOperation();
