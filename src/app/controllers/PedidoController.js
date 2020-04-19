import Pedido from '../models/Pedido';
import Produto from '../models/Produto';
import Usuario from '../models/Usuario';
import Endereco from '../models/Endereco';
import PedidoProduto from '../models/PedidoProduto';

class PedidoController {
  async store(req, res) {
    const { produtos, valor, idEndereco } = req.body;
    const { idUsuario } = req;

    const usuario = await Usuario.findOne({ where: { id: idUsuario } });

    if (!usuario) {
      return res.status(401).json({ error: 'Usuário inválido' });
    }

    const endereco = await Endereco.findOne({ where: { id: idEndereco } });

    if (!endereco) {
      return res.status(401).json({ error: 'Endereço inválido' });
    }

    const data = Date();

    const { id: idPedido } = await Pedido.create({
      data,
      status: 1,
      valor,
      id_usuario: idUsuario,
      id_endereco: idEndereco,
    });

    const productsIds = produtos.map((produto) => produto.idProduto);

    const products = await Produto.findAll({
      where: { id: productsIds },
      attributes: ['nome', 'peso', 'preco', 'categoria', 'sub_categoria'],
    });

    if (products.length !== productsIds.length) {
      await Pedido.destroy({ where: { id: idPedido } });

      return res.status(400).json({ error: 'Produto Inválido' });
    }

    produtos.forEach(async ({ idProduto, quantidade }) => {
      await PedidoProduto.create({
        id_pedido: idPedido,
        id_produto: idProduto,
        quantidade,
      });
    });

    return res.json({
      data,
      status: 1,
      valor,
      produtos: products,
    });
  }
}

export default new PedidoController();
