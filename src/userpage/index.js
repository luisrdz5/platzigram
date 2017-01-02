var page = require('page');
var empty = require('empty-element');
var template = require('../header');
var template = require('./template');
var title = require('title');


page('/:username', header , function(ctx, next){
	var main = document.getElementById('main-contaniner');
	title(`Platzigram - ${ctx.params.username} `);
	empty(main).appendChild(template(ctx.params.username));
});