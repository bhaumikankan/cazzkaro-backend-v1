const { ProductController } = require("../../controller");
const auth = require("../../middleware/auth");

const router = require("express").Router();

router.use(auth);

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
