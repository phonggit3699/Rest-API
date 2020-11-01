const express = require('express');
const todoModel = require('../models/todos');


const routerTodo = express.Router();

routerTodo.get('/', (req, res) => {
    res.render('./todos');
});

routerTodo.post('/', (req, res) => {
    const post = new todoModel({
        todo: req.body.todo
    });

    post.save()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}))
});

module.exports = routerTodo;