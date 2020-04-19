import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        cep: Sequelize.STRING,
        observacoes: Sequelize.STRING,
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
      as: 'dono',
    });

    /* this.belongsTo(models.Pedido, {
      foreignKey: 'id_endereco',
      as: 'endereco',
    }); */
  }
}

export default Endereco;
