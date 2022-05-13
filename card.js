import { addStringNameToCard, validateInput } from "./utils.js";

function getSuit(hand, index, suits) {
  let message = validateInput(hand, index);

  if (message) {
    return message;
  }

  return suits.indexOf(hand[index][0]);
}

function getValue(hand, index) {
  let message = validateInput(hand, index);

  if (message) {
    return message;
  }

  //   let cardMasked = addStringNameToCard(hand[index]);
  return hand[index][1];
}

function getSuitAsString(hand, index) {
  let message = validateInput(hand, index);

  if (message) {
    return message;
  }

  return hand[index][0];
}

function getValueAsString(hand, index) {
  let message = validateInput(hand, index);

  if (message) {
    return message;
  }

  let card = addStringNameToCard(hand[index]);
  return card[1].toString();
}

function getToString(hand, index) {
  let message = validateInput(hand, index);

  if (message) {
    return message;
  }

  let card = addStringNameToCard(hand[index]);
  return `${card[1]} of ${card[0]}`;
}

export { getSuit, getValue, getSuitAsString, getValueAsString, getToString };
