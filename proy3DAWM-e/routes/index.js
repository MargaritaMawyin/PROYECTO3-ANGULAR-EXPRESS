var express = require('express');
var router = express.Router();


const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

const { Sequelize, Op } = require('sequelize');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Proyecto de DAWM por Margarita Mawyin' 
});
});

module.exports = router;
