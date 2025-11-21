import { Schema, model } from "mongoose";
const productSchema = Schema({
    nameproduct: { type: String, required: true, trim: true },
    description: String,
    bearthDate: { type: Date, default: new Date() },
    image: String,
    price: { type: Number, required: true, min: 0 },
    
    speeking: { type: String, default: "noSpeeking", enum: ["noSpeeking", "speeking"] },
    // expirationDate: { type: Date, default: new Date() },

})
const productModel = model("product", productSchema);
export default productModel;

