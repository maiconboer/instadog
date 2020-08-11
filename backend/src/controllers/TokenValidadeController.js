const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
  async validate(request, response, next) {
    try {

      const authHeader = request.headers.authorization;

      if(!authHeader) {
        return response.status(401).json({ error: 'No token provided'})
      }

      const parts = authHeader.split(' ');

      if(!parts.length === 2) {
        return response.status(401).json({ error: 'Token error'});
      }

      const [ scheme, token ] = parts;

      if(!/^Bearer$/i.test(scheme)) {
        return response.status(401).json({ error: 'Badly formatted token' });
      }

      jwt.verify(token, authConfig.secret, (error, decoded) => {
        if(error) {
          return response.status(401).json({ error: 'Invalid token' });
        }

        request.userId = decoded.id;
        request.username = decoded.username;
        
        return response.json({
          message: 'Invalid token!',
          id: request.userId,
          username: request.username
        })
      })
    
    } catch (error) {
      next(error);
    }
  }
}
