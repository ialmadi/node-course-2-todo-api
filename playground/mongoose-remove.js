const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemove

// Todo.findByIddAndRemove

Todo.findOneAndRemove({_id: '586e81606b6f2e67c8c5031c'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('586e81606b6f2e67c8c5031c').then((todo) => {
    console.log(todo);
});