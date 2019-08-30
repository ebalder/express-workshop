
const express = require('express');
const guestbook = require('../controllers/guestbook');


module.exports = function(){

    const router = express.Router();

    router.route('/')
    .get(function(req, res){
        res.render('index', { title : 'Home' });
    });

    router.route('/firmas')
    .post(guestbook.postEntry)
    .get(guestbook.getEntries);

    router.route('/firmas/:name')
    .get(guestbook.getEntry);


    return router;

};
