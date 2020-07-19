const express = require('express');

const server = express();
server.use(express.json());
const gekks = ['jr', 'ze', 'wan', 'dim'];
server.use((req, res, next) => {
  console.time('Request');
  console.log('Método: ${req.method}; URL: ${req.url};');

  next();
  console.log('Finalizou');
  console.timeEnd('Request');
});