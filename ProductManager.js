const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  // obtener todos los productos
  async getAllProducts(limit) {
    const data = await fs.promises.readFile(this.path, "utf-8");
    const products = JSON.parse(data);

    if (products.length <= 0) {
      console.log("No hay productos en la base de datos!");
    } else {
      if (limit) {
        return products.slice(0, limit);
      } else {
        return products;
      }
    }
  }

  //  obtener un producto por su id
  async getProductById(id) {
    const data = await fs.promises.readFile(this.path, "utf-8");
    const products = JSON.parse(data);

    const product = products.find((p) => p.id === id);
    return product ? product : null;
  }
}

module.exports = ProductManager;
