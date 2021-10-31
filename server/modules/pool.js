// require pg first
const pg = require('pg');

const pool = new pg.Pool({
    database: 'react_gallery', //change NAME to db name
    host: 'localhost',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
})
// export
module.exports = pool;