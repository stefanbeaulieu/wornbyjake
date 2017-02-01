module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    // Giving the Author model a name of type STRING

prod_name: {
    type: DataTypes.STRING,
    validate: {
    allowNull: false
    },
},
prod_desc: {
    type: DataTypes.STRING,
    validate: {
    allowNull: false,
    len: [25, 200]
    },
},
prod_cat: {
    type: DataTypes.STRING,
    validate: {
    allowNull: false,
    len: [5, 50]
    },
},
prod_price: {
    type: DataTypes.INTEGER,
    validate: {
    allowNull: false,
    isDecimal: true,
    isNumeric: true
    },
},
prod_trade: {
    type: DataTypes.BOOLEAN,
    validate: {
    isAlpha: true,
    allowNull: false
    }
}
  });
  return Product;
};