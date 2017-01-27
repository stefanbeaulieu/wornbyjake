module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    // Giving the Author model a name of type STRING
image_id_1: {
    type: Sequelize.INTEGER
},
image_type_1: {
    type: Sequelize.STRING,
    allowNull: false
},
image_1: {
    type: Sequelize.BLOB('long')
},
image_size_1: {
    type: Sequelize.INTEGER
},
image_name_1: {
    type: Sequelize.String
},
image_id_2: {
    type: Sequelize.INTEGER
},
image_type_2: {
    type: Sequelize.STRING,
    allowNull: false
},
image_2: {
    type: Sequelize.BLOB('long')
},
image_size_2: {
    type: Sequelize.INTEGER
},
image_name_2: {
    type: Sequelize.String
},
image_id_3: {
    type: Sequelize.INTEGER
},
image_type_3: {
    type: Sequelize.STRING,
    allowNull: false
},
image_3: {
    type: Sequelize.BLOB('long')
},
image_size_3: {
    type: Sequelize.INTEGER
},
image_name_3: {
    type: Sequelize.String
}

  });
};