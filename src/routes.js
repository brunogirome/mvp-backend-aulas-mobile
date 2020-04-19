import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import EnderecoController from './app/controllers/EnderecoController';
import ProdutoController from './app/controllers/ProdutoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/sessions', SessionController.store);

routes.get('/produtos/:categoria/:sub_categoria', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);

routes.use(authMiddleware);

routes.get('/usuarios', UsuarioController.index);

routes.get('/enderecos', EnderecoController.index);
routes.post('/enderecos', EnderecoController.store);

export default routes;
