const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'me_gusta',
    allowExitOnIdle: true
});

module.exports = pool;