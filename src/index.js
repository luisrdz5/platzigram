var page = require('page');

var main = document.getElementById('main-contaniner');

page('/', function(ctx, next){
	main.innerHTML = 'Home';
})
page('/signup', function(ctx, next){
	main.innerHTML = 'signup';
})
page();