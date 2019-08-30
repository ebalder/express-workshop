
const express = require('express');
const guestbook = require('../controllers/guestbook');


module.exports = function(){

    const router = express.Router();

    router.route('/')
    .get(function(req, res){
        res.render('index', { title : 'Home' });
    });
    return router;

};
