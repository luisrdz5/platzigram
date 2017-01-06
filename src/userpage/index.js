var page = require('page');
var empty = require('empty-element');
/*var template = require('./template');*/
import template from './template'
var header = require('../header');
var title = require('title');


page('/:username',  header, loadUser , function(ctx, next){
	var main = document.getElementById('main-contaniner');
	title(`Platzigram - ${ctx.params.username} `);
	empty(main).appendChild(template(ctx.user));
})


page('/:username/:id',  header, loadUser , function(ctx, next){
	var main = document.getElementById('main-contaniner');
	title(`Platzigram - ${ctx.params.username} `);
	empty(main).appendChild(template(ctx.user));
	$(`#modal${ctx.params.id}`).openModal({
		complete : function () {
			page(`/${ctx.params.username}`);
		}
		});

	 //$(`#modal${ctx.params.id}`).modal('open');
})



async function loadUser (ctx, next){
	try {
		ctx.user = await fetch(`/api/user/${ctx.params.username}`).then( res => res.json())
		next()
	}
	catch (err){
		console.log(err)

	}
}