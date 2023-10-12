const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBookWithPublisherForId,
  addPublisherIDToBookWithId,
} = require("../controllers/booksController");

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.get("/withpublisher/:id", getBookWithPublisherForId);
router.post("/", createBook);
router.put("/:id", updateBook);
router.put("/addpublisher/:id", addPublisherIDToBookWithId);
router.delete("/:id", deleteBook);

module.exports = router;
