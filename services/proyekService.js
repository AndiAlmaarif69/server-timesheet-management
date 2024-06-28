const { BadRequestError } = require("../errors");
const { Proyek } = require("../models");

module.exports = {
  createProyek: async (req, res) => {
    const { namaProyek } = req.body;

    if (!namaProyek) {
      throw new BadRequestError("Nama Group belum di input");
    }

    const createProyek = await Proyek.create({
      namaProyek,
    });
    return createProyek;
  },

  getAllProyek: async (req, res) => {
    const result = await Proyek.findAll();

    return result;
  },
};
