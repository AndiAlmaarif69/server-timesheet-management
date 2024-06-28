"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Kegiatans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tanggal_mulai: {
        type: Sequelize.DATE,
      },
      tanggal_berakhir: {
        type: Sequelize.DATE,
      },
      jam_mulai: {
        type: Sequelize.TIME,
      },
      jam_berakhir: {
        type: Sequelize.TIME,
      },
      namaKegiatan: {
        type: Sequelize.STRING,
      },
      proyekId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Proyeks",
          key: "id",
        },
      },
      durasi: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Kegiatans");
  },
};
