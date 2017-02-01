module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
  name: { 
      type: DataTypes.STRING,
      validate: {
      allowNull: false,
      isAlpha: true
      },
  },
  username: {
      type: DataTypes.STRING,
      validate: {
      allowNull: false,
      len: [3, 12]
      },
  },
  email: {
      type: DataTypes.STRING,
      validate: {
      allowNull: false,
      isEmail: true
      },
  },
  password: {
      type: DataTypes.STRING,
      validate: {
      allowNull: false,
      len: [6, 15]
      },
  },
  company_name: {
      type: DataTypes.STRING,
      validate: {
      allowNull: true
      },
  },
  phone_number: {
      type: DataTypes.INTEGER,
      validate: {
      allowNull: true,
      isNumeric: true
      },
  },
  profile_desc: {
      type: DataTypes.STRING,
      validate: {
      allowNull: true,
      len: [0, 200]
      },
  }
   
});
return User;
};
