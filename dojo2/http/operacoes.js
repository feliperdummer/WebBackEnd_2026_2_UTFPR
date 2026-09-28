module.exports = {
    post_adicao(a,b) {
        a = Number.parseInt(a)
        b = Number.parseInt(b)
        return a + b
    },
    get_adicao() { return 'voce esta na rota adicao' },

    post_sub(a,b) {
        a = Number.parseInt(a)
        b = Number.parseInt(b)
        return a - b
    },
    get_sub() { return 'voce esta na rota subtracao' },

    post_mult(a, b) {
        a = Number.parseInt(a)
        b = Number.parseInt(b)
        return a * b
    },
    get_mult() { return 'voce esta na rota multiplicacao' },

    post_div(a, b) {
        a = Number.parseInt(a)
        b = Number.parseInt(b)
        return b!=0 ? a / b : null
    },
    get_div() { return 'voce esta na rota divisao' },

    get(op) {
        switch (op) {
            case '/adicao':
                return this.get_adicao()
            case '/subtracao':
                return this.get_sub()
            case '/multiplicacao':
                return this.get_mult()
            case '/divisao':
                return this.get_div()
            default:
                return null
        }
    },

    post(oprt, ...oprnds) {
        switch (oprt) {
            case '/adicao':
                return this.post_adicao(oprnds[0], oprnds[1])
            case '/subtracao':
                return this.post_sub(oprnds[0], oprnds[1])
            case '/multiplicacao':
                return this.post_mult(oprnds[0], oprnds[1])
            case '/divisao':
                return this.post_div(oprnds[0], oprnds[1])
        }
    }
}