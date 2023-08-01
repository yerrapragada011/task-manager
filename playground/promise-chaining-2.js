require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('64c81acb57bfe809c717c590')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('64c81a72882eeb09a4c03e72')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
