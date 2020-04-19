import Produto from '../models/Produto';

class ProdutoController {
  async store(req, res) {
    const {
      nome,
      peso,
      preco,
      categoria,
      sub_categoria,
    } = await Produto.create(req.body);

    return res.json({ nome, peso, preco, categoria, sub_categoria });
  }

  async index(req, res) {
    const { categoria, sub_categoria } = req.params;

    const produtos = await Produto.findAll({
      where: { categoria, sub_categoria },
      attributes: ['nome', 'peso', 'preco', 'categoria'],
    });

    return res.json(produtos);
  }
}

export default new ProdutoController();
