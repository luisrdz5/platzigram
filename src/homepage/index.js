var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');
var webcam = require('webcamjs');


page('/', header, loading, asyncload , function (ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-contaniner');
	empty(main).appendChild(template(ctx.pictures));

	const picturePreview = $('#picture-preview');
	const camaraInput = $('#camara-input');
	const cancelPicture = $('#cancelPicture');
	const shootButton = $('#shoot');
	const uploadButton = $('#uploadButton');

	function reset(){
		picturePreview.removeClass('hide');
	    cancelPicture.removeClass('hide');
	    uploadButton.removeClass('hide');
	    shootButton.addClass('hide');
	    camaraInput.addClass('hide');
	}
	cancelPicture.click(reset);


	$('.modal-trigger').leanModal({
		ready: function () {
			Webcam.attach('#camara-input');
			shootButton.click((ev) => {
			    Webcam.snap( function(data_uri) {
	        		picturePreview.HTML('<img src="'+data_uri+'"/>');
	        		picturePreview.removeClass('hide');
	        		cancelPicture.removeClass('hide');
	        		uploadButton.removeClass('hide');
	        		shootButton.addClass('hide');
	        		camaraInput.addClass('hide');
	        		uploadButton.off('click');
	        		uploadButton.click(() => {
	        			const pic = {
	        				url:data_uri,
	        				likes: 0,
	        				liked:false,
	        				createdAt: +new Date(),
	        				user: {
	        					username: 'lrodriguez01',
								avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG'
	        				}
	        			}
	        			$('#picture-cards').prepend(picture(pic));
	        			reset();
	        			$('#modalCamara').closeModal();
	        		})
    			}); 
			})
		},
		complete: function () {
			Webcam.reset();	
			reset();
		}
	})
});

function loading(ctx, next){
	var el = document.createElement('div');
	el.classList.add('loader');
	document.getElementById('main-contaniner').appendChild(el);
	next();
}

async function asyncload(ctx, next){
	try {
		var pictures = await fetch('/api/pictures').then(res => res.json());
		ctx.pictures = pictures;
		next();
	}
	catch (err){
		return console.log(err);
	}
}


function loadPicturesFetch(ctx, next){
	fetch('api/pictures')
		.then(function(res) {
			return res.json();
		})
		.then( function (pictures) {
			ctx.pictures = pictures;
			next();
		})
		.catch(function (err) {
			console.log(err);
		})
}

function loadPictures(ctx, next){
	request
		.get('/api/pictures')
		.end(function (err,res) {
			if (err) return console.log(err);
			ctx.pictures = res.body;
			next();
		})
}
function loadPicturesAxios(ctx, next){
	axios
		.get('/api/pictures')
		.then(function (res) {
			ctx.pictures = res.data;	
			next();		
		})
		.catch(function (err){
			console.log(err);
		})
}

