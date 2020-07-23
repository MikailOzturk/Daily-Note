var express = require('express');

var router = express.Router();

var ctrlLogin= require('../controller/loginController');

router.get('/',ctrlLogin.indexGet);
router.post('/',ctrlLogin.indexPost);
router.get('/signup',ctrlLogin.signupGet);
router.post('/signup',ctrlLogin.signupPost);
router.get('/notekle',ctrlLogin.indexEkleGet);
router.post('/notekle',ctrlLogin.indexEklePost);
router.get('/note',ctrlLogin.indexNoteGet);
router.post('/note',ctrlLogin.indexNotePost);

module.exports = router;
