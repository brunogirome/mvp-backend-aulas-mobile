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
}

export default Produto;
