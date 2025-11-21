import { Schema, model } from "mongoose";
//import productModel from "./product.js";


const minimalProduct = Schema({
    productCode: { type: String, required: true },
    nameproduct: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    qty: { type: Number, default: 0 },

    // count: { type: Number, required: true },
});

const orderSchema = Schema({
    date: { type: Date, default: new Date() },
    targetDate: { type: Date, default: () => new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) },
    targetAddress: { type: String, required: true },
    // codeUser: String,
    codeUser: { type: Schema.Types.ObjectId, ref: "user", required: true }, // הפניה למשתמש המזמין
    orderProducts: [minimalProduct],
    deliveryStarted: { type: Boolean, default: false },
    deliveryPrice: { type: Number, min: 0, default: 0 },
    finalPrice: { type: Number, min: 0 },
});


const orderModel = model("order", orderSchema);
export default orderModel;

