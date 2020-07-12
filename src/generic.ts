// Работа алгоритма под разные типы данных
import get = Reflect.get;

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['hello', 'world'];

// T - просто некий тип
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);

// пример с промисом, <> - указан дженерик
const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000)
});

promise.then(data => {
  console.log(data.toLocaleLowerCase())
});



// пример с объектами:
// 1. ошибка
function mergeObjects(a: object, b: object) {
  return Object.assign({}, a, b);
}
const merged = mergeObjects({name: 'Biba'}, {age: 26});
//console.log(merged.name); // не можем получить name

// 2. пример дженерик (с ошибкой)
function mergeObjectsFixed<T, R>(a: T, b: R) {
  return Object.assign({}, a, b);
}
const mergedFixed = mergeObjectsFixed({name: 'Biba'}, {age: 26});
console.log(mergedFixed.name); // получаем автокомплит
// но
const mergedFixed2 = mergeObjectsFixed('Biba', 'Boba');
// console.log(mergedFixed2.name); // все ломается, так как мы не проверили входной параметр на объект

// 3. правильный пример (с ошибкой)
function mergeObjectsAllFixed<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
}
const mergedAllFixed = mergeObjectsAllFixed({name: 'Biba'}, {age: 26});
console.log(mergedAllFixed.name);
// const mergedAllFixed2 = mergeObjectsAllFixed('Biba', 'Boba'); // получаем проверку на тип


// пример с определенным функционалом у типа
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `Длина ${value.length}`
  }
}

console.log(withCount('hello Typescript'))
console.log(withCount([1, 2, 3]))


// keyof
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const test = {
  name: 'Biba',
  surname: 'Boba',
  age: '25'
}

console.log(getObjectValue(test, name))
// console.log(getObjectValue(test, job)) // получаем проверку на ключи


// пример с классами
class Collection<T extends number | string | boolean>{
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  get items(): T[] {
    return this._items;
  }
}

const string = new Collection<string>(['Some', 'strings'])
string.add('!');
console.log(string.items);



// Partial
interface Car {
  model: string,
  year: number
};

function createAndValidateCar(model: string, year: number): Car {
  // не хватает полей, чтобы от этого уйти нужно использовать Partial
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as Car;
}


// Readonly
const cars: ReadonlyArray<string> = ['Ford', 'Audi'];
// cars.shift() // ошибка

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari'; // ошибка