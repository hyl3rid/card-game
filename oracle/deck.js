import { generateCard } from "./utils.js";

function dealCard(hand, deck, suits) {
  return generateCard(hand, deck, suits);
}

function remainingCards(deck) {
  return deck;
}

function shuffleCards(hand) {
  hand = [];
  let deck = 52;
  return ["Shuffled deck!", deck, hand];
}

export { dealCard, remainingCards, shuffleCards };
