"use strict";
// 1. Boolean
let bool = false;
// 2. Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// 3. String
let color = 'red';
let text = `the color is ${color}`;
// 4. Array
let firstArr = [1, 1, 2, 4, 5];
//  generic array type
let secondArr = ['T', 'S'];
// 5. Tuple - fixed length array with known element types
let tupleArr = ['test', 123];
// 6. Enum - для однотипных элементов
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standard; // равно числу 1
const membershipReverse = Membership[2]; // равно строке Premium
var Social;
(function (Social) {
    Social["Vk"] = "vk";
    Social["Facebook"] = "fb";
    Social["Instagram"] = "inst";
})(Social || (Social = {}));
const social = Social.Vk; // равно 'vk', а не 0
// 7. Any
let anyTest = 123;
anyTest = 'hello';
let anyArr = [123, 'hello'];
anyArr = ['hello', 1123];
// 8. Void - используется для функций, говорит о том, что она ничего не возвращает
function testFunc(name) {
    console.log(name);
}
testFunc('name');
// 9. Null and Undefined
// 10. Never - functions output which never ends (error or infinite)
function fail() {
    throw new Error('Something failed');
}
const login = 'admin';
const id1 = 123;
const id2 = '123';
// Type assertion - приведение к типу
//# sourceMappingURL=types.js.map