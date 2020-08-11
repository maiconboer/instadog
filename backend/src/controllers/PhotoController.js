const knex = require('../database/connection.js');
const { create } = require('./UserController.js');

module.exports = {
  /* lista todas as fotos, possui paginação 
   * possui filtro por usuário, possui paginação
   * envia a quantidade de registros para o header
   * */
  async index(request, response, next) {
    try {
      const { user_id, page = 1 } = request.query;
      const query = knex('photos')
      .limit(9)
      .offset((page - 1) * 9)

      const countObj = knex('photos').count();

     // filtro por user
      if(user_id) {
        query.where({ user_id })
        .join('users', 'users.id', '=', 'photos.user_id' )
        .select('photos.*', 'users.username')

        countObj
        .where({ user_id })
      }

      const [count] = await countObj
      response.header('X-Total-Count', count['count']);

      const results = await query;   
      return response.json(results);

    } catch (error) {
      next(error);
    }
  },

  async create(request, response, next) {
    try {

      const { image_url, description, user_id } = request.body
      
      await knex('photos').insert({
        image_url,
        description,
        user_id
      });

      return response.status(201).send();

    } catch (error) {
      next(error);
    }
  },
}