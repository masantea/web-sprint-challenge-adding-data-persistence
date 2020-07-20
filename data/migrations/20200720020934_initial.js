exports.up = async function (knex) {
  await knex.schema.createTable('project', tbl => {
    tbl.increments("id"),
      tbl.text('name').notNull(),
      tbl.text('description'),
      tbl.boolean('completed').defaultTo(false);
  });
  await knex.schema.createTable("tasks", tbl => {
    tbl.increments("id")
    tbl
        .integer("project_id")
        .references("id")
        .inTable("project")
        .notNull()
    tbl.text("description").notNull()
    tbl.text("notes")
    tbl.bool("completed").defaultTo(false)
})    

  await knex.schema.createTable("resources", tbl => {
    tbl.increments("id")
    tbl
        .integer("project_id")
        .references("id")
        .inTable("project")
        .notNull()
    tbl.text("name").notNull()
    tbl.text("description")
})
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")    
  await knex.schema.dropTableIfExists("project")    
}
