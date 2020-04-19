import Endereco from '../models/Endereco';

class EnderecoController {
  async store(req, res) {
    // const { rua, numero, bairro, cidade, estado, cep, observacoes } = req.body

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
}

export default new EnderecoController();
