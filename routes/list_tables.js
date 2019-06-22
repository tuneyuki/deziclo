const express = require('express');
const router = express.Router();
const db = require('../db');


// router.get('/', async(req, res) => {
//   try {
//     let tables = await db.query('SELECT relname as TABLE_NAME FROM pg_stat_user_tables;');
//     console.log(tables.rows);
//     res.render('list_tables', { data: tables.rows });
//   } catch(e) {
//     console.error(e.stack);
//   }
// });

router.get('/', async(req, res)=> {
  try{
    let tables = await db.query('SELECT * FROM Tables;');
    console.log(tables.rows);
    res.render('list_tables', { data: tables.rows });
  } catch(e) {
    console.error(e.stack);
  }
});

module.exports = router;