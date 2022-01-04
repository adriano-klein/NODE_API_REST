const route = require("express").Router();
const TableModel = require("./modelSuppliersTable");

route.use("/", async (req, res) => {
  const resultados = await TableModel.findAll();
  res.status(200).json(resultados);
});

module.exports = route;
