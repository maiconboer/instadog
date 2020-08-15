const knex = require('../database/connection.js');
const bcrypt = require('bcryptjs');
const newToken = require('../services/generateToken');

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

      if(username === '' || email === '' || password === '') {
        return response.status(422).json({ error: 'Please fill in all fields!' })
      }

      const userExists = await knex('users')
      .where({ username })

      const emailExists = await knex('users')
      .where({ email })

      if(userExists.length > 0) {
        return response.status(400).json({ error: 'User already exists!' })
      }

      if(emailExists.length > 0) {
        return response.status(400).json({ error: 'Email already exists!' })
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const result = await knex('users').insert({
        username,
        email,
        password: hashPassword
      }).returning('*')
 
      const user = result[0]

      return response.status(201).json({ 
        user, 
        token: newToken.generateToken({ id: user.id }) 
      });

    } catch (error) {
      next(error);
    }
  },

  async show(request, response, next) {
    try {
      
      const { id } = request.params;

      const results = await knex('users')
      .where({ id })

      // não retornar senha ao front-end
      results[0].password = undefined
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