const knex = require('../database/connection.js');

module.exports = {

  async index(request, response, next) {
    try {
      const results = await knex('users');
      return response.json(results);

    } catch (error) {
      next(error);
    }
  },

  async create(request, response, next) {
    try {
      const { username, email, password } = request.body;

      const result = await knex('users').insert({
        username,
        email,
        password
      })

      return response.status(201).send()
    } catch (error) {
      next(error);
    }
  },

  async show(request, response, next) {
    try {
      
      const { id } = request.params;

      const results = await knex('users')
      .where({ id })

      return response.json(results);

    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    try {
      
      const { username, password } = request.body;
      const { id } = request.params;

      await knex('users')
      .update({ username, password })
      .where({ id });

      return response.status(200).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      
      const { id } = request.params;

      await knex('users')
      .where({ id })
      .del();

      return response.send();

    } catch (error) {
      next(error);
    }
  },
}