const express = require("express");
const ProductManager = require("./ProductManager");

const productManager = new ProductManager("productos.json");
const app = express();



//consulta con limit, http://localhost:8080/products?limit=3 
app.get("/products", async (req, res) => {
  const limit = req.query.limit; 
  const products = await productManager.getAllProducts(limit);
  res.json(products);
});


//consulta por id , http://localhost:8080/products/3 
app.get("/products/:pid", async (req, res) => {
  const productId = req.params.pid; 
  const product = await productManager.getProductById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// server at port  8080
app.listen(8080, () => {
  console.log("server running at port 8080");
});
