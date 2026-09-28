const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    if (req.body===undefined) {
        return res.status(400).json({
            erro: 'dois operandos a e b necessários '
        })
    }
    const { a = 0, b = 0 } = req.body
    res.json({
        resultado: a-b
    })
})

router.get('/', (req, res) => {
    res.json({
        mensagem: 'Você está na rota subtração'
    })
})

module.exports = router