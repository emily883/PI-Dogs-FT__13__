const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define("temperament", {
        nameT: {
          type: DataTypes.STRING
        },
      })
};