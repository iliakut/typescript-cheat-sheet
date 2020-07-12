"use strict";
// вспомогательные конструкторы
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = 'resp header';
        this.results = 'resp result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.message = 'error result';
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.results
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    /// ...
}
setAlertType('success');
setAlertType('warning');
// setAlertType('default'); - error
//# sourceMappingURL=guards.js.map