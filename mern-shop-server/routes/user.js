import { Router } from "express"
import { add, getById, deleteById, getAll, updateById, updatePassword, login } from "../controller/user.js"
import { check } from "../middlewares/validateToken.js";

const router = Router(); 
router.post("/", add);
router.get("/:id", getById);
router.get("/", getAll);
router.delete("/:id", deleteById);
router.put("/:id", updateById);
router.put("/:id/password",check, updatePassword);
router.post("/login", login);

export default router;
