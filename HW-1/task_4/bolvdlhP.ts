// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
// }
type CardSuit = 'spade' | 'diamond' | 'heart' | 'clubs';
type CardColor = 'red' | 'black';
type CardValue = '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';

interface Card {
    cardSuit: CardSuit;
    value: CardValue;
    color: CardColor;
}

interface ColorMap {
    spade: CardColor;
    clubs: CardColor;
    heart: CardColor;
    diamond: CardColor;
}

// Значения
const values: CardValue[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const suits: CardSuit[] = ['spade', 'diamond', 'heart', 'clubs'];

const colors: ColorMap = {
    spade: 'black',
    clubs: 'black',
    heart: 'red',
    diamond: 'red'
};

const cardsHolder: Card[] = [];

for (const suit of suits) {
    for (const value of values) {
        cardsHolder.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}
console.log(cardsHolder);

// – знайти піковий туз
console.log(cardsHolder.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

// – всі шістки
console.log(cardsHolder.filter(value => value.value === '6'));

// – всі червоні карти
console.log(cardsHolder.filter(value => value.color === 'red'));

// – всі буби
console.log(cardsHolder.filter(value => value.cardSuit === 'diamond'));

// – всі трефи від 9 та більше
const cardWeights: { [key in CardValue]: number } = {
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'jack': 11,
    'queen': 12,
    'king': 13,
    'ace': 14
};
console.log(cardsHolder.filter(value => value.cardSuit === 'clubs' && cardWeights[value.value] > 8 ));


// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

interface CardBySuit {
    spade?: Card[];
    diamond?: Card[];
    heart?: Card[];
    clubs?: Card[];
}

const cardsBySuit: CardBySuit = cardsHolder.reduce((acc, card) => {
    if (!acc[card.cardSuit]) {
        acc[card.cardSuit] = [];
    }
    acc[card.cardSuit]!.push(card);
    return acc;
}, {} as CardBySuit);

console.log(cardsBySuit);