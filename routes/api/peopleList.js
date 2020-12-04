const router = require("express").Router();
const peopleListController = require("../../controllers/peoplelistController");

// Matches with "/api/peoplelist"
router.route("/")
  .get(peopleListController.findAll)
  .post(peopleListController.create);

// router.post("/get")
// router.get("/me", auth, async (req, res) => {
//   try {
// }

module.exports = router;