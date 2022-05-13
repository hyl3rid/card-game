import { validateInput, addStringNameToCard } from "./utils.js";

function addCard(hand, deck, generatingSuit, generatingValue) {
  hand.push([generatingSuit, generatingValue]);
  return [[generatingSuit, generatingValue], deck];
}

function removeCard(hand, index) {
  let message = validateInput(hand, index);

  if (message) {
    return message;
  }

  return addStringNameToCard(hand.splice(index, 1)[0]);
}

function sortBySuit(hand, asc = true) {
  hand.sort((a, b) => {
    if (asc) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (b[0] < a[0]) {
        return 1;
      }
      return 0;
    } else {
      if (a[0] > b[0]) {
        return -1;
      }
      if (b[0] > a[0]) {
        return 1;
      }
      return 0;
    }
  });
}

function sortByValue(hand, asc = true) {
  hand.sort((a, b) => {
    if (asc) {
      return a[1] - b[1];
    } else {
      return b[1] - a[1];
    }
  });
}

export { addCard, removeCard, sortBySuit, sortByValue };
