const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res)=> {
  try{
    let tables = await db.query('SELECT * FROM Tables;');
    console.log(tables.rows);
    res.render('tables', { data: tables.rows });
  } catch(e) {
    console.error(e.stack);
  }
});

router.get('/:table', async(req, res) => {
  let tbl = req.params.table;
  console.log(tbl);
  try{
    let result = await db.query('SELECT * FROM ' + tbl + ';');
    console.log(result.rows);
    res.render('table', { tableName: tbl, array: result.rows });
  } catch(e) {
    console.error(e.stack);
  }
});

router.get('/:table/:key', async(req, res)=> {
  console.log(req.params.table);
  console.log(req.params.key);
  try{
    let queryString = 'SELECT * FROM ' + req.params.table + ' WHERE id = ' + req.params.key + ';';
    // console.log(queryString);
    let result = await db.query(queryString);
    console.log(result.rows);
    res.json(result.rows[0]);
  } catch(e) {
    console.error(e.stack);
  }
})



module.exports = router;