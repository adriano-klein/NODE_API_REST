const modelTable = require("../routes/suppliers/modelSuppliersTable");

modelTable
  .sync()
  .then(() => console.log("Tabela criada com sucesso"))
  .catch(console.log("deu ruim"));
