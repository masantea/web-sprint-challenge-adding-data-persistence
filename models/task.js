const db = require("../data/config")

function getTasks() {
    return db('tasks as t')
      .join('project as p', 'p.id', 't.project_id')
      .select(
        'p.name as project name',
        'p.description as project description',
        't.description as task',
        't.notes as task notes'
      );
  }

  function findById(id) {
    return db("task")
        .where({id})
        .first();
}

function addTask(task) {
    return db("task")
        .insert(task)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    getTasks,
    findById,
    addTask,
}