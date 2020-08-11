const { onUpdateTrigger } = require('../../../knexfile');

const avatarDefault = 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff';

exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('avatar').defaultTo(avatarDefault);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).then(() => knex.raw(onUpdateTrigger('users')))
};

exports.down = knex => {
  return knex.schema.dropTable('users');
};
