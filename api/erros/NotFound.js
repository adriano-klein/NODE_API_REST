class NotFound extends Error {
  constructor() {
    super("Fornecedor não encontrato");
    this.name = "NotFound";
    this.idError = 0;
  }
}

module.exports = NotFound;
