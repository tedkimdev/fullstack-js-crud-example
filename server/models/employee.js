module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  })

  return Employee;
};

// {
//   "id": 1,
//   "name": "Kyle Lowry",
//   "code": "F100",
//   "profession": "Drywall Installer",
//   "color": "#FF6600",
//   "city": "Brampton",
//   "branch": "Abacus",
//   "assigned": true
// }