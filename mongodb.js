// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Andrew',
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Agasthya',
    //       age: 26,
    //     },
    //     {
    //       name: 'Sai',
    //       age: 55,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Clean the house',
    //       completed: true,
    //     },
    //     {
    //       description: 'Renew inspection',
    //       completed: false,
    //     },
    //     {
    //       description: 'Pot plants',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
