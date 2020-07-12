"use strict";
// Работа алгоритма под разные типы данных
var get = Reflect.get;
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
// keyof
function getObjectValue(obj, key) {
    return obj[key];
}
const test = {
    name: 'Biba',
    surname: 'Boba',
    age: '25'
};
console.log(getObjectValue(test, name));
// console.log(getObjectValue(test, job)) // получаем проверку на ключи
// пример с классами
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return this._items;
    }
}
const string = new Collection(['Some', 'strings']);
string.add('!');
console.log(string.items);
;
function createAndValidateCar(model, year) {
    // не хватает полей, чтобы от этого уйти нужно использовать Partial
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
// Readonly
const cars = ['Ford', 'Audi'];
// cars.shift() // ошибка
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrari'; // ошибка
//# sourceMappingURL=generic.js.map