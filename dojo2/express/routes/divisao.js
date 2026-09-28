const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    if (req.body===undefined) {
        return res.status(400).json({
            erro: 'dois operandos a e b necessários '
        })
    }
    const { a = 0, b = 1 } = req.body
    if (b == 0) {
        return res.status(400).json({
            erro: 'o divisor deve ter valor != 0'
        })
    }
    res.json({
        resultado: a/b
    })
})

router.get('/', (req, res) => {
    res.json({
        mensagem: 'Você está na rota divisão'
    })
})

module.exports = router