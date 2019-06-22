const express = require("express");
const router = express.Router();
const db = require('../db');

router.get("/", async(req, res) => {
  res.render('input');
});

router.post("/", async(req, res) => {
  console.log(req.body);
  // res.json(req.body);  
  try{
    await db.query('BEGIN');
    await db.query('INSERT INTO docs(title, email, selection, doc) VALUES($1, $2, $3, $4)', [req.body.title, req.body.email, req.body.selection, req.body.doc]);
    await db.query('COMMIT');
  } catch(e) {
    await db.query('ROLLBACK');
    console.error(e.stack);
  } finally {
    res.redirect('/');
  }
});


module.exports = router;
