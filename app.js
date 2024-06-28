const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
var logger = require("morgan");
const port = 9000;
const app = express();
require("dotenv").config();

// Import router
const proyekController = require("./controllers/proyekController");
const karyawanController = require("./controllers/karyawanController");
const kegiatanController = require("./controllers/kegiatanController");

// Import Middlewares
const notFoundMiddleware = require("./middlewares/not-found");
const handleErrorMiddleware = require("./middlewares/handler-error");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Proyek
app.post("/proyek", proyekController.create);

app.get("/proyek", proyekController.index);

//Karyawan
app.post("/karyawan", karyawanController.create);

app.get("/karyawan", karyawanController.index);

//Kegiatan
app.post("/kegiatan", kegiatanController.create);

app.get("/kegiatan", kegiatanController.index);

app.get("/kegiatan/:id", kegiatanController.getOne);

app.put("/kegiatan/:id", kegiatanController.update);

app.delete("/kegiatan/:id", kegiatanController.destroy);

//middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

// Public File Access

app.listen(port, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${port}`);
});

module.exports = app;
