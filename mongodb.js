// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: new ObjectID('64c2ca691d4226e652d81890') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 26 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users')
    //     .find({ age: 26 })
    //     .count((error, count) => {
    //     console.log(count);
    // });

    db.collection('tasks').findOne(
      { _id: new ObjectID('64c2d3803df9e1e968a401fd') },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
