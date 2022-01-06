const route = require("express").Router();
const TableModel = require("./modelSuppliersTable");
const Supplier = require("./Supplier");

route.post("/", async (req, res) => {
  const receivedData = req.body;
  const supplier = new Supplier(receivedData);

  await supplier.create();

  res.status(200).json(supplier);
});

route.get("/", async (req, res) => {
  const resultados = await TableModel.findAll();
  res.status(200).json(resultados);
});

route.get("/:supplier_id", async (req, res) => {
  try {
    const id = req.params.supplier_id;
    const supplier = new Supplier({ id });
    await supplier.findById();

    res.send(supplier);
  } catch (error) {
    res.status(400).json("Fornecedor não encontrado");
  }
});

module.exports = route;
