import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        productName: String,
        category: String,
        image: String,
        link: String,
        description: String
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model("Product", productSchema)