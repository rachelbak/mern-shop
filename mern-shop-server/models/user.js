import { Schema, model } from "mongoose";
import validator from "validator";
const userSchema = Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: {
        type: String,
        required: true, // חובה
        unique: true, // חובה שהדוא"ל יהיה ייחודי
        validate: {
            validator: (v) => validator.isEmail(v), // אימות אם כתובת הדוא"ל חוקית
            message: "Invalid email address"
        }
    },
    phone: {
        type: String,
        required: true
    },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN"] },
    registerDate: { type: Date, default: Date.now },
})
const userModel = model("user", userSchema);
export default userModel;
