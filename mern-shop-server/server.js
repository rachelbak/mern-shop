import express from "express";
import productRouter from "./routes/product.js"
import userRouter from "./routes/user.js"
import orderRouter from "./routes/order.js"
import cors from "cors"
import { ConnectToDB } from "./config/Db.js";

const app = express();
app.use(cors())
app.use(express.json())

ConnectToDB();
app.get('/users', (req, res) => {
  // לדוגמה, מחזירים מערך של משתמשים
  res.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
});
// app.use("/products", productRouter);
// app.use("/users", userRouter);
// app.use("/orders", orderRouter);
let port = process.env.PORT;

app.listen(port, "localhost", () => {
    console.log(`app is running on port ${port}`);
})