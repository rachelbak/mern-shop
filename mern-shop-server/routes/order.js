import { Router } from "express"
import { add, deleteById, getAll, getUserOrder, updateByIdDeliveryStarted } from "../controller/order.js"
import { check, checkAdmin } from "../middlewares/validateToken.js";

const router = Router();
router.get("/", getAll);
router.post("/", check, add);
router.delete("/:id", deleteById);
router.get("/user/:codeUser", getUserOrder);
router.put("/:id", updateByIdDeliveryStarted);


export default router;
