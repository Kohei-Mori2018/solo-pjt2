// var express = require('express');
// var router = express.Router();
const path = require("path");
const knexfile = require("../db/index.js");
const knex = require("knex")(knexfile);
const express = require('express');
const router = express.Router();
const trainingGetter = require("../src/traininggetter")
const app = express();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/training", async (req, res) => {
  const allData = await trainingGetter.getAll()
  console.log(allData);
  res.status(200).send(allData);
})

router.post("/training2", async (req, res) => {
  console.log(req.body)
  await trainingGetter.insertTraining(req.body.title, req.body.day, req.body.id2)
  const allData = await trainingGetter.getAll()
  res.status(201).send(allData)
})

module.exports = router;
