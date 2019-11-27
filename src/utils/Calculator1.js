
const Singleton = function(a, b) {
    this.a = a;
    this.b = b;
    this.plus = function() {
        return this.a + this.b
    }
    this.subtract = function () {
        return this.a - this.b
    }
    this.multiply = function () {
        return this.a * this.b
    }
    this.divide = function () {
        return this.a / this.b
    }
}

export default Singleton