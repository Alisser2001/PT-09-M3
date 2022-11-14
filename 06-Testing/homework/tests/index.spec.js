const session = require('supertest-session');
const app = require('../index.js'); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe('Test de APIS', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    it('responds with and object with message `hola`', () =>
        agent.get('/').then((res) => {
          expect(res.body.message).toEqual('hola');
        }));
  });

  describe('GET /test', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with and object with message `test`', () =>
      agent.get('/test').then((res) => {
        expect(res.body.message).toEqual('hola');
      }));
  });

  describe('POST /sum', () => {
    it('responds with 200', () => agent.post('/sum').expect(200));
    it('responds with the sum of 2 and 3', () =>
      agent.post('/sum')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(5);
        })
    );
  });

  describe('POST /producto', () => {
    it('responds with 200', () => agent.post('/product').expect(200));
    it('responds with the product of 2 and 3', () =>
      agent.post('/product')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(6);
        })
    );
  });

  describe('POST /sumArray', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with and object with message `test`', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 13})
        .then((res) => {
          expect(res.body.result).toEqual(true);
      }));
  });

  describe('POST /numString', () => {
    it('responds with 200', () => agent.post('/numString').expect(200));
    it('responds with the num of chars', () =>
      agent.post('/numString')
        .send({string: 'hola'})
        .then((res) => {
          expect(res.body.result).toEqual(4);
        })
    );
    it('responds with status 400 bad request', () =>
      agent.post('/numString')
        .send({string: ''})
        .then((res) => {
          expect(res.body.error).toEqual('400 bad request');
        })
    );
    it('responds with status 400 bad request', () =>
      agent.post('/numString')
        .send({string: 4})
        .then((res) => {
          expect(res.body.error).toEqual('400 bad request');
        })
    );
  });

  describe('POST /pluck', () => {
    it('responds with 200', () => agent.post('/pluck').expect(200));
    let carros = [
      {
        "color": "morado",
        "name": "minivan",
        "tipo": "minivan",
        "capacidad": 7
      },
      {
        "color": "rojo",
        "name": "ford",
        "tipo": "camioneta",
        "capacidad": 5
      }
    ]
    it('responds with the num of chars', () =>
      agent.post('/pluck')
        .send({array: carros, string: 'minivan'})
        .then((res) => {
          expect(res.body.result).toEqual(carros[0]);
        })
    );
    it('responds with status 400 bad request typeof array', () =>
      agent.post('/pluck')
        .send({array: 'hola', string: 'no'})
        .then((res) => {
          expect(res.body.error).toEqual('400 bad request');
        })
    );
    it('responds with status 400 bad request string empty', () =>
      agent.post('/pluck')
        .send({array: [], string: ''})
        .then((res) => {
          expect(res.body.error).toEqual('400 bad request');
        })
    );
  });
});

