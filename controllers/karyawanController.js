const { StatusCodes } = require("http-status-codes");
const { createKaryawan, getKaryawan } = require("../services/karyawanService");

const create = async (req, res, next) => {
  try {
    const result = await createKaryawan(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getKaryawan(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index };
