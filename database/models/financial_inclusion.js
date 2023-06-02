module.exports = (sequelize, DataTypes) => {
  const Financial_Inclusion = sequelize.define(
    "Financial_Inclusion",
    {
      FII: DataTypes.STRING,
      year2008: DataTypes.FLOAT,
      year2012: DataTypes.FLOAT,
      year2016: DataTypes.FLOAT,
      year2020: DataTypes.FLOAT,
    },
    {}
  );
  return Financial_Inclusion;
};
