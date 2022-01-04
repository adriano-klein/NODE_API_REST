const route = require("express").Router();
const TableModel = require("./modelSuppliersTable");
const Supplier = require("./Supplier");

route.post("/", async (req, res) => {
  const receivedData = req.body;
  res.json(receivedData);
  const supplier = new Supplier(receivedData);

  await supplier.create();

  res.status(200).json(supplier);
});

route.get("/", async (req, res) => {
  const resultados = await TableModel.findAll();
  res.status(200).json(resultados);
});

module.exports = route;
