const express = require('express');
const route = express.Router();

const axios = require('axios');
const taskdb = require('./../model/model');

route.get('/', (req, res) => {
  axios
    .get('http://localhost:8080/api/tasks')
    .then(function (response) {
      res.render('index', { tasks: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;

route.post('/api/tasks', (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be emtpy!' });
    return;
  }

  const task = new taskdb({
    task: req.body.task,
  });

  task
    .save(task)
    .then((data) => {
      // res.send(data);
      res.redirect('/');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating a create operation',
      });
    });
});

route.get('/api/tasks', (req, res) => {
  taskdb
    .find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating a create operation',
      });
    });
});
