const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'projetojs',
    password: 'senha123',
    port: 5432,
})

const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projetojs',
    password: 'senha123',
    port: 5432,
})

module.exports = client