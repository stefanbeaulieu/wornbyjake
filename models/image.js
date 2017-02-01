// var sequelize = require('sequelize')
// module.exports = function(sequelize, DataTypes) {
//   var Image = sequelize.define("Image", {
//     // Giving the Author model a name of type STRING
// image_id_1: {
//     type: DataTypes.INTEGER
// },
// image_type_1: {
//     type: DataTypes.STRING,
//     allowNull: false
// },
// image_1: {
//     type: DataTypes.BLOB('long')
// },
// image_size_1: {
//     type: DataTypes.INTEGER
// },
// image_name_1: {
//     type: DataTypes.STRING
// },
// image_id_2: {
//     type: DataTypes.INTEGER
// },
// image_type_2: {
//     type: DataTypes.STRING,
//     allowNull: false
// },
// image_2: {
//     type: DataTypes.BLOB('long')
// },
// image_size_2: {
//     type: DataTypes.INTEGER
// },
// image_name_2: {
//     type: DataTypes.STRING
// },
// image_id_3: {
//     type: DataTypes.INTEGER
// },
// image_type_3: {
//     type: DataTypes.STRING,
//     allowNull: false
// },
// image_3: {
//     type: DataTypes.BLOB('long')
// },
// image_size_3: {
//     type: DataTypes.INTEGER
// },
// image_name_3: {
//     type: DataTypes.STRING
// }

//   });
// };

// sequelize.sync({
// 	force: true,
// 	logging: console.log

// }).then(function () {
// 	console.log('Everything is synced');
	
// 	//Give any image name here.
// 	var imageData = FS.readFileSync(__dirname + '/123_icon.png');

// 	Image_Store.create({
// 		image_id: 123,
// 		image_type: 'png',
// 		image: imageData,
// 		image_size: 3,
// 		image_name: 'FileName'
// 	}).then(function (image_store) {
// 		try {
// 			//console.log(image_store.image)
// 			FS.writeFileSync(__dirname + '/target.png', image_store.image);
// 		} catch (e) {
// 			console.log(e+'');
// 		}
// 	});
// });