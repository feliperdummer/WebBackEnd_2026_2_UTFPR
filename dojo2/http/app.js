const operacoes = require("./operacoes")
const http = require('http')

const PORTA = 8080

const server = http.createServer((req, res) => {
    const http_verb = req.method
    const url = new URL(`http://localhost:${PORTA}${req.url}`)
    let statusCode = 0, body = ''
    switch (http_verb) {
        case 'GET':
            body = operacoes.get(url.pathname)
            statusCode = body==null ? 400 : 200
            break
        case 'POST':
            const oprnd1 = url.searchParams.get('a')
            const oprnd2 = url.searchParams.get('b')
            const result = operacoes.post(url.pathname, oprnd1, oprnd2)
            statusCode = result==null ? 400 : 200 
            body = result==null ? '"divisao por 0 invalida"' : result
            break
        default:
            statusCode = 400
            body = '"metodo HTTP nao suportado"'
            break
    }
    res.writeHead(statusCode, {'Content-type': 'application/json'})
    res.end(`{ "result": ${body} }`)
})

server.listen(PORTA, 'localhost', () => console.log(`server @ ${PORTA}`))

setTimeout(() => {
    server.close(() => console.log(`server closed @ ${PORTA}`))
}, 60000);