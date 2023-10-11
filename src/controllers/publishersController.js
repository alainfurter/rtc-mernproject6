const {
  getAllPublishersDB,
  getPublisherByIdDB,
  createPublisherDB,
  updatePublisherDB,
  deletePublisherDB,
  getAllBooksForPublisherWithId,
} = require("../repositories/publisherFunctions");

// GET http://localhost:4001/publishers
const getAllPublishers = async (req, res) => {
  const publishers = await getAllPublishersDB();
  res.status(200).json({ data: publishers });
};

// GET http://localhost:4001/publisher/:id
const getPublisherById = async (req, res) => {
  const { id } = req.params;
  const publisher = await getPublisherByIdDB(id);
  res.status(200).json({ data: publisher });
};

// POST http://localhost:4001/publisher
const createPublisher = async (req, res) => {
  const newPublisher = await createPublisherDB({
    title: req.body.title,
    author: req.body.author,
    language: req.body.language,
    year: req.body.year,
    publisher: req.body.publisher,
  });
  res.status(201).json({
    data: newPublisher,
  });
};

// PUT http://localhost:4001/publisher/:id
const updatePublisher = async (req, res) => {
  const { id } = req.params;
  const updatedPublisher = await updatePublisherDB(id, req.body);
  res.status(200).json({ data: updatedPublisher });
};

// DELETE http://localhost:4001/publisher/:id
const deletePublisher = async (req, res) => {
  const { id } = req.params;
  deletePublisherDB(id);
  res.status(200).json({ data: "Publisher deleted" });
};

// --------------------------------------------------

// GET http://localhost:4001/publisher/:id
const getAllBooksForPublisherWithId = async (req, res) => {
  const { id } = req.params;
  const publisherAndBooks = await getAllBooksForPublisherWithIdDB(id);
  res.status(200).json({ data: publisherAndBooks });
};

module.exports = {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
  getAllBooksForPublisherWithId,
};
