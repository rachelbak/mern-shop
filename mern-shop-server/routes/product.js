import { Router } from "express"
import { add, deleteById, getAll, getById, updateById, getTotalCount } from "../controller/product.js"
import { check, checkAdmin } from "../middlewares/validateToken.js";

const router = Router();
router.get("/", getAll);
router.get("/total", getTotalCount);
router.get("/:id", getById);
router.post("/", checkAdmin, add);
router.delete("/:id",checkAdmin,  deleteById);
router.put("/:id", checkAdmin, updateById);

export default router;