const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5c013c9dbfb8ab19782b0633'}).then((todo) => {

});

Todo.findByIdAndRemove('5c013c9dbfb8ab19782b0633').then((todo) => {
    console.log(todo);
});