// декоратор для класса
function Log(constructor: Function) {
  console.log(1, constructor) // сам класс к которому применяется декоратор
}

// декоратор для свойства класса
function Log2(target: any, propName: string | symbol) {
  console.log(2, target) // класс
  console.log(2, propName) // имя
}

// декоратор для метода класса
function Log3(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
  console.log(3, target) // класс
  console.log(3, propName) // имя
  console.log(3, descriptor) // дескриптор – объект, который описывает поведение свойства (стандартный из js)
}

// применение декоратора
@Log
class Component1 {
  @Log2
  name: string

  constructor() {
    this.name = name;
  }

  @Log3
  get componentName() {
    return this.name;
  }

  @Log3
  logName(): void {
    console.log(`Component name: ${this.name}`)
  }
}
