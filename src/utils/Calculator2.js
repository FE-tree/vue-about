// 闭包
const Singleton = (function() {
    let instance;
    function init() {
        // let privateRandomNumber = Math.random();
        return {
            plus: function(a, b) {
                return a + b
            },
            subtract: function (a, b) {
                return a - b
            },
            multiply: function (a, b) {
                return a * b
            },
            divide: function (a, b) {
                return a / b
            },
        };
    }
    return {
        getInstance: function() {
            instance = init();
            return instance;
        }
    };
})();

export default Singleton