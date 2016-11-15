var page = require('page');
var title = require('title');

page('/', function(ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-contaniner');
	main.innerHTML = '<a href=/signup> signup</a>';
});

