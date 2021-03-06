const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Replies extends Model {}

Replies.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      reply: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
      },
      thread_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'thread',
            key: 'id',
        }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'replies',
    }
);

module.exports = Replies;