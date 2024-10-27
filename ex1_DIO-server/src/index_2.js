const express = require("express")  // declara a constante para importar a lib 'express' do NodeJS
const path = require("path")        // importa o módulo 'path', para se trabalhar com caminhos

const app = express()               // puxando uma instância do express
const router = express.Router()     // declara o controlador de rotas do Express

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})
router.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)     // faz com que a aplicação express use as rotas

app.listen(3333, () => {    	        //// faz com que a aplicação ouça as requisições
    console.log("RUNNING SERVER!!")
})