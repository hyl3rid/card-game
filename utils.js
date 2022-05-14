import { addCard } from "./hand.js";

function generateCard(hand, deck, suits) {
  if (deck === 0) {
    throw new Error("No cards left in deck...");
  }

  let jokerBlackAndWhite = false;
  let jokerColor = false;
  let randomNumber = Math.floor(Math.random() * 4);
  // Uncomment this line below to include the joker in card generation
  // let randomNumber = Math.floor(Math.random() * 5);
  let generatingSuit = suits[randomNumber];
  let generatingValue = Math.floor(Math.random() * 13) + 1;

  // Check if there are repeated cards or if Jokers are present in hand
  for (let card of hand) {
    if (card[0] === generatingSuit && card[1] === generatingValue) {
      return generateCard(hand, deck, suits);
    } else if (card[0] === "Joker" && card[1] === "black&white") {
      jokerBlackAndWhite = true;
    } else if (card[0] === "Joker" && card[1] === "colors") {
      jokerColor = true;
    }
  }

  // Avoiding adding duplicate Jokers
  if (!jokerBlackAndWhite) {
    if (generatingSuit === "Joker" && generatingValue === 7) {
      hand.push([generatingSuit, "black&white"]);
      deck--;
      return [[generatingSuit, "black&white"], deck];
    }
  } else if (!jokerColor) {
    if (generatingSuit === "Joker" && generatingValue === 9) {
      hand.push([generatingSuit, "colors"]);
      deck--;
      return [[generatingSuit, "colors"], deck];
    }
  }

  // Stopping more Jokers joining the hand
  if (generatingSuit === "Joker") {
    return generateCard(hand, deck, suits);
  }

  addCard(hand, deck, generatingSuit, generatingValue);

  deck--;

  return [[generatingSuit, generatingValue], deck];
}

function addStringNameToCard(card) {
  if (card[1] === 1) {
    card[1] = "Ace";
  } else if (card[1] === 11) {
    card[1] = "Jack";
  } else if (card[1] === 12) {
    card[1] = "Queen";
  } else if (card[1] === 13) {
    card[1] = "King";
  }

  return card;
}

function validateInput(hand, index) {
  if (hand.length === 0) {
    return "No cards in hand";
  }

  if (index < 0 || index > hand.length) {
    return "Index out of bounds";
  }
  return false;
}

export { generateCard, addStringNameToCard, validateInput };
