exports.seed = async function(knex) {
	await knex("task").insert([   
    { project_id: 1, description: "clone project", notes: "", completed: true },
    { project_id: 1, description: "meet mvp", notes: "apply for skill based jobs after", completed: true },
    { project_id: 2, description: "lay bed", notes: "mustang", completed: true },
    { project_id: 2, description: "pick up stuff from the floor", notes: "", completed: false },
    { project_id: 3, description: "call dealership", notes: "", completed: false },
    { project_id: 3, description: "set up appointment", notes: "you can do this!", completed: false },    
	])
}