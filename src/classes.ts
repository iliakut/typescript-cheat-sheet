// classes
class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
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
    // по умолчанию все public
    protected voice: string = ''; // protected доступны в классе и всех наследниках
    public color: string = 'black'; //
    private go() { // private доступны только в том классе, в котором определены
        console.log('Go')
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();

// Абстрактные классы - классы для создания других классов
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info';
    }
}