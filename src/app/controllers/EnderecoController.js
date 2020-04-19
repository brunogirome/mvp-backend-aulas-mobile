import Endereco from '../models/Endereco';

class EnderecoController {
  async store(req, res) {
    const {
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      observacoes,
    } = await Endereco.create({ ...req.body, id_usuario: req.idUsuario });

    return res.json({
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      observacoes,
    });
  }

  async index(req, res) {
    const { idUsuario } = req;

    const addresses = await Endereco.findAll({
      where: { id_usuario: idUsuario },
      attributes: [
        'rua',
        'numero',
        'bairro',
        'cidade',
        'estado',
        'cep',
        'observacoes',
      ],
    });

    return res.json(addresses);
  }
}

export default new EnderecoController();
