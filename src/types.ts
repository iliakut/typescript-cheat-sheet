// 1. Boolean
let bool: boolean = false;

// 2. Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 3. String
let color: string = 'red';
let text: string = `the color is ${color}`;

// 4. Array
let firstArr: number[] = [1, 1, 2, 4, 5];
//  generic array type
let secondArr: Array<String> = ['T', 'S'];

// 5. Tuple - fixed length array with known element types
let tupleArr: [string, number] = ['test', 123];

// 6. Enum - для однотипных элементов
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard; // равно числу 1
const membershipReverse = Membership[2]; // равно строке Premium

enum Social {
    Vk = 'vk',
    Facebook = 'fb',
    Instagram = 'inst'
}

const social = Social.Vk; // равно 'vk', а не 0

// 7. Any
let anyTest: any = 123;
anyTest = 'hello';
let anyArr: any[] = [123, 'hello'];
anyArr = ['hello', 1123];

// 8. Void - используется для функций, говорит о том, что она ничего не возвращает
function testFunc(name: string): void {
    console.log(name);
}

testFunc('name');

// 9. Null and Undefined

// 10. Never - functions output which never ends (error or infinite)
function fail(): never {
    throw new Error('Something failed');
}

// 11. Object

// Собственные типы
type Login = string
type ID = string | number

const login: Login = 'admin';
const id1: ID = 123;
const id2: ID = '123';


// Type assertion - приведение к типу

