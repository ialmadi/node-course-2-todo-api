//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({ 
//     _id: new ObjectID('5851a017db7495c5082d076a')
// }, {
//     $set: {
//         completed: true
//     },
// }, {
//         returnOirginal: false
//     }).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({ 
    _id: new ObjectID('585190f225bd63166b63f4b9')
}, {
    $set: {
        name: 'Joe'
    }, $inc: {
        age: 1
    },
}, {
        returnOriginal: false
    }).then((result) => {
    console.log(result);
});

//db.close();

});