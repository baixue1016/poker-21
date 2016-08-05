'use strict';
let _ = require('lodash');

function getCards(input) {
    return [...input].filter(x=> x !== '-');
}

function convertJkqToNumberCards(formattedInput) {
    return _.map(formattedInput, x=> ['J', 'Q', 'K'].includes(x) ? '10' : x)
}

function getPointAndCount(numberCards) {
    let initialSum = _(numberCards).map(x => x === 'A' ? 1 : _.parseInt(x)).sum();
    let point = _.reduce(numberCards, resultSum => {
        let trySum = resultSum + 10;
        return trySum > 21 ? resultSum : trySum;
    }, initialSum);

    return {point, count: numberCards.length};
}

function getComparedResult(aPointAndCount, bPointAndCount) {
    let {point:aPoint, count:aCount} = aPointAndCount;
    let {point:bPoint, count:bCount} = bPointAndCount;
    if (aPoint > 21 && bPoint > 21) return "tied";
    if (aPoint > 21) return 'B won';
    if (bPoint > 21) return 'A won';
    if (aPoint > bPoint) return 'A won';
    if (bPoint > aPoint) return 'B won';
    if (aCount > bCount) return 'B won';
    if (bCount > aCount) return 'A won';
    return 'tied';
}

function printWinner(inputA, inputB) {
    let aPointAndCount = getPointAndCount(convertJkqToNumberCards(getCards(inputA)));
    let bPointAndCount = getPointAndCount(convertJkqToNumberCards(getCards(inputB)));
    let winner = getComparedResult(aPointAndCount, bPointAndCount);
    console.log(winner);
}

module.exports = {
    getCards,
    convertJkqToNumberCards,
    getPointAndCount,
    getComparedResult,
    printWinner
};