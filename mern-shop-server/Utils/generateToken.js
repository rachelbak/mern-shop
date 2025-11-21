import jwt from "jsonwebtoken";
export function generateToken(user) {
    let t = jwt.sign({
        userId: user._id,
        role: user.role,
        userName: user.userName
    },
        process.env.SECRET_KEY,
        {
            expiresIn: 60 * 60
        }
    )
    return t;
}