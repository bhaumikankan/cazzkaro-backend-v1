const { PostController } = require("../../controller");
const auth = require("../../middleware/auth");

const router = require("express").Router();

router.use(auth);

router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);
router.get("/:id", PostController.getPostById);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

module.exports = router;
