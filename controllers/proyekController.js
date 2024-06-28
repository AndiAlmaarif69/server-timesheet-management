const { StatusCodes } = require("http-status-codes");
const { createProyek, getAllProyek } = require("../services/proyekService");

const create = async (req, res, next) => {
  try {
    const result = await createProyek(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllProyek(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index };
