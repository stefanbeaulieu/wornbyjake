module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    // Giving the Author model a name of type STRING

prod_name: {
    type: Sequelize.STRING,
    validate: {
    allowNull: false
    },
},
prod_desc: {
    type: Sequelize.STRING,
    validate: {
    allowNull: false,
    len: [25, 200]
    },
},
prod_cat: {
    type: Sequelize.STRING,
    validate: {
    allowNull: false,
    len: [5, 50]
    },
},
prod_price: {
    type: Sequelize.INTEGER,
    validate: {
    allowNull: false,
    isDecimal: true,
    isNumeric: true
    },
},
prod_trade: {
    type: Sequelize.BOOLEAN,
    validate: {
    isAlpha: true,
    allowNull: false
    }
}
  });
};