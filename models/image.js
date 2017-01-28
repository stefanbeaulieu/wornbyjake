module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    // Giving the Author model a name of type STRING
image_id_1: {
    type: DataTypes.INTEGER
},
image_type_1: {
    type: DataTypes.STRING,
    allowNull: false
},
image_1: {
    type: DataTypes.BLOB('long')
},
image_size_1: {
    type: DataTypes.INTEGER
},
image_name_1: {
    type: DataTypes.STRING
},
image_id_2: {
    type: DataTypes.INTEGER
},
image_type_2: {
    type: DataTypes.STRING,
    allowNull: false
},
image_2: {
    type: DataTypes.BLOB('long')
},
image_size_2: {
    type: DataTypes.INTEGER
},
image_name_2: {
    type: DataTypes.STRING
},
image_id_3: {
    type: DataTypes.INTEGER
},
image_type_3: {
    type: DataTypes.STRING,
    allowNull: false
},
image_3: {
    type: DataTypes.BLOB('long')
},
image_size_3: {
    type: DataTypes.INTEGER
},
image_name_3: {
    type: DataTypes.STRING
}

  });
};