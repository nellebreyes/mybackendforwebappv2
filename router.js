const router = require("express").Router();
const userController = require("./controllers/userController");
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) => res.json("Backend is up and running."));

//user related routes
router.post(
  "/profile/:id",
  userController.apiMustBeLoggedIn,
  userController.profileBasicData
);
router.post("/register", userController.apiRegister);
router.post("/login", userController.apiLogin);

module.exports = router;
