module.exports = {
  attributes: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER
    }
  },
  associations: function() {
    User.hasMany(Post);
  },
  options: {
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
