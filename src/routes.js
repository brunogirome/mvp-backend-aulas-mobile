import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);

export default routes;
