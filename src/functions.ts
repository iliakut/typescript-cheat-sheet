// Функции
function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

// Перегрузка функций - определение функии с одним именем, но с разными параметрами
interface MyPosition {
    x: number | undefined
    y: number | undefined
}
interface MyPositionWithDefault extends MyPosition{
    default: string
}

function position(): MyPosition
function position(a: number): MyPosition
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number ) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        }
    }
    return {x: a, y: b}
}
