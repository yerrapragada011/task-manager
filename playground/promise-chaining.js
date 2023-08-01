require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('64c7ff8f18bf1f035b63831a', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
