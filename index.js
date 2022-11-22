var express = require("express");
var app = express();
var port = 3000;

app.get(
  '/',
  (req, res) => {
    res.send('Hola mundo');
  }
);

app.listen(
  port,
  () => {
    console.log('La aplicación está alojada en el puerto: '+ port);
  }
);
