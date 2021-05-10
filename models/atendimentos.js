const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, response) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        // Criamos um objeto novo para ser evitar qualquer problema em outras partes do codigo

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                response.status(400).json(erro)
                // 400: Bad request. O Cliente mandou algum dado inválido
            } else {
                response.status(201).json(resultados)
                // O 'resultados' mostra o insertId entre outros
                // 201 created
            }
        })
    }
}

module.exports = new Atendimento