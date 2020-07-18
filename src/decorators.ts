/*// декоратор для класса
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
}*/



// как в angular
interface ComponentDecorator {
  selector: string
  template: string
}
function ComponentDecorator(config: ComponentDecorator) {
  return function
  <T extends { new(...args: any[]): object }>
  (Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(args)
        const el = document.getElementById(config.selector)!
        el.innerHTML = config.template
      }
    }
  }
}

@ComponentDecorator({
  selector: 'card',
  template: `
    <div class="card">
        <span>Card component</span>
    </div>
    `
})
class CardComponent {
  constructor(public name: string) {
  }

  logName(): void {
    console.log(`Component name: ${this.name}`)
  }
}

const card = new CardComponent('My card component')

// Привер декоратора валидации
// type ValidatorType = 'required' | 'email'
//
// interface IValidatorConfig {
//   [prop: string]: {
//     [validateProp: string]: ValidatorType
//   }
// }
//
// const validators = {
//
// }
//
// function Required(target: any, propName: string) {
//   validators[target.constructor.name] = {
//     ...validators[target.constructor.name],
//     [propName]: 'required'
//   };
// }
//
// class Form {
//   public email: string | void
//
//   constructor(email?: string) {
//     this.email = email;
//   }
// }
