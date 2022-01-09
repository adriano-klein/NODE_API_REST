class NotProvidedData extends Error {
  constructor() {
    super("Não foram fornecidos dados para atualizar");
    this.name = "NotProvidedData";
    this.idError = 2;
  }
}

module.exports = NotProvidedData;
