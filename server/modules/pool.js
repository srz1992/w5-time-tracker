const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'time_tracker',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 10000
}

const pool = new Pool(config)

pool.on('connect', (client)=>{
    console.log('connected to database:', config.database);
    
})

pool.on('error', (err, client)=>{
    console.log('error connecting to database from client:', client, '. error:', err);
    process.exit(-1);
})

module.exports = pool;