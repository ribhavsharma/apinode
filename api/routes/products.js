const express = require('express');
const router = express.Router();
const categoryData = require('./../../src/data/categories.json');
const productData = require('./../../src/data/products.json');
const allObjects = {
    products: []
  };
  for(let product of productData){
    const jsonProduct=JSON.parse(product);
    for(let categories of categoryData){
        if(product.categoryId == categories.id){
            jsonProduct.categoryId = categories.categoryName;
        }
     }
     jsonProduct.products.push(jsonProduct);

}

router.get('/products', (req, res, next)=>{
     res.status(200).json({
        products : allObjects
    })
})

router.get('/products/:id', (req, res, next)=>{
    const userInput = req.params.id;
    let inputId;
    let jsonProduct = null;
    for (let product of productData.products) {
        if (product.id == inputId) {
          jsonProduct = product;
        }
        res.send(jsonProduct);

      }
    });

    module.exports = router;
