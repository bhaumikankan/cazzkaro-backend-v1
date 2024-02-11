const { CategoryController } = require("../../controller");

const router = require("express").Router();

router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.getCategorys);
router.get("/:id", CategoryController.getCategoryById);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
