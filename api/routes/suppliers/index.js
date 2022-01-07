const route = require("express").Router();
const TableModel = require("./modelSuppliersTable");
const Supplier = require("./Supplier");

//Cadastro de fornecedor
route.post("/", async (req, res) => {
  try {
    const receivedData = req.body;
    const supplier = new Supplier(receivedData);

    await supplier.create();

    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Listar todos os fornecedores cadastrados
route.get("/", async (req, res) => {
  const resultados = await TableModel.findAll();
  res.status(200).json(resultados);
});

//Buscar um fornecedor específico
route.get("/:supplier_id", async (req, res) => {
  try {
    const id = req.params.supplier_id;
    const supplier = new Supplier({ id });
    await supplier.findById();

    res.status(200).json(supplier);
  } catch (error) {
    res.status(400).json("Fornecedor não encontrado");
  }
});

//Atualizar um fornecedor
route.put("/:supplier_id", async (req, res) => {
  try {
    const id = req.params.supplier_id;
    const receivedData = req.body;
    const data = Object.assign({}, receivedData, { id: id });
    const supplier = new Supplier(data);
    await supplier.update();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Deletar um fornecedor
route.delete("/:supplier_id", async (req, res) => {
  try {
    const id = req.params.supplier_id;
    const supplier = new Supplier({ id });

    await supplier.delete();
    res.json("Fornecedor removido com sucesso");
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = route;
