const db = require("../data/config")

function getProjects() {
    return db("project")
}

function addProject(project) {
    return db("project")
        .insert(project)
        .then(id => {
            return findById(id[0]);
        });
      }

module.exports = {
    getProjects,
    addProject,
}