'use strict';
let {dealString, getPartSum, dealA, getWinner, pokerWin}=require('../src/poker-21.js');

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
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('A is winner');
    });
});


describe('poker-21', ()=> {
    fit("get #1", ()=> {
        let input1 = 'A-3-4-J';
        let input2 = 'A-A-2-10';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('A is winner');
    });

    fit("get #2", ()=> {
        let input1 = 'A-2-9-8-J';
        let input2 = 'J-3';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('B is winner');
    });

    fit("get #3", ()=> {
        let input1 = 'A-A-A-K-7';
        let input2 = 'A-J-6-3';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('B is winner');
    });

    fit("get #4", ()=> {
        let input1 = '5-7-A-Q';
        let input2 = '8-9-K-Q';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('no winner');
    });

    fit("get #5", ()=> {
        let input1 = '4-5-A-10';
        let input2 = 'K-3-2-5';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('no winner');
    });

    fit("get #6", ()=> {
        let input1 = '2-3-4-5';
        let input2 = '4-2-7';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('A is winner');
    });
});