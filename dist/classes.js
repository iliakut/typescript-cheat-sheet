"use strict";
// classes
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
/*class Car {
    readonly model: string;
    readonly numberOfWheel: number;

    constructor(theModel: string) {
        this.model = theModel
    }
}
// аналогичная запись
class Car2 {
    readonly numberOfWheel: number;
    constructor(readonly model: string) {
    }
}*/
// Модификаторы
class Animal {
    constructor() {
        // по умолчанию все public
        this.voice = ''; // protected доступны в классе и всех наследниках
        this.color = 'black'; //
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
// Абстрактные классы - классы для создания других классов
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
//# sourceMappingURL=classes.js.map