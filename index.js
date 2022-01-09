const express = require("express");
const app = express();
const config = require("config");
const supplierRoutes = require("./api/routes/suppliers/index");
const NotFound = require("./api/erros/NotFound");
const InvalidField = require("./api/erros/InvalidField");
const NotProvidedData = require("./api/erros/NotProvidedData");

app.use(express.json());

app.use("/api/suppliers", supplierRoutes);

app.use((error, req, res, next) => {
  const status = 500;
  if (error instanceof NotFound) {
    status == 404;
  }

  if (error instanceof InvalidField || error instanceof NotProvidedData) {
    status = 400;
  }
  res.status(status);
  res.send(
    JSON.stringify({
      message: error.message,
      id: error.idErro,
    })
  );
});

app.listen(config.get("api.port"), () => console.log("Servidor rodando"));
