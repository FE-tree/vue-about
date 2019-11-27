
class Singleton {
    constructor(a, b) {
        this.instance = null
        this.a = a
        this.b = b
        this.fn = {
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
        }

        this.init()
    }
    init() {
        console.log('init...')
    }
    static toSting(a, b) {
        return a + '' + b
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(this.a, this.b)
        }
        return Singleton.instance
    }
}

export default Singleton