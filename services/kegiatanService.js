const { Kegiatan, Proyek } = require("../models");
const { BadRequestError, NotFoundError } = require("../errors");

module.exports = {
  createKegiatan: async (req, res) => {
    const {
      tanggal_mulai,
      tanggal_berakhir,
      jam_mulai,
      jam_berakhir,
      namaKegiatan,
      proyekId,
    } = req.body;

    if (!tanggal_mulai) {
      throw new BadRequestError("Mohon Input Tanggal Mulai");
    } else if (!tanggal_berakhir) {
      throw new BadRequestError("Mohon Input Tanggal Berakhir");
    } else if (!jam_mulai) {
      throw new BadRequestError("Mohon Input Jam Mulai");
    } else if (!jam_berakhir) {
      throw new BadRequestError("Mohon Input Jam Berakhir");
    } else if (!namaKegiatan) {
      throw new BadRequestError("Mohon Input Nama Kegiatan");
    } else if (!proyekId) {
      throw new BadRequestError("Mohon Pilih Proyek");
    }

    const startTime = new Date(`1970-01-01T${jam_mulai}Z`);
    const endTime = new Date(`1970-01-01T${jam_berakhir}Z`);

    const durationInMilliseconds = endTime - startTime;

    const hours = Math.floor(durationInMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor(
      (durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    const durasi = `${hours} jam ${minutes} menit`;

    const createKegiatan = await Kegiatan.create({
      tanggal_mulai,
      tanggal_berakhir,
      jam_mulai,
      jam_berakhir,
      namaKegiatan,
      proyekId,
      durasi,
    });

    return createKegiatan;
  },

  getAllKegiatan: async (req, res) => {
    const result = await Kegiatan.findAll({
      include: [
        {
          model: Proyek,
          attributes: ["namaProyek", "id"],
        },
      ],
    });

    return result;
  },

  getOneKegiatan: async (req, res) => {
    const { id } = req.params;

    const result = await Kegiatan.findOne({
      where: { id },
      include: [
        {
          model: Proyek,
          attribubtes: ["namaProyek", "id"],
        },
      ],
    });

    if (!result)
      throw new NotFoundError(`Tidak ada Kegiatan dengan id :  ${id}`);

    return result;
  },

  updateKegiatan: async (req, res) => {
    const { id } = req.params;

    const {
      tanggal_mulai,
      tanggal_berakhir,
      jam_mulai,
      jam_berakhir,
      namaKegiatan,
      proyekId,
    } = req.body;

    if (!tanggal_mulai) {
      throw new BadRequestError("Mohon Input Tanggal Mulai");
    } else if (!tanggal_berakhir) {
      throw new BadRequestError("Mohon Input Tanggal Berakhir");
    } else if (!jam_mulai) {
      throw new BadRequestError("Mohon Input Jam Mulai");
    } else if (!jam_berakhir) {
      throw new BadRequestError("Mohon Input Jam Berakhir");
    } else if (!namaKegiatan) {
      throw new BadRequestError("Mohon Input Nama Kegiatan");
    } else if (!proyekId) {
      throw new BadRequestError("Mohon Pilih Proyek");
    }

    const check = await Kegiatan.findOne({ where: { id } });

    if (!check)
      throw new NotFoundError(`Tidak ada kegiatan dengan id :  ${id}`);

    const result = await Kegiatan.update(
      {
        tanggal_mulai,
        tanggal_berakhir,
        jam_mulai,
        jam_berakhir,
        namaKegiatan,
        proyekId,
      },
      { where: { id } }
    );

    return result;
  },

  deleteKegiatan: async (req, res) => {
    const { id } = req.params;

    const result = await Kegiatan.destroy({
      where: { id },
    });

    if (!result)
      throw new NotFoundError(`Tidak ada kegiatan dengan id :  ${id}`);

    return result;
  },
};
