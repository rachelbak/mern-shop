import productModel from "../models/product.js";
import mongoose from "mongoose";
// add,deleteById,getAll,getById,updateById

// export async function getAll(req, res) {
//     try {
//         let data = await productModel.find();
//         res.json(data);
//     } catch (err) {
//         return res.status(400).json({ title: "cannot get all", message: err.message });
//     }
// };



export async function getAll(req, res) {
    let lim = req.query.limit || 10;
    let page = req.query.page || 1;
    try {
        let data = await productModel.find().skip((page - 1) *
            lim).limit(lim);
        res.json(data);
    }
    catch (err) {
        console.log(err.message);
        res.status(400).json({
            title: "error cannot get all", message: "somthing wrong"
        });
    }
}

export const getTotalCount = async (req, res) => {
    let lim = req.query.limit || 10;
    try {
        let data = await productModel.countDocuments();
        res.json({
            totalCount: data,
            pages: Math.ceil(data / lim),
            limit: lim
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            title: "cannot get all",
            massage: err.massage
        })
    }
}

export async function getById(req, res) {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ title: "id not valid", message: "The provided ID is not valid" });
    try {
        let data = await productModel.findById(id);
        if (!data)
            return res.status(404).json({ title: "wrong id", message: "product with this ID does not exist" });
        res.json(data);
    } catch (err) {
        return res.status(400).json({ title: "cannot get all", message: err.message });
    }
}

export async function deleteById(req, res) {
    let { id } = req.params;
    try {
        let data = await productModel.findByIdAndDelete(id);
        if (!data)
            return res.status(404).json({ title: "wrong id", message: "no product with such id found" });
        res.json(data);
    } catch (err) {
        return res.status(400).json({ title: "cannot delete by id", message: err.message });
    }
}

export async function updateById(req, res) {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ title: "id not valid", message: "id is not in correct format" });

    if (!req.body.nameproduct || req.body.nameproduct.trim() === "") {
        return res.status(400).json({ title: "Validation error", message: "Product name cannot be empty" });
    }
    if (!req.body.price || req.body.price <= 0) {
        return res.status(400).json({ title: "Validation error", message: "Valid price is required" });
    }

    try {
        let data = await productModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data)
            return res.status(404).json({ title: "wrong id", message: "no product with such id found" });
        res.json(data);
    } catch (err) {
        return res.status(400).json({ title: "cannot update by id", message: err.message });
    }
}

export async function add(req, res) {
    let { body } = req;

    if (!body.nameproduct || body.nameproduct.trim() === "") {
        return res.status(400).json({ title: "Validation error", message: "Product name is required" });
    }
    if (!body.price || body.price <= 0) {
        return res.status(400).json({ title: "Validation error", message: "Valid price is required" });
    }

    try {
        let newProduct = new productModel(body);
        let data = await newProduct.save();
        res.json(data);
    } catch (err) {
        return res.status(400).json({ title: "cannot add", message: err.message });
    }
}
