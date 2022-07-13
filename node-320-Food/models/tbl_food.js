import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;
const Datatypes = Sequelize.DataTypes;

export default class tbl_food extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        d_id: {
          type: Datatypes.INTEGER,
          autoInerement: true,
          primaryKey: true,
        },
        d_date: {
          type: Datatypes.STRING(10),
          allowNull: false,
        },
        d_food: {
          type: Datatypes.STRING(50),
          allowNull: false,
        },
        d_qty: {
          type: Datatypes.INTEGER,
          allowNull: true,
        },
        d_kcal: {
          type: Datatypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_food",
        timestamps: false,
      }
    );
  }
}
