module.exports = function (io) {

	const express = require('express');

	const router = express.Router();
	// Se puede usar solo una linea: const router = require('express').Router();
	const tweetBank = require('../tweetBank');

	router.get('/', function (req, res) {
	 	let tweets = tweetBank.list();
 		res.render( 'index', { tweets: tweets  } );
	});

	router.get('/user/:name', function(req, res){
		let name = req.params.name;
	
		let tweets = tweetBank.find({name: name})
		res.render('index', { tweets: tweets, showForm:true, input : name })
	})
	router.get( '/tweets/:id', function(req, res){
		let id = req.params.id;
		let tweets = tweetBank.find({id: Number(id)})
		res.render('index', { tweets: tweets  })
	});
	router.get( '/form', function(req, res){
	
		res.render('index', {showForm:true} )
	});
	router.post('/tweets', function(req, res){
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name, text);
		res.redirect('/');
	})

	return router;
	};











//module.exports = router;
