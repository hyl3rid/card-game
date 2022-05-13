import { dealCard, shuffleCards, remainingCards } from "./deck.js";
import { addCard, removeCard, sortBySuit, sortByValue } from "./hand.js";
import {
  getSuit,
  getValue,
  getSuitAsString,
  getValueAsString,
  getToString,
} from "./card.js";
import { addStringNameToCard } from "./utils.js";

let deck = 52;
// Comment the above and uncomment the below to allow space for jokers
// let deck = 54;
let suits = ["Clubs", "Diamonds", "Hearts", "Spades", "Joker"];
let hand = [];
let addedCard;
let dealedCard;
let message;

function viewHand(hand) {
  let temp = JSON.parse(JSON.stringify(hand));
  for (let card of temp) {
    addStringNameToCard(card);
  }

  return temp;
}

// Generating a hand of 7 cards
for (let i = 0; i < 7; i++) {
  [dealedCard, deck] = dealCard(hand, deck, suits);
}

// console.log(viewHand(hand));

// #########################################
// Dealing cards
// [dealedCard, deck] = dealCard(hand, deck, suits);
// console.log(dealedCard);
// console.log(viewHand(hand));

// #########################################
// Check cards left... not sure if im using the index as main source of data
// console.log(remainingCards(deck));

// #########################################
// Setting to default the deck and hand
// console.log("Current cards in deck: ", deck);
// console.log("Current hand: ", hand);
// [message, deck, hand] = shuffleCards(hand);
// console.log(message, remainingCards(deck));
// [dealedCard, deck] = dealCard(hand, deck, suits);
// console.log(viewHand(hand));
// console.log(deck);

// #########################################
// Removing cards from hand. 0 indexed based
// console.log(viewHand(hand));
// console.log(removeCard(hand, 6));
// console.log(viewHand(hand));

// #########################################
// Sort by suit - DES
// sortBySuit(hand, false);
// console.log(viewHand(hand));

// Sort by suit - ASC
// sortBySuit(hand);
// console.log(viewHand(hand));

// #########################################
// Sort by value - DES
// sortByValue(hand, false);
// console.log(viewHand(hand));

// Sort by value - ASC
// sortByValue(hand);
// console.log(viewHand(hand));

// #########################################
// Getting index of the Suit card from array in hand with specified index
// ["Clubs", "Diamonds", "Hearts", "Spades", "Joker"]
// console.log("Index of Suit: ", getSuit(hand, 0, suits));
// console.log(viewHand(hand));

// Getting value of card in hand with specified index
// console.log(getValue(hand, 6));
// console.log(viewHand(hand));

// #########################################
// Few other tests
// console.log(getSuitAsString(hand, 6));
// console.log(typeof getValueAsString(hand, 6), getValueAsString(hand, 6));
// console.log(getToString(hand, 6));

// #########################################
// Unexpected values
// console.log(getSuitAsString([], 6));
// console.log(getSuitAsString(hand, 4536));
// console.log(getSuitAsString(hand, -1));
