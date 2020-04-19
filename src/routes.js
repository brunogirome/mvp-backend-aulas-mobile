import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import EnderecoController from './app/controllers/EnderecoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/usuarios', UsuarioController.index);

routes.post('/enderecos', EnderecoController.store);

export default routes;
