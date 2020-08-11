const knex = require('../database/connection');
const bcrypt = require('bcryptjs');
const newToken = require('../services/generateToken');

module.exports = {
  async authenticate(request, response, next) {
    try {
      const { email, password } = request.body;
      
      const user = await knex('users')
      .where({ email })

      if(user.length === 0) {
        return response.status(400).json({ error: 'Email not found!'})
      }

      if(!await bcrypt.compare(password, user[0].password)) {
        return response.status(400).json({ error: 'Invalid password!'}) 
      }

      // não mostrar password na listagem de usuário
      user[0].password = undefined 

      const { id, username } = user[0];

      return response.status(200).json({ 
        user, 
        token: newToken.generateToken({ id, username }) 
      });

    } catch (error) {
      next(error);
    }
  },
}