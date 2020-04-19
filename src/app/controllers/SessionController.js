import jwt from 'jsonwebtoken';

import Usuario from '../models/Usuario';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, senha } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(senha))) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const { id, nome } = user;

    return res.json({
      user: {
        id,
        nome,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
