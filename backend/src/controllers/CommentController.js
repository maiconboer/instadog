const knex = require('../database/connection.js');

module.exports = {
  async index(request, response, next) {

    const {id} = request.params

    try {
      const results = await knex('comments')
      .where('photo_id', id)

      if(results.length === 0) {
        return response.status(400).send('There are no comments!'); 
      }

      return response.status(200).json(results)
    } catch (error) {
      next(error);
    }
  },

  async create(request, response, next) {
    
    const {id} = request.params
    const { comment, user_id } = request.body

    try {

      const results = await knex('comments').insert({
        comment,
        user_id,
        photo_id: id
      })
      
      return response.status(201).json(results)

    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    try {
      
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      
    } catch (error) {
      next(error);
    }
  },
}