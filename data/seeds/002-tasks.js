exports.seed = async function(knex) {
	await knex("tasks").then(function () {
    return knex('tasks').insert([   
    { project_id: 1, description: "clone project", notes: "", completed: true },
    { project_id: 1, description: "meet mvp", notes: "complete all mvps", completed: true },
    { project_id: 2, description: "lay bed", notes: "lay bed with clean sheets", completed: true },
    { project_id: 2, description: "pick up stuff from the floor", notes: "", completed: false },
    { project_id: 3, description: "call dealership", notes: "", completed: false },
    { project_id: 3, description: "set up appointment", notes: "grab caledar and block out dates", completed: false },    
	])
})
}