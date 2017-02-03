var DATABASE_NAME = 'wornbyjake';
var DB_USERNAME = 'root';
var DB_PASSWORD = 'pimpin66';

var Sequelize = require('sequelize');
var FS = require('fs');

var sequelize = new Sequelize(
	DATABASE_NAME, 
	DB_USERNAME, 
	DB_PASSWORD, {
		host:'localhost',
		port:8080,
		dialect:'mysql',
		define: {
			freezeTableName: true
		}
});

//Connect to Database
sequelize.authenticate().then(function (e) {
	if(e) {
		console.log('There is connection ERROR');
	} else {
		console.log('Connection has been established successfully');
	}
});

//Create Table: product
var Product_Store = sequelize.define('product', {
	product_id: {
		type: Sequelize.INTEGER
	},
	product_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	product_desc: {
		type: Sequelize.STRING,
		allowNull: false
	},
	product_price: {
		type: Sequelize.INTEGER
	},
	image1: {
		type: Sequelize.BLOB('long')
	}
});

sequelize.sync({
	force: true,
	logging: console.log

}).then(function () {
	console.log('Everything is synced');

}).then(function () {
	console.log('Everything is synced');
	
	//Give any image name here.
	var imageData = FS.readFileSync(__dirname + '#product_name');

	Product_Store.create({
		product_id: '#product_name',
		product_name: '#product_name',
		product_desc: '#product_desc',
		product_price: '#product_price',
		image1: '#image1'
	}).then(function (product_store) {
		try {
			//console.log(image_store.image)
			FS.writeFileSync(__dirname + '/target.png', product_store.image);
		} catch (e) {
			console.log(e+'');
		}
	});
});




$('#btn-addproduct').click(function(){
    $.post($('#addproductform').attr("action"),
        $('#addproductform :input').serializeArray();
    });
    clearInput();


$('#addproductform').submit(function(){
    return false;
});

function clearInput(){
    $('#addproductform :input').each(function(){
        $(this).val('');
    });
}