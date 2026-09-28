const express = require('express')

const adicaoRoutes        = require('./routes/adicao')
const subtracaoRoutes     = require('./routes/subtracao')
const multiplicacaoRoutes = require('./routes/multiplicacao')
const divisaoRoutes       = require('./routes/divisao')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/adicao',        adicaoRoutes)
app.use('/subtracao',     subtracaoRoutes)
app.use('/multiplicacao', multiplicacaoRoutes)
app.use('/divisao',       divisaoRoutes)


const server = app.listen(8080, () => console.log('server open @ 8080'))

setTimeout(() => {
    server.close(() => {
        console.log('server closed @ 8080')
        process.exit(0)
    })
}, 10000)