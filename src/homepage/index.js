var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');


page('/', function(ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-contaniner');

	var pictures = [
		{
			user: {
			username: 'lrodriguez',
			avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true
		},
		{
			user: {
			username: 'lrodriguez',
			avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG'
			},
			url: 'office.jpg',
			likes: 4,
			liked: true
		}

	];

	empty(main).appendChild(template(pictures));
});




