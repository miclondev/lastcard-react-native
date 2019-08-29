import cards from "../data/cards.json"

export const onSelectCard = (card, selected) => {
    for (let i = 0; i < selected.length; i++) {
        if (cards[card].value === cards[selected[i]].value) {
            return true
        }
        if (cards[card].suit === cards[selected[i]].suit) {
            return true
        }
    }
    return false
}


const onPlayCards = (cards) => {
    //check if cards order can be played


    //if true return true
}

const cardFuntion = (card, player) => {
    //
    if (card.value === 2) {
        return handOutCards(2)
    }
    if (card.value === "joker") {
        return handOutCards(5)
    }

    if (card.value === 7) {
        return nextPlayer(player)
    }

    if (card.value === 8) {
        //reverse play order
    }

    if (card.value === "J") {
        //ask 
    }
}

const cardCanBePlayed = () => {

}

const nextPlayer = (num) => {

}


const handOutCards = (num) => {

}
