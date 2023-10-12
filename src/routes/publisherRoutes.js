const express = require("express");
const router = express.Router();

const {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
  getAllBooksForPublisherWithId,
  addBookIDToPublisherWithId,
} = require("../controllers/publishersController");

router.get("/", getAllPublishers);
router.get("/:id", getPublisherById);
router.get("/withbooks/:id", getAllBooksForPublisherWithId);
router.post("/", createPublisher);
router.put("/:id", updatePublisher);
router.put("/addbook/:id", addBookIDToPublisherWithId);
router.delete("/:id", deletePublisher);

module.exports = router;
