const supplierTable = require("./modelSuppliersTable");
const NotFound = require("../../erros/NotFound");
const InvalidField = require("../../erros/InvalidField");
const NotProvidedData = require("../../erros/NotProvidedData");

class Supplier {
  constructor({ id, company, email, category, createdAt, updatedAt, version }) {
    this.id = id;
    this.company = company;
    this.email = email;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.version = version;
  }

  async create() {
    const fields = ["company", "email", "category"];
    fields.forEach((field) => {
      const value = this[field];

      if ((typeof value !== "string") | (value.length === 0)) {
        throw new InvalidField(field);
      }
    });

    const resultado = await supplierTable.create({
      company: this.company,
      email: this.email,
      category: this.category,
    });

    this.id = resultado.id;
    this.createdAt = resultado.createdAt;
    this.updatedAt = resultado.updatedAt;
    this.version = resultado.version;
  }

  async findById() {
    const encontrado = await supplierTable.findOne({
      where: { id: this.id },
    });

    if (!encontrado) {
      throw new NotFound();
    }

    this.company = encontrado.company;
    this.email = encontrado.email;
    this.category = encontrado.category;
    this.createdAt = encontrado.createdAt;
    this.updatedAt = encontrado.updatedAt;
    this.version = encontrado.version;
  }

  async update() {
    const id = await supplierTable.findOne({ where: { id: this.id } });

    if (!id) {
      throw new NotFound();
    }

    const fields = ["company", "email", "category"];
    const updateData = {};

    fields.forEach((field) => {
      const value = this[field];

      if (typeof value === "string" && value.length > 0) {
        updateData[field] = value;
      }
    });

    if (Object.keys(updateData).length === 0) {
      throw new NotProvidedData();
    }

    await supplierTable.update(updateData, { where: { id: this.id } });
  }

  async delete() {
    const supplier = await supplierTable.findOne({ where: { id: this.id } });

    if (!supplier) {
      throw new Error("Fornecedor não encontrado");
    }

    await supplierTable.destroy({ where: { id: supplier.id } });
  }
}

module.exports = Supplier;
