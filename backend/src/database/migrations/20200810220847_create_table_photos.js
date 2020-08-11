
exports.up = knex => {
  return knex.schema.createTable('photos', table => {
    table.increments('id').primary();
    table.string('image_url').notNullable();
    table.string('description');

    /* relationship 1:n
     * CASCADE, se remover user, suas fotos são removidas
     * */
    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = knex => {
  return knex.schema.dropTable('photos');
};
