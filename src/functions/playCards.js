import cards from "../data/cards.json";

export const shuffle = toShuffle => {
  let cards = [...toShuffle];
  let m = cards.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }
  return cards;
};

export const onSelectCard = (card, selected) => {
  for (let i = 0; i < selected.length; i++) {
    if (cards[card].value === cards[selected[i]].value) {
      return true;
    }
    if (cards[card].suit === cards[selected[i]].suit) {
      return true;
    }
  }
  return false;
};

const canPlay = (playCards, lastPlayed) => {
  let belowCard = playCards[playCards.length - 1];

  if (cards[belowCard].value === cards[lastPlayed].value) {
    return true;
  }

  if (cards[belowCard].suit === cards[lastPlayed].suit) {
    return true;
  }

  return false;
};

const cardFuntion = lastPlayed => {
  //
  if (cards[lastPlayed].value === 2) {
    return handOutCards(2);
  }

  if (card.value === "joker") {
    return handOutCards(5);
  }

  if (card.value === 7) {
    return nextPlayer(player);
  }

  if (card.value === 8) {
    //reverse play order
  }

  if (card.value === "J") {
    //ask
  }
};

const nextPlayer = num => {};

const handOutCards = num => {};
