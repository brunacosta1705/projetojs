const db = require('./_database')

async function createTable() {
    try {
        await db.connect()

        await db.query(`CREATE TABLE usuario(
        NOME VARCHAR(50) NOT NULL,
        SOBRENOME VARCHAR(50) NOT NULL,
        CPF VARCHAR(15) PRIMARY KEY,
        TELEFONE VARCHAR(20) NOT NULL,
        EMAIL VARCHAR(200) UNIQUE NOT NULL,
        SENHA VARCHAR(15) NOT NULL
    )`)

        await db.end()

        console.log(`tabela criada com sucesso`)
    } catch (error) {
        await db.end()
        console.log(`${error}`)
    }
}


createTable()