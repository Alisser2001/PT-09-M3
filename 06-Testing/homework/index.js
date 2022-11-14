const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.post('/sum', (req, res) => {
  res.send({
    result: req.body.a + req.body.b,
  });
});

app.post('/sumArray', (req, res) => {
  if (req.body.array && req.body.num){
    res.send({
      result: true,
    });
  } else {
    res.send({
      result: false,
    });
  }
});

app.post('/product', (req, res) => {
  res.send({
    result: req.body.a * req.body.b,
  });
});

app.post('/numString', (req, res) => {
  if (typeof req.body.string !== 'string' || req.body.string === ''){
    return res.status(400).send({error: '400 bad request'})
  }
  let size = req.body.string.length
  res.status(200).send({result: size})
});

app.post('/pluck', (req, res) => {
  if (!Array.isArray(req.body.array) || req.body.string === ''){
    return res.status(400).send({error: '400 bad request'})
  }
  let property = req.body.array.filter((obj) => obj.name === req.body.string)
  res.status(200).send({result: property[0]})
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
