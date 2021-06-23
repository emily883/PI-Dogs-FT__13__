const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define("temperament", {
      temperament: {
          type: DataTypes.STRING
        },
      },{timestamps: false})
};