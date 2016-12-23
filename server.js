var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');


var app= express();

app.set('view engine','pug');

app.use(express.static('public'))
app.get('/', function (req, res) {
	res.render('index',{ title : 'Platzigram'});
})
app.get('/signup', function (req, res) {
	res.render('index',{ title : 'Platzigram - SignUp'});
})
app.get('/signin', function (req, res) {
	res.render('index',{ title : 'Platzigram - SignIn'});
})

app.get('/api/pictures', function (req , res) {
	var pictures = [
		{
			user: {
			username: 'lrodriguez',
			avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().getTime()
		},
		{
			user: {
			username: 'lrodriguez01',
			avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		},
		{
			user: {
			username: 'lrodriguez01',
			avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}

	];
	setTimeout(function () {
		res.send(pictures);
	}, 2000)
})

app.post('/api/pictures', function (req, res){
	upload(req, res, function (err){
		if (err){
			return res.send(500, "Error uploading File");
		}
		res.send('File uploaded ');
	})
})

app.listen(3333, function (err) {
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Escuchando en el puerto 3333');

})