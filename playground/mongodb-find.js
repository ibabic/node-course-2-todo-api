//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MangoDB server');
    }
    console.log('Connected to MongodDB server');

    var db = client.db('TodoApp');

   /* db.collection('Todos').find({
        _id: new ObjectID("5bfe70117611c10c8c69d3f5")
    })  .toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })*/

    /*db.collection('Todos'). find({
    })  .count().then((count) => {
        console.log(`Todos ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })*/

    db.collection('Users').find({
        name: "Ivan"
    })  .toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })
   
    //client.close();
});