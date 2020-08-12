const express = require('express');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const PhotoController = require('./controllers/PhotoController');
const AuthenticateController = require('./controllers/AuthenticateController');
const TokenValidadeController = require('./controllers/TokenValidadeController');

// authentication & validate
routes.post('/authenticate', AuthenticateController.authenticate)
routes.post('/token/validate', TokenValidadeController.validate)

// users
routes.post('/users', UserController.create);
routes.get('/users', authMiddleware, UserController.index);
routes.get('/users/:id', authMiddleware, UserController.show);
routes.put('/users/:id', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.delete);

// photos
routes.get('/photos', authMiddleware, PhotoController.index);
routes.post('/photos', authMiddleware, PhotoController.create);

module.exports = routes;