const { TestScheduler } = require('jest');
const ArrayRotator = require('./ArrayRotator');

test("Test uno", () =>{
    let rotator = new ArrayRotator();
    let rotateAmount = 4;
    let actual = rotator.rotateLeft([1, 2, 3, 4, 5], rotateAmount);
    let expected = [5, 1, 2, 3, 4];
    expect(expected).toEqual(actual);
});

test("Test dos", () =>{
    let rotateAmount = 10;
    let actual = rotator.rotateLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], rotateAmount);
    let expected = [77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 7];
    expect(expected).toEqual(actual);
});