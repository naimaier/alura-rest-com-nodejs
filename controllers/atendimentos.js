module.exports = app => {
    app.get('/atendimentos', (request, response) => response.send('Servidor rodando!!'))
}
// Estamos exportando uma funcao que recebe app como parametro