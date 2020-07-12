"use strict";
// Работа алгоритма под разные типы данных
const arrayOfNumbers = [1, 1, 2, 3, 5];
const arrayOfStrings = ['hello', 'world'];
// T - просто некий тип
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
// пример с промисом, <> - указан дженерик
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
promise.then(data => {
    console.log(data.toLocaleLowerCase());
});
// пример с объектами:
// 1. ошибка
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Biba' }, { age: 26 });
//console.log(merged.name); // не можем получить name
// 2. пример дженерик (с ошибкой)
function mergeObjectsFixed(a, b) {
    return Object.assign({}, a, b);
}
const mergedFixed = mergeObjectsFixed({ name: 'Biba' }, { age: 26 });
console.log(mergedFixed.name); // получаем автокомплит
// но
const mergedFixed2 = mergeObjectsFixed('Biba', 'Boba');
// console.log(mergedFixed2.name); // все ломается, так как мы не проверили входной параметр на объект
// 3. правильный пример (с ошибкой)
function mergeObjectsAllFixed(a, b) {
    return Object.assign({}, a, b);
}
const mergedAllFixed = mergeObjectsAllFixed({ name: 'Biba' }, { age: 26 });
console.log(mergedAllFixed.name);
function withCount(value) {
    return {
        value,
        count: `Длина ${value.length}`
    };
}
console.log(withCount('hello Typescript'));
console.log(withCount([1, 2, 3]));
//# sourceMappingURL=generic.js.map