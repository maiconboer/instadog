const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const PhotoController = require('./controllers/PhotoController');
const CommentController = require('./controllers/CommentController');
const AuthenticateController = require('./controllers/AuthenticateController');
const TokenValidadeController = require('./controllers/TokenValidadeController');
const PasswordResetController = require('./controllers/PasswordResetController');

// authentication, validate password-recovery
routes.post('/authenticate', AuthenticateController.authenticate)
routes.post('/token/validate', TokenValidadeController.validate)
routes.post('/password-reset', PasswordResetController.reset)

// users
routes.post('/users', UserController.create);
routes.get('/users', authMiddleware, UserController.index);
routes.get('/users/:id', authMiddleware, UserController.show);
routes.put('/users/:id', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.delete);

// photos
routes.post('/photos', multer(multerConfig).single('file'), authMiddleware, PhotoController.create);
routes.get('/photos', authMiddleware, PhotoController.index);
routes.get('/photos/:id', authMiddleware, PhotoController.show);
routes.delete('/photos/:id', authMiddleware, PhotoController.delete);

// comments
routes.post('/photos/:id/comments', authMiddleware, CommentController.create);
routes.get('/photos/:id/comments', authMiddleware, CommentController.index);
routes.put('/photos/:id/comments/:id', authMiddleware, CommentController.update);
routes.delete('/photos/:id/comments:id', authMiddleware, CommentController.delete);

module.exports = routes;