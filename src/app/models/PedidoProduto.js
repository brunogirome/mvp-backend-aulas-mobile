import Sequelize, { Model } from 'sequelize';

class PedidoProduto extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: Sequelize.INTEGER,
      },
      { sequelize, tableName: 'pedidos_produtos' }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pedido, {
      foreignKey: 'id_pedido',
      as: 'pedido',
    });

    this.belongsTo(models.Endereco, {
      foreignKey: 'id_produto',
      as: 'produto',
    });
  }
}

export default PedidoProduto;
