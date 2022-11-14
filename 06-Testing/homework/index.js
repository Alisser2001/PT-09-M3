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
    message: 'test',
  });
});

app.post('/sum', (req, res) => {
  const {a, b} = req.body
  res.send({
    result: a+b,
  });
});

const sumArray=(arr, num)=>{
  if(!Array.isArray(arr) || typeof num !== 'number'){
    throw new TypeError('arr')
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j=1; j<arr.length; j++){
      if (arr[i]+arr[j]==num){
        return true
      }
    }
  }
  return false
}

app.post('/sumArray', (req, res) => {
  const {array, num} = req.body;
  res.send({
    result: sumArray(array, num)
  })
  /*if (req.body.array && req.body.num){
    res.send({
      result: true,
    });
  } else {
    res.send({
      result: false,
    });
  }*/
});

app.post('/product', (req, res) => {
  const {a, b} = req.body
  res.send({
    result: a*b,
  });
});

app.post('/numString', (req, res) => {
  if (typeof req.body.string !== 'string' || req.body.string === ''){
    return res.status(400).send({error: '400 bad request'})
  }
  let size = req.body.string.length
  res.send({result: size})
});

app.post('/pluck', (req, res) => {
  if (!Array.isArray(req.body.array) || req.body.string === ''){
    return res.status(400).send({error: '400 bad request'})
  }
  let property = req.body.array.filter((obj) => obj.name === req.body.string)
  if (property.length === 0){
    return res.status(400).send({error: '400 bad request'})
  }
  res.send({result: property[0]})
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
