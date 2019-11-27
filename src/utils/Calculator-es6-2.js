
class Singleton {
    constructor() {

    }
    plus(a, b) {
        return a + b
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b) {
        return a * b
    }
    divide(a, b) {
        return a / b
    }
}

Singleton.init = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new Singleton()
        }
        return instance
    }
})()

export default Singleton.init()