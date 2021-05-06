module.exports = app => {
    app.get('/atendimentos', (request, response) => response.send('Você está na rota de atendimentos e realizando um GET'))
    
    app.post('/atendimentos', (request, response) => {
        console.log(request.body)
        response.send('Você está na rota de atendimentos e realizando um POST')
    })
}
// Estamos exportando uma funcao que recebe app como parametro