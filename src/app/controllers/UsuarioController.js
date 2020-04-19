import { Op } from 'sequelize';

import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    const userExists = await Usuario.findOne({
      where: { [Op.or]: [{ email: req.body.email }, { cpf: req.body.cpf }] },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    const { id, nome, email, telefone, cpf } = await Usuario.create(req.body);

    return res.json({
      id,
      nome,
      email,
      telefone,
      cpf,
    });
  }

  async index(req, res) {
    const users = await Usuario.findAll();

    return res.json(users);
  }
}

export default new UsuarioController();
