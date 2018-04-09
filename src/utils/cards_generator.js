export const cardsGenerator = () => {
    //We have to return an array of objects containing every possible combination
    const suits = ['clubs','spades','hearts','diamonds']
    const cvalues = [2,3,4,5,6,7,8,9,10,'jack','queen','king', 'ace']
    let deck = []
    let suitOrder = 0

    for(let suit of suits){
    let valOrder = 0
    for(let val of cvalues){
        deck.push({suit, val, suitOrder, valOrder})
        valOrder++
    }
    suitOrder++
    }

    return deck
}