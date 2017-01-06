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
	setTimeout(function enviarFotos() {
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

app.get('/api/user/:username', function (req, res) {
	const user = { 
		username: 'lrodriguez',
		avatar: 'https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG', 
		pictures: [
			{
				id: 1,
				src: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15403477_1331654340220502_2317025192792031232_n.jpg?ig_cache_key=MTQwNDQ4MTg0NTE0NzY5MDg1Mw%3D%3D.2',
				likes: 3
			},
						{
				id: 2,
				src: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15306689_192912811169025_9077016903074971648_n.jpg?ig_cache_key=MTM5NjUxMDMwNTkxMTA5NjM2MQ%3D%3D.2',
				likes: 31
			},
						{
				id: 3,
				src: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14723096_342837006068111_33131820102975488_n.jpg?ig_cache_key=MTM3NDc3MDcxNjUyMzcwMzA0Ng%3D%3D.2',
				likes: 60
			},
						{
				id: 4,
				src: 'https://scontent.cdninstagram.com/t51.2885-15/e35/c257.0.565.565/14718252_204172843344196_8990051726660730880_n.jpg?ig_cache_key=MTM2NjkzNzcwMDk1NTA1MzA2Nw%3D%3D.2.c',
				likes: 0
			},
						{
				id: 5,
				src: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14711974_1338581482819043_3509911569951621120_n.jpg?ig_cache_key=MTM2Mzg5MDkwNjkyMjU4MTM0MA%3D%3D.',
				likes: 300
			},
						{
				id: 6,
				src: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12728700_1583417138649241_1470243181_n.jpg?ig_cache_key=MTE4NTY1MjgxNDk3NjM0NTkwMA%3D%3D.2',
				likes: 99
			}
		]

	}
	
	res.send(user);

})


app.get('/:username', function (req, res) {
	res.render('index', { title: `Platzigram - ${req.params.username}`})

})
app.get('/:username/:id', function (req, res) {
	res.render('index', { title: `Platzigram - ${req.params.username}`})

})
app.listen(3333, function (err) {
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Escuchando en el puerto 3333');

})