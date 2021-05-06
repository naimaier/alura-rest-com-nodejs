const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

app.get('/', (request, response) => response.send('Servidor rodando!'))