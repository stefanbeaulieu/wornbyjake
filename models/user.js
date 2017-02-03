module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
  name: { 
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    
  },
  username: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3, 12]

  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [6, 15]

  },
  company_name: {
      type: DataTypes.STRING,
      allowNull: true
  },
  phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
  },
  profile_desc: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [0, 200]
    
  }
   
});
return User;
};
