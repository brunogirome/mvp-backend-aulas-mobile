import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Usuario from '../app/models/Usuario';
import Endereco from '../app/models/Endereco';
import Produto from '../app/models/Produto';

const models = [Usuario, Endereco, Produto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
