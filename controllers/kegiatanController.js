const { StatusCodes } = require("http-status-codes");
const {
  createKegiatan,
  getAllKegiatan,
  getOneKegiatan,
  updateKegiatan,
  deleteKegiatan,
} = require("../services/kegiatanService");

const create = async (req, res, next) => {
  try {
    const result = await createKegiatan(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllKegiatan(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const result = await getOneKegiatan(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateKegiatan(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteKegiatan(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index, getOne, update, destroy };
