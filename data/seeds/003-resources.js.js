exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "laptop", description: "to clone assignment" },
    { name: "monitor", description: "to connect to laptop" },
    { name: "vacuum", description: "to vacuum" },
    { name: "swiffer", description: "to dust" },
    { name: "phone", description: "to call dealership" },
    { name: "calendar", description: "to set up appointment" },
	])
}