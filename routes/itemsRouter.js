const express = require("express");
const {
  createItemController,
  getAllItemsController,
  getSingleItemController,
  deleteSingleItemController,
  patchSingleItemController,
} = require("../controllers/itemsControllers");

const router = express.Router();

router.route("/").get(getAllItemsController).post(createItemController);

router
  .route("/:id")
  .get(getSingleItemController)
  .delete(deleteSingleItemController)
  .patch(patchSingleItemController);

module.exports = router;
