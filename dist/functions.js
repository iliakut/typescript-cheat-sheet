"use strict";
// Функции
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        };
    }
    return { x: a, y: b };
}
//# sourceMappingURL=functions.js.map