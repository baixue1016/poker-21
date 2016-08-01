'use strict';
let _ = require('lodash');

function dealString(input) {
    return _.split(input, '-');
}

function getPartSum(formatted) {
    let a = _.chain(formatted).filter(x=> x !== 'A')
        .map(x=> {
            if (x === 'J' || x === 'Q' || x === 'K') {
                //   return _.replace(x, x, 10);
                return '10';
            }
            else {
                return x;
            }
        }).value();
    return _(a).map(x=> _.parseInt(x)).sum();
}

function dealA(formatted, partSum) {
    let a = _.filter(formatted, x=> x === 'A');
    let lenA = a.length;
    let sum;
    let sub = 21 - partSum;
    if (sub < 0) {
        sum = partSum + lenA;
        return sum;
    } else {
        let sumA;
        if (_.floor(sub / 11) === 0) {
            sumA = lenA;
            sum = partSum + sumA;
            return sum;
        } else {
            sumA = 11 + (lenA - 1);
            sum = partSum + sumA;
            return sum;
        }
    }
}

function getWinner(sumA, sumB, formatted_a, formatted_b) {
    if (sumA <= 21 && sumB <= 21) {
        if (sumA < sumB) {
            return 'B is winner';
        } else if (sumA > sumB) {
            return 'A is winner';
        } else if (sumA === sumB) {
            let len_a = formatted_a.length;
            let len_b = formatted_b.length;

            if (len_a === len_b) {
                return 'no winner';
            } else if (len_a < len_b) {
                return 'A is winner';
            } else {
                return 'B is winner';
            }
        }
    } else if (sumA > 21 && sumB < 21) {
        return 'B is winner';
    } else if (sumA < 21 && sumB > 21) {
        return 'A is winner';
    } else if (sumA > 21 && sumB > 21) {
        return 'no winner';
    }
}

function pokerWin(input1, input2) {
    let formatted1 = dealString(input1);
    let formatted2 = dealString(input2);
    let partSum1 = getPartSum(formatted1);
    let partSum2 = getPartSum(formatted2);
    let sum1 = dealA(formatted1, partSum1);
    let sum2 = dealA(formatted2, partSum2);
    return getWinner(sum1, sum2, formatted1, formatted2);
}

module.exports = {
    dealString: dealString,
    getPartSum: getPartSum,
    dealA: dealA,
    getWinner: getWinner,
    pokerWin: pokerWin
};