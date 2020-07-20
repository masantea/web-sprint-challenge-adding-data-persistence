
exports.seed = async function(knex) {
	await knex("project").insert([   
		{ name: "Complete Sprint", description: "Must be able to complete Sprint", completed: true },
    { name: "Clean up room", description: "Must make sure room is spotless", completed: true },
    { name: "Service car", description: "Must make an appointment to get car serviced", completed: false },
	])
}