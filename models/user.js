module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
  name: { 
      type: Sequelize.STRING,
      allowNull: false,
      isAlpha: true
  },
  username: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [3, 12]
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      isEmail: true
  },
  password: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [6, 15]
  },
  company_name: {
      type: Sequelize.STRING,
      allowNull: true
  },
  phone_number: {
      type: Sequelize.INTEGER,
      allowNull: true,
      isNumeric: true
  },
  profile_desc: {
      type: Sequelize.STRING,
      allowNull: true,
      len: [0, 200]
  }
   
});
};
