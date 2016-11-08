var express = require('express');

var app= express();


app.get('/', function (req, res) {
	res.send('Hola Mundo!');
})

app.listen(3333, function (err) {
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Escuchando en el puerto 3333');

})