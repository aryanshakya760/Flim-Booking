// for using in another files

module.exports = (sequelize, DataTypes) => {
    // // Table name as Blog in double quote and Blog as variable in front
    const Seat = sequelize.define("Seat", {
        seatCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Seat.associate = (models) => {
        Seat.hasMany(models.Booking, {
            onDelete: "cascade",
        });
    };
    return Seat;
};