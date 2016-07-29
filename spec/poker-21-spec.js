'use strict';
let {dealString, getPartSum, dealA, getWinner}=require('../src/poker-21.js');

describe('poker-21-Part1', ()=> {
    let String_a = 'A-3-4-J';
    let String_b = 'A-A-2-10';
    fit("should dealString_a", ()=> {
        let formatted = dealString(String_a);

        let expected = ['A', '3', '4', 'J'];
        expect(formatted).toEqual(expected);
    });

    fit("should dealString_b", ()=> {
        let formatted = dealString(String_b);

        let expected = ['A', 'A', '2', '10'];
        expect(formatted).toEqual(expected);
    });
});

describe('poker-21-Part2', ()=> {
    let formatted_a = ['A', '3', '4', 'J'];
    let formatted_b = ['A', 'A', '2', '10'];
    fit("should getPartSum_a", ()=> {
        let partSum = getPartSum(formatted_a);
        let expected = 17;
        expect(partSum).toEqual(expected);
    });

    fit("should getPartSum_b", ()=> {
        let partSum = getPartSum(formatted_b);
        let expected = 12;
        expect(partSum).toEqual(expected);
    });
});

describe('poker-21-Part3', ()=> {
    let formatted_a = ['A', '3', '4', 'J'];
    let formatted_b = ['A', 'A', '2', '10'];
    let partSum_a = 17;
    let partSum_b = 12;
    fit("should dealA_a", ()=> {
        let sum = dealA(formatted_a, partSum_a);
        let expected = 18;
        expect(sum).toEqual(expected);
    });

    fit("should dealA_b", ()=> {
        let sum = dealA(formatted_b, partSum_b);
        let expected = 14;
        expect(sum).toEqual(expected);
    });
});

describe('poker-21-Part4', ()=> {
    let formatted_a = ['A', '3', '4', 'J'];
    let formatted_b = ['A', 'A', '2', '10'];
    let sum_a = 18;
    let sum_b = 14;
    fit("should getWinner", ()=> {
        let result = getWinner(formatted_a, formatted_b, sum_a, sum_b);
        expect(result).toEqual('A is winner');
    });
});

describe('poker-21', function () {
    let formatted_a = ['A', '3', '4', 'J'];
    let formatted_b = ['A', 'A', '2', '10'];
    let sum_a = 18;
    let sum_b = 14;
    fit("text-1", function () {
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('A is winner');
    });
});