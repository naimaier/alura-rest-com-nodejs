const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (request, response) => response.send('Você está na rota de atendimentos e realizando um GET'))
    
    app.post('/atendimentos', (request, response) => {
        const atendimento = request.body

        Atendimento.adiciona(atendimento)
        
        response.send('POST atendimento')
    })
}
// Estamos exportando uma funcao que recebe app como parametro