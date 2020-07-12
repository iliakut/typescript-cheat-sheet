// Interface интерфейсы часто называют через I
interface Rect {
    readonly id: string // только для чтения
    color?: string // необязательный
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Наследования интерфейсов
interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 1,
        height: 2
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
};

// Взаимодействие интерфейсов с классами
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
    }
}

// интерфейси с большим количетсвом динамических ключей

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
};