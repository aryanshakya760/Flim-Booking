// for using in another files

module.exports = (sequelize, DataTypes) => {
  // // Table name as Blog in double quote and Blog as variable in front
  const Show = sequelize.define("Show", {
    show: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  Show.associate = (models) => {
    Show.hasMany(models.Booking, {
      onDelete: "cascade",
    });
  };
  return Show;
};
