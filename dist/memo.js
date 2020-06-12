"use strict";
const hello = 'hello';
console.log(hello);
const person = {
    name: 'Jack',
    age: 21,
};
console.log(person.name);
// 配列
const fruits = ['Apple', 'Banana', 'Grape'];
console.log(fruits);
// Tuple
const book = ['business', 1500, false];
console.log(book);
// Enum
// Enumの値は大文字にする
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
// union
const unionType = 'hoge';
unionType.toUpperCase();
const unionTypeArray = ['hoge', 10];
console.log(unionType, unionTypeArray);
// Literal
const apple = 'apple';
console.log(apple);
const clothSize = 'large';
clothSize;
// 関数に型をつける
// 引数には型推論効かない。返り値には効く
function add(num1, num2) {
    return num1 + num2;
}
add(1, 3);
function sayHello() {
    console.log('Hello');
}
sayHello();
// const anotherAdd: (n1: number, n2: number) => number = sayHello
const anotherAdd = add;
anotherAdd;
// allow function
const doubleNumber = (num) => num * 2;
doubleNumber(3);
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num);
    console.log(doubleNum);
}
doubleAndHandle(2, (num) => {
    return num * 2;
});
let anyInput;
// let unknownInput: unknown
// 代入はどちらも同じ
anyInput = 'hoge';
anyInput = 21;
// unknownInput = 'fuga'
// unknownInput = 21
const text = anyInput; // anyは代入できてしまう
// const text: string = unknownInput // unknownはエラーが出る
text;
// エラーを起こして途中で終了 or 無限ループのときneverが使える
function error(message) {
    throw Error(message);
}
error;
