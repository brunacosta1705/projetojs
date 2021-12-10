const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()

server.use(morgan('dev'))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.json())

server.use(cors())

server.post('/cadastro', async(req, res) => {
    let novousuario = req.body
    let json_resposta = await insert(novousuario)
    res.json(json_resposta)
})

server.post('/login', async(req, res) => {
    let usuario = req.body
    let json_resposta = await select(usuario)
    res.json(json_resposta)
})

server.listen(5987, () => {
    console.log('PORT: 5987')
})

async function insert(user) {
    const db = require('./script/_database')
    try {

        await db.connect()

        let query_insert = `INSERT INTO USUARIO(NOME, SOBRENOME, CPF, TELEFONE, EMAIL, SENHA) VALUES($1, $2, $3, $4, $5, $6)`
        await db.query(query_insert, [user.nome, user.sobrenome, user.cpf, user.telefone, user.email, user.senha])


        console.log('inserido')
        return json = {
            "status": 1,
            "responseMessage": "Inserido"
        }
    } catch (error) {
        console.log(error)

        return json = {
            "status": 0,
            "responseMessage": error
        }
    }
}

async function select(user) {
    const db = require('../api/script/_database')

    try {
        await db.connect()

        let usuario = user.login
        let senha = user.senha

        let valida = await db.query(`SELECT * FROM USUARIO WHERE EMAIL = '${usuario}' AND SENHA = '${senha}'`)

        if (valida.rowCount == 1) {
            return json = {
                "status": 1,
                "responseMessage": "logado"
            }
        } else {
            return json = {
                "status": 2,
                "responseMessage": "usuario nao encontrado"
            }
        }
    } catch (error) {
        return json = {
            "status": 0,
            "responseMessage": erro
        }
    }
}