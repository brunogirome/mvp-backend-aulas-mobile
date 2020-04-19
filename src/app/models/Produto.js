import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        peso: Sequelize.NUMBER,
        preco: Sequelize.FLOAT,
        categoria: Sequelize.NUMBER,
        sub_categoria: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Pedido, {
      foreignKey: 'id_produto',
      through: 'pedidos_produtos',
      as: 'produto',
    });
  }
}

export default Produto;
