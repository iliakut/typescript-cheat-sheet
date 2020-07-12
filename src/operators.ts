interface Person {
    name: string;
    age: number
}

// keyof - все имена свойств
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'job'; // error

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}
// мы хотим создать новый тип, включающий не все поля User
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// или
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

// переменные со значениями типов
let u1: UserKeysNoMeta1 = 'name';
// u1 = '_id'; // error