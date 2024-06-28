"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kegiatan.belongsTo(models.Proyek, {
        foreignKey: "proyekId",
      });
    }
  }
  Kegiatan.init(
    {
      tanggal_mulai: DataTypes.DATE,
      tanggal_berakhir: DataTypes.DATE,
      jam_mulai: DataTypes.TIME,
      jam_berakhir: DataTypes.TIME,
      namaKegiatan: DataTypes.STRING,
      proyekId: DataTypes.INTEGER,
      durasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kegiatan",
    }
  );
  return Kegiatan;
};
