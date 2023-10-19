import express from 'express';
import { Product } from "../models/productModel.js";

const router = express.Router();

// Route to save a new product
router.post("/", async (request, response) => {
    try {
      if (
        !request.body.productName ||
        !request.body.category ||
        !request.body.image ||
        !request.body.link ||
        !request.body.description
      ) {
        return response.status(400).send({
          message: "Please send all the necessary fields",
        });
      }
  
      const newProduct = {
        productName: request.body.productName,
        category: request.body.category,
        image: request.body.image,
        link: request.body.link,
        description: request.body.description,
      };
      const product = await Product.create(newProduct);
      return response.status(201).send(product);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route to get all products from the database
  router.get("/", async (request, response) => {
    try {
      const products = await Product.find({});
      return response.status(200).json(products);
  
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route to get product by id from the database
  router.get("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const product = await Product.findById(id);
      return response.status(200).json(product);
  
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route to update a product in the database
  router.put("/:id", async (request,response) => {
    try {
      if (
        !request.body.productName ||
        !request.body.category ||
        !request.body.image ||
        !request.body.link ||
        !request.body.description
      ) {
        return response.status(400).send({
          message: "Please send all the necessary fields",
        });
      }
      const {id} = request.params;
      const queryResult = await Product.findByIdAndUpdate(id, request.body);
  
      if(!queryResult) {
        return response.status(404).json({message: "Product Not Found"});
      }
  
      return response.status(200).json({message: "Product updated successfully"})
  
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});
    }
  })
  
  // Route to delete a product
  router.delete("/:id", async (request,response) => {
    try {
      const {id} = request.params;
      const queryResult = await Product.findByIdAndDelete(id);
  
      if(!queryResult) {
        return response.status(404).json({message: "Product not found"})
      }
  
      return response.status(200).send({message: "Product deleted successfully"})
  
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});
    }
  })

  

export default router;