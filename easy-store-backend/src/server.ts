const express = require('express');
const {Express} = require('express');

const router = express();

const loginController = require('./controller/loginController');

router.use(express.urlencoded({extended:false}));

router.use(express.json());

router.use("/",loginController);

module.exports = express;