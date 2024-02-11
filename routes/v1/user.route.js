const { UserController } = require("../../controller");

const router = require("express").Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
