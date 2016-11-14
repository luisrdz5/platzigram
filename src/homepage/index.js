var page = require('page');

page('/', function(ctx, next){
	var main = document.getElementById('main-contaniner');
	main.innerHTML = '<a href=/signup> signup</a>';
});

