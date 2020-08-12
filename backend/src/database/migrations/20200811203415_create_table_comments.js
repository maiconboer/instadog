
const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => 
  knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.string('comment').notNullable();

    /* relationship 1:n
     * CASCADE, se remover user, suas fotos são removidas
     * */
    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.integer('photo_id')
      .references('photos.id')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).then(() => knex.raw(onUpdateTrigger('comments')))

exports.down = async knex => {
  return knex.schema.dropTable('comments');
};
