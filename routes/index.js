const { Router } = require("express");
const controllers = require('../controllers/index')
const router = Router();

router.get("/", (req, res) => res.send("Welcome"));
router.get("/table", controllers.getTable);
router.post("/table/find/:term", controllers.getOne);

module.exports = router;
