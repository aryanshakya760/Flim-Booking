// for using in another files

module.exports = (sequelize, DataTypes) => {
  // // Table name as Blog in double quote and Blog as variable in front
  const Booking = sequelize.define("Booking", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Booking;
};
