module.exports = function(sequelize, DataType) {
  var Image = sequelize.define("Image", {
    // Giving the Author model a name of type STRING
image_id_1: {
    type: DataType.INTEGER
},
image_type_1: {
    type: DataType.STRING,
    allowNull: false
},
image_1: {
    type: DataType.BLOB('long')
},
image_size_1: {
    type: DataType.INTEGER
},
image_name_1: {
    type: DataType.STRING
},
image_id_2: {
    type: DataType.INTEGER
},
image_type_2: {
    type: DataType.STRING,
    allowNull: false
},
image_2: {
    type: DataType.BLOB('long')
},
image_size_2: {
    type: DataType.INTEGER
},
image_name_2: {
    type: DataType.STRING
},
image_id_3: {
    type: DataType.INTEGER
},
image_type_3: {
    type: DataType.STRING,
    allowNull: false
},
image_3: {
    type: DataType.BLOB('long')
},
image_size_3: {
    type: DataType.INTEGER
},
image_name_3: {
    type: DataType.STRING
}

  });
};