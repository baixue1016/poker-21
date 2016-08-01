'use strict';
let {dealString, getPartSum, dealA, getWinner, pokerWin}=require('../src/poker-21.js');

describe('poker-21-Part1', ()=> {
    let String_a = 'A-3-4-J';
    let String_b = 'A-A-2-10';
    it("should dealString_a", ()=> {
        let formatted = dealString(String_a);

        let expected = ['A', '3', '4', 'J'];
        expect(formatted).toEqual(expected);
    });

    it("should dealString_b", ()=> {
        let formatted = dealString(String_b);

        let expected = ['A', 'A', '2', '10'];
        expect(formatted).toEqual(expected);
    });
});

describe('poker-21-Part2', ()=> {
    let formatted_a = ['A', '3', '4', 'J'];
    let formatted_b = ['A', 'A', '2', '10'];
    it("should getPartSum_a", ()=> {
        let partSum = getPartSum(formatted_a);
        let expected = 17;
        expect(partSum).toEqual(expected);
    });

    it("should getPartSum_b", ()=> {
        let partSum = getPartSum(formatted_b);
        let expected = 12;
        expect(partSum).toEqual(expected);
    });
});

describe('poker-21-Part3', ()=> {
    it("纯数字", ()=> {
        let formatted_1 = ['3', '5', '7', '9'];
        let partSum_1 = 24;
        let sum = dealA(formatted_1, partSum_1);
        let expected = 24;
        expect(sum).toEqual(expected);
    });

    it("only J,Q,K", ()=> {
        let formatted_2 = ['J', 'J', 'Q', 'K'];
        let partSum_2 = 40;
        let sum = dealA(formatted_2, partSum_2);
        let expected = 40;
        expect(sum).toEqual(expected);
    });

    it("J,Q,K混合", ()=> {
        let formatted_3 = ['J', '4', 'Q'];
        let partSum_3 = 24;
        let sum = dealA(formatted_3, partSum_3);
        let expected = 24;
        expect(sum).toEqual(expected);
    });

    it("A===1", ()=> {
        let formatted_4 = ['A', '3', '4', 'J'];
        let partSum_4 = 17;
        let sum = dealA(formatted_4, partSum_4);
        let expected = 18;
        expect(sum).toEqual(expected);
    });

    it("A===11", ()=> {
        let formatted_5 = ['A', '2', '5', '2'];
        let partSum_5 = 9;
        let sum = dealA(formatted_5, partSum_5);
        let expected = 20;
        expect(sum).toEqual(expected);
    });

    it("三种混合", ()=> {
        let formatted_6 = ['A', '2', 'J', '4'];
        let partSum_6 = 16;
        let sum = dealA(formatted_6, partSum_6);
        let expected = 17;
        expect(sum).toEqual(expected);
    });
});

describe('poker-21-Part4', ()=> {
    it("都>21", ()=> {
        let formatted_a = ['A', '8', '4', 'J'];
        let formatted_b = ['A', 'A', '5', '10'];
        let sum_a = 23;
        let sum_b = 37;
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('no winner');
    });

    it("都<=21,A大", ()=> {
        let formatted_a = ['A', '3', '4', 'J'];
        let formatted_b = ['A', 'A', '2', '10'];
        let sum_a = 18;
        let sum_b = 14;
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('A is winner');
    });

    it("都<=21,点数相同 牌数不同", ()=> {
        let formatted_a = ['A', '3', '4', 'J'];
        let formatted_b = ['A', 'A', '2', '10', '4'];
        let sum_a = 18;
        let sum_b = 18;
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('A is winner');
    });

    it("都<=21,点数相同 牌数相同", ()=> {
        let formatted_a = ['A', '2', '4', 'J'];
        let formatted_b = ['A', 'A', '5', '10'];
        let sum_a = 17;
        let sum_b = 17;
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('no winner');
    });

    it("一个大于21，一个小于21", ()=> {
        let formatted_a = ['A', '3', '4', 'J'];
        let formatted_b = ['A', '2', '10', 'Q'];
        let sum_a = 18;
        let sum_b = 23;
        let result = getWinner(sum_a, sum_b, formatted_a, formatted_b);
        expect(result).toEqual('A is winner');
    });
});


describe('poker-21', ()=> {
    it("get #1", ()=> {
        let input1 = 'A-3-4-J';
        let input2 = 'A-A-2-10';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('A is winner');
    });

    it("get #2", ()=> {
        let input1 = 'A-2-9-8-J';
        let input2 = 'J-3';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('B is winner');
    });

    it("get #3", ()=> {
        let input1 = 'A-A-A-K-7';
        let input2 = 'A-J-6-3';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('B is winner');
    });

    it("get #4", ()=> {
        let input1 = '5-7-A-Q';
        let input2 = '8-9-K-Q';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('no winner');
    });

    it("get #5", ()=> {
        let input1 = '4-5-A-10';
        let input2 = 'K-3-2-5';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('no winner');
    });

    it("get #6", ()=> {
        let input1 = '2-3-4-5';
        let input2 = '4-2-7';
        let result = pokerWin(input1, input2);
        expect(result).toEqual('A is winner');
    });
});