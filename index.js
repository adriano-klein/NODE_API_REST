const express = require("express");
const app = express();
const config = require("config");
const supplierRoutes = require("./api/routes/suppliers/index");

app.use(express.json());

app.use("/api/suppliers", supplierRoutes);

app.listen(config.get("api.port"), () => console.log("Servidor rodando"));
