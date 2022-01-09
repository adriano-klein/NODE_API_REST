const express = require("express");
const app = express();
const config = require("config");
const supplierRoutes = require("./api/routes/suppliers/index");
const NotFound = require("./api/erros/NotFound");

app.use(express.json());

app.use("/api/suppliers", supplierRoutes);
app.use((error, req, res, next) => {
  if (error instanceof NotFound) {
    res.status(404);
  } else {
    res.status(400);
  }
});

app.listen(config.get("api.port"), () => console.log("Servidor rodando"));
