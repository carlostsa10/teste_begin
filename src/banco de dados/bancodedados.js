const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "doacaolivros",
    password: "tavares45",
    port: 5432,
});

const query = (text, param) => {
    return pool.query(text, param)
}

module.exports = {
    query,
}
