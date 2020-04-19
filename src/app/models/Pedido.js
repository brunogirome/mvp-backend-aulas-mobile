import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
    this.belongsTo(models.Endereco, {
      foreignKey: 'id_endereco',
      as: 'endereco',
    });
  }
}

export default Pedido;
