'use strict';
let _ = require('lodash');

function dealString(input) {
    return _.split(input, '-');
}

function getPartSum(formatted) {
    let a = _.chain(formatted).filter(x=> x !== 'A')
        .map(x=> {
            if (x === 'J' || x === 'Q' || x === 'K') {
                return _.chain(x).replace(x, 10).value();
            }
            else {
                return x;
            }
        }).value();
    return _(a).map(x=> _.parseInt(x)).sum();
}

function dealA(formatted, partSum) {
    let a = _.chain(formatted).filter(x=> x === 'A').value();
    let lenA = a.length;

    let sub = 21 - partSum;
    if (sub < 0) {
        return "gameover";
    } else {
        let sumA;
        let sum;
        if (_.floor(sub / 11) === 0) {
            sumA = lenA * 1;
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
    if (sumA < sumB && sumA < 21 && sumB < 21) {
        return 'B is winner';
    } else if (sumA > sumB && sumA < 21 && sumB < 21) {
        console.log('A is winner') ;
    } else if (sumA > 21 && sumB < 21) {
        return 'B is winner';
    } else if (sumA < 21 && sumB > 21) {
        return 'A is winner';
    } else if (sumA === sumB && sumA < 21 && sumB < 21) {
        let c = _.chain(formatted_a).filter(x=> x === 'A').value();
        let len_a = c.length;

        let d = _.chain(formatted_b).filter(x=> x === 'A').value();
        let len_b = d.length;

        if (len_a === len_b) {
            return 'no winner';
        } else if (len_a < len_b) {
            return 'A is winner';
        } else {
            return 'B is winner';
        }
    } else if (sumA > 21 && sumB > 21) {
        return 'no winner';
    }
}
module.exports = {
    dealString: dealString,
    getPartSum: getPartSum,
    dealA: dealA,
    getWinner: getWinner
};