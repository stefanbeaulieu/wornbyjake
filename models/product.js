module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        // Giving the Author model a name of type STRING

        prod_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prod_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 200]
        },
        prod_cat: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1, 50]

        },
        prod_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            isDecimal: true,
            isNumeric: true
        },
        prod_trade: {
            type: DataTypes.BOOLEAN,
            isAlpha: true,
            allowNull: true

        }
    });
    return Product;
};