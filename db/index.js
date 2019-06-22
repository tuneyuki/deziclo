const { Pool } = require('pg')

const pool = new Pool({
  user: 'hbqcqxhd',
  host: 'arjuna.db.elephantsql.com',
  database: 'hbqcqxhd',
  password: '66j0cM1c_nfFovDEkLVnITDUZGDchM71',
  port: 5432
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}