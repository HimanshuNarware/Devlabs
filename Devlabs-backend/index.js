import "dotenv/config";
import express, { request, response } from "express";
import cors from 'cors';
import mongoose from "mongoose";
import productsRoute from './src/routes/productsRoute.js';

const app = express();
const PORT = process.env.PORT_NUM || 3000;
const mongodbURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors())

app.get("/", (request, response) => {
  response.send("Hi there");
});

app.use("/products", productsRoute)

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App successfully connected to database");
    app.listen(PORT, () => {
      console.log(`Listen on the port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
