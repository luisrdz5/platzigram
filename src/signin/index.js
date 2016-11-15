var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');


page('/signin', function(ctx, next){
	title('Platzigram - SignIn');
	var main = document.getElementById('main-contaniner');
	empty(main).appendChild(template);
});