var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects.grid = false;
  	res.render('index', {'allprojects': projects, 'grid': false});
};

exports.viewGrid = function(req, res){
  	res.render('index', {'allprojects': projects, 'grid': true});
};