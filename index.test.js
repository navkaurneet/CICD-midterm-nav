// index.test.js
const request = require('supertest');
const app = require('./index');

test('GET / should return Hello World', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toBe('Hello World from Node.js App!');
});

