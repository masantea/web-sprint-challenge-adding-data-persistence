const db = require("../data/config")

function getResources() {
    return db("resources")
}

function addResource(resource) {
    return db("resources")
        .insert(resource)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    getResources,
    addResource,
}