const express = require("express");
const app = express();
const config = require("config");
const routes = require("./routes/suppliers/index");

app.use(express.json());

app.get("/api/suppliers", routes);
app.listen(config.get("api.port"), () => console.log("Servidor rodando"));
