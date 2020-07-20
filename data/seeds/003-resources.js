exports.seed = async function(knex) {
	await knex("resources").insert([   
    { project_id:1, name: "laptop", description: "to clone assignment" },
    { project_id:1, name: "monitor", description: "to connect to laptop" },
    { project_id:2, name: "vacuum", description: "to vacuum" },
    { project_id:2, name: "swiffer", description: "to dust" },
    { project_id:3, name: "phone", description: "to call dealership" },
    { project_id:3, name: "calendar", description: "to set up appointment" },
	])
}