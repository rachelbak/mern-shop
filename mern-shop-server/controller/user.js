import userModel from "../models/user.js";
import mongoose from "mongoose";
// import jwt from 'jsonwebtoken';
// add,getById,deleteById,getAll,updateById,updatePassword,login
import { generateToken } from "../Utils/generateToken.js"
export async function getAll(req, res) {
    try {
        let data = await userModel.find();

        // יצירת מערך חדש ללא שדה הסיסמה
        let filteredData = data.map(({ password, ...rest }) => rest);

        res.json(filteredData);
    } catch (err) {
        return res.status(400).json({ title: "cannot get all", message: err.message });
    }
};

export async function getById(req, res) {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ title: "id not valid", message: "id is not in correct format" });
    try {
        let data = await userModel.findById(id);
        if (!data)
            return res.status(404).json({ title: "wrong id", message: "no user with such id found" });

        const { password, ...rest } = data.toObject(); // הסרת שדה הסיסמה
        res.json(rest);
    } catch (err) {
        return res.status(400).json({ title: "cannot get user by id", message: err.message });
    }
}

export function deleteById(req, res) {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ title: "id not valid", message: "id is not in correct format" });
    userModel.findByIdAndDelete(id)
        .then(data => {
            if (!data)
                return res.status(404).json({ title: "wrong id", message: "no user with such id found" });
            res.json(data);
        })
        .catch(err => {
            return res.status(400).json({ title: "cannot delete user by id", message: err.message });
        });
}

export function updateById(req, res) {
    const { id } = req.params;
    const { password, ...updateFields } = req.body; // הסרת שדה הסיסמה
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ title: "id not valid", message: "id is not in correct format" });
    userModel.findByIdAndUpdate(id, updateFields, { new: true })
        .then(data => {
            if (!data)
                return res.status(404).json({ title: "wrong id", message: "no user with such id found" });
            const { password, ...rest } = data.toObject(); // הסרת שדה הסיסמה מהתשובה
            res.json(rest);
            // res.json(data);
        })
        .catch(err => {
            return res.status(400).json({ title: "cannot update user by id", message: err.message });
        });
}

export function add(req, res) {
    let { body } = req;
    if (!body.email || !body.userName || !body.password)
        return res.status(400).json({ title: "missing content", message: "email, username, and password are required" });
    let newUser = new userModel(body);
    newUser.save()
        .then(data => {
            let token = generateToken(newUser);
            const { password, ...rest } = data.toObject(); // הסרת שדה הסיסמה לפני שליחה ללקוח
            res.json({ ...rest, token });
        })
        .catch(err => {
            return res.status(400).json({ title: "cannot add user", message: err.message });
        });
}

// עדכון סיסמה
export async function updatePassword(req, res) {
    const { id } = req.params;
    const { password } = req.body;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ title: "invalid ID", message: "ID format is not valid" });
    }
    if (!password) {
        return res.status(400).json({ title: "missing password", message: "Password is required" });
    }
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, { password }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ title: "user not found", message: "No user with such ID" });
        }
        res.json({ message: "Password updated successfully" });
    } catch (err) {
        return res.status(400).json({ title: "error updating password", message: err.message });
    }
};

// התחברות
export async function login(req, res) {
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ title: "missing credentials", message: "Username and password are required" });
    }
    try {
        const user = await userModel.findOne({ userName, password });
        if (!user) {
            return res.status(401).json({ title: "login failed", message: "Invalid username or password" });
        }
        const { password: pass, ...rest } = user.toObject(); // הסרת שדה הסיסמה מהתשובה

        const token = generateToken(user);
        // שליחת הטוקן ללקוח
        res.json({ ...rest, token });

        // res.json(rest);
    } catch (err) {
        return res.status(400).json({ title: "error logging in", message: err.message });
    }
};