

const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => 
  knex.schema.createTable('likes', table => {

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
    
      table.primary(['user_id', 'photo_id'])

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).then(() => knex.raw(onUpdateTrigger('likes')))

exports.down = async knex => {
  return knex.schema.dropTable('likes');
};
