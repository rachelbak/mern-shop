import orderModel from "../models/order.js";
import mongoose from "mongoose";
import userModel from "../models/user.js";

// שליפת כל ההזמנות
export const getAll = async (req, res) => {
    try {
        let data = await orderModel.find();
        res.json(data);
    } catch (err) {
        return res.status(400).json({ title: "cannot get all orders", message: err.message });
    }
};

// שליפת כל ההזמנות של משתמש מסויים
export async function getUserOrder(req, res) {
    let { codeUser } = req.params;
    if (!mongoose.isValidObjectId(codeUser)) {
        return res.status(400).json({ title: "id not valid", message: "id is not in correct format" });
    }
    try {
        let user = await userModel.findById(codeUser);
        if (!user) {
            return res.status(404).json({ title: "wrong id", message: "no user with such id found" });
        }
        let allOrders = await orderModel.find({ codeUser });
        res.json(allOrders);
    } catch (err) {
        return res.status(400).json({ title: "cannot get orders", message: err.message });
    }
}

// מחיקת הזמנה (רק אם לא יצאה לדרך)
export async function deleteById(req, res) {
    let { id } = req.params;
    try {
        let data = await orderModel.findById(id);
        if (!data) {
            return res.status(404).json({ title: "wrong id", message: "no order with such id found" });
        }
        if (data.deliveryStarted) {
            return res.status(400).json({ title: "order in process", message: "Cannot delete an order that has already been processed" });
        }
        const deletedData = await orderModel.findByIdAndDelete(id);
        res.json(deletedData);
    } catch (err) {
        return res.status(400).json({ title: "cannot delete by id", message: err.message });
    }
}

// עדכון הזמנה שהוצאה לדרך
export async function updateByIdDeliveryStarted(req, res) {
    const { id } = req.params;
    const { deliveryStarted } = req.body;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ title: "id not valid", message: "id is not in correct format" });
    }
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(id, { deliveryStarted }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ title: "wrong id", message: "no order with such id found" });
        }
        res.json(updatedOrder);
    } catch (err) {
        return res.status(400).json({ title: "cannot update order", message: err.message });
    }
}

// הוספת הזמנה
export async function add(req, res) {
    let { body } = req;

    // שדות חובה
    if (!body.codeUser || !body.targetAddress ) {
        return res.status(400).json({ title: "missing required fields", message: "codeUser, targetAddress, targetDate, and orderProducts are required" });
    }
    
    try {
        let newOrder = new orderModel(body);
        const savedOrder = await newOrder.save();
        res.json(savedOrder);
    } catch (err) {
        return res.status(400).json({ title: "cannot add order", message: err.message });
    }
}