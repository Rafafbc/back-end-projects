const express = require('express');
const fs = require('fs');
const { console } = require('inspector');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Rotas para recebimento de dados (via POST)
app.post('/dados', (req, res) => {
    const dados = req.body;

    // Carrega  o arquivo existente ou cria umarray vazio
    let dadosSalvos = [];
    const caminhoArquivo = path.joint(__dirname + 'dados.json');

    // Tenta ler o arquivo JSON para adicionar corretamente os novos dados
    try {
        const dadosExistentes = fs.readFileSync(caminhoArquivo, 'utf-8');
        dadosSalvos = JSON.parse(dadosExistentes);
    } catch (error) {
        console.log("Arquivo NÃO encontrado. Criando um novo...");
    }

    // Adiciona os novos dados recebidos ao array
    dadosSalvos.push(dados);

    // Salva o array atualizado no arquivo JSON
    fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosSalvos, null, 2));

    res.send('Dados recebidos e salvos com sucesso!');
});

// Rota para visualizar os dados
app.get('/dados', (req, res) => {
    const caminhoArquivo = path.join(__dirname + 'dados.json');

    try {
        const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
        res.send(JSON.parse(dados));
    } catch (error) {
        res.send('Nenhum dado encontrado!');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});