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

function checkcrudExist(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'crud name is requirid'
    });

  }
  return next();
}

function checkcrudInArray(req, res, next) {
  const crud = cruds[req.params.index];
  if (!crud) {
    return res.status(400).json({
      error: 'crud does not exists'
    });
  }
  req.crud = crud;
  return next();
}
server.get('/cruds', (req, res) => {
  return res.json(req.crud) /
})
server.post('/cruds', checkcrudExist, (req, res) => {
  const {
    name
  } = req.body;
  cruds.push(name);
  return res.json(cruds);
})