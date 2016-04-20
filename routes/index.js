
var express = require('express');

module.exports = function(){

    var router = express.Router();

    router.route('/')
    .get(function(req, res){
        res.render('index', { title : 'Home' });
    })
    .post(function(req, res){
        var name = req.body.name;
        var lastname = req.body.lastname;

        res.send({
            message: 'Hello ' + name + ' ' + lastname
        });

    });

    return router;

};
