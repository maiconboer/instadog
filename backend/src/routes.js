const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const PhotoController = require('./controllers/PhotoController');

// users
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// photos
routes.get('/photos', PhotoController.index);
routes.post('/photos', PhotoController.create);

module.exports = routes;