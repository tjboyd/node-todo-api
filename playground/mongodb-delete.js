//const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo database server.')
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // Delete Users
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('599d6bfeb5626b373df54e27')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
