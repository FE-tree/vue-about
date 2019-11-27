// 原型
const Singleton = function(a, b) {
    this.a = a
    this.b = b
}

Singleton.prototype.plus = function(a, b) {
    return a + b
}
Singleton.prototype.subtract = function (a, b) {
    return a - b
}
Singleton.prototype.multiply = function (a, b) {
    return a * b
}
Singleton.prototype.divide = function (a, b) {
    return a / b
}

Singleton.getInstance = (function() {
    let instance = null;
    return {
        getInstance: function() {
            instance = new Singleton();
            return instance;
        }
    };
})();

export default Singleton