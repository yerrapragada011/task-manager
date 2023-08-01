require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('64c81acb57bfe809c717c590')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
