const http = require("http")   // declara a constante para requerir o modulo 'http' do NodeJS
const { type } = require("os")

const hostname = "localhost"   // localhost como máscar do IP local onde o servidor ficará hospedado
const port = 3333              // porta de acesso ao servidor

const server = http.createServer((req, res) => {    // cria um servidor que responder para a chamada dele com um cabeçalho, com a informação do tipo de conteúdo, e um corpo com o conteúdo ("hello world")
    res.setHeader("Content-type", "text/plain")
    res.end("hello world")
})

server.listen(port, hostname, () => {
    console.log("RUNNING SERVER!")
})
