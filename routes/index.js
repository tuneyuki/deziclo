const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM docs');
  // console.log(rows);
  res.render('index', {data: rows});
});


module.exports = router;