// for using in another files

module.exports = (sequelize, DataTypes) => {
    // // Table name as Blog in double quote and Blog as variable in front
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        dob: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    User.associate = (models) => {
        User.hasOne(models.Booking, {
            onDelete: "cascade",
        });
    };
    return User;
};