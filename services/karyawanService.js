const { BadRequestError } = require("../errors");
const { Karyawan } = require("../models");

module.exports = {
  createKaryawan: async (req, res) => {
    const { nama, rate } = req.body;

    if (!nama) {
      throw new BadRequestError("Nama karyawan belum di input");
    } else if (!rate) {
      throw new BadRequestError("Rate karyawan belum di input");
    }

    const createKaryawan = await Karyawan.create({
      nama,
      rate,
    });
    return createKaryawan;
  },

  getKaryawan: async (req, res) => {
    const result = await Karyawan.findAll();

    return result;
  },
};
